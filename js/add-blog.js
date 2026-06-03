// Add Blog Page JavaScript

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    setupCharCounters();
});

// Setup Event Listeners
function setupEventListeners() {
    // Toggle Sidebar
    document.querySelector('.menu-toggle')?.addEventListener('click', toggleSidebar);
    
    // Form submission
    document.getElementById('addBlogForm')?.addEventListener('submit', handleFormSubmit);
    
    // File upload
    const fileInput = document.getElementById('featuredImage');
    if (fileInput) {
        fileInput.addEventListener('change', handleImageUpload);
    }
    
    // User profile and notifications
    document.querySelector('.user-profile')?.addEventListener('click', showUserMenu);
    document.querySelector('.notification-icon')?.addEventListener('click', showNotifications);
    
    // Title input for SEO
    const titleInput = document.getElementById('blogTitle');
    if (titleInput) {
        titleInput.addEventListener('input', function() {
            document.getElementById('metaTitle').value = this.value.substring(0, 60);
            updateCharCount(document.getElementById('metaTitle'));
        });
    }
}

// Setup Character Counters
function setupCharCounters() {
    const counterFields = [
        { input: 'blogTitle', max: 100 },
        { input: 'blogExcerpt', max: 140 },
        { input: 'metaTitle', max: 60 },
        { input: 'metaDescription', max: 160 }
    ];
    
    counterFields.forEach(field => {
        const element = document.getElementById(field.input);
        if (element) {
            element.addEventListener('input', function() {
                updateCharCount(this, field.max);
            });
        }
    });
    
    // Content editor character count
    const contentEditor = document.getElementById('blogContent');
    if (contentEditor) {
        contentEditor.addEventListener('input', function() {
            const charCount = this.innerText.length;
            const nextElement = this.nextElementSibling;
            if (nextElement && nextElement.classList.contains('char-count')) {
                nextElement.textContent = charCount + ' characters';
            }
        });
    }
}

// Update Character Count Display
function updateCharCount(element, max = null) {
    const nextElement = element.nextElementSibling;
    if (nextElement && nextElement.classList.contains('char-count')) {
        const length = element.value.length;
        if (max) {
            nextElement.textContent = length + '/' + max + ' characters';
            if (length > max * 0.9) {
                nextElement.style.color = '#F39C12';
            } else {
                nextElement.style.color = 'var(--text-muted)';
            }
        } else {
            nextElement.textContent = length + ' characters';
        }
    }
}

// Handle Image Upload
function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        // Validate file type
        if (!file.type.startsWith('image/')) {
            showNotification('Please select a valid image file', 'error');
            return;
        }
        
        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            showNotification('Image size must be less than 5MB', 'error');
            return;
        }
        
        // Read and display preview
        const reader = new FileReader();
        reader.onload = function(event) {
            const preview = document.getElementById('imagePreview');
            const previewImg = document.getElementById('previewImg');
            previewImg.src = event.target.result;
            preview.style.display = 'block';
            
            // Hide upload label
            document.querySelector('.file-upload-label').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
}

// Remove Image
function removeImage() {
    document.getElementById('featuredImage').value = '';
    document.getElementById('imagePreview').style.display = 'none';
    document.querySelector('.file-upload-label').style.display = 'flex';
}

// Format Text (Rich Text Editor)
function formatText(command) {
    document.execCommand(command, false, null);
    document.getElementById('blogContent').focus();
}

// Handle Form Submit
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Validate required fields
    const title = document.getElementById('blogTitle').value.trim();
    const category = document.getElementById('blogCategory').value;
    const content = document.getElementById('blogContent').innerText.trim();
    
    if (!title) {
        showNotification('Blog title is required', 'error');
        return;
    }
    
    if (!category) {
        showNotification('Please select a category', 'error');
        return;
    }
    
    if (!content) {
        showNotification('Blog content is required', 'error');
        return;
    }
    
    if (content.length < 50) {
        showNotification('Blog content must be at least 50 characters', 'error');
        return;
    }
    
    // Show publishing state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Publishing...';
    submitBtn.disabled = true;
    
    // Simulate publishing (in real app, would send to backend)
    setTimeout(() => {
        // Collect form data
        const formData = {
            title: document.getElementById('blogTitle').value,
            excerpt: document.getElementById('blogExcerpt').value,
            category: document.getElementById('blogCategory').value,
            tags: document.getElementById('blogTags').value,
            content: document.getElementById('blogContent').innerHTML,
            publishDate: document.getElementById('publishDate').value,
            metaTitle: document.getElementById('metaTitle').value,
            metaDescription: document.getElementById('metaDescription').value,
            comments: document.getElementById('enableComments').checked,
            sharing: document.getElementById('enableSharing').checked,
            status: 'published'
        };
        
        console.log('Blog Data:', formData);
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Show success message
        showNotification('Blog published successfully! 🎉', 'success');
        
        // Redirect after 2 seconds
        setTimeout(() => {
            window.location.href = 'all-blogs.html';
        }, 2000);
    }, 1500);
}

// Save as Draft
function saveDraft() {
    const title = document.getElementById('blogTitle').value.trim();
    
    if (!title) {
        showNotification('Please enter a blog title', 'error');
        return;
    }
    
    // Collect form data
    const draftData = {
        title: document.getElementById('blogTitle').value,
        excerpt: document.getElementById('blogExcerpt').value,
        category: document.getElementById('blogCategory').value,
        tags: document.getElementById('blogTags').value,
        content: document.getElementById('blogContent').innerHTML,
        publishDate: document.getElementById('publishDate').value,
        metaTitle: document.getElementById('metaTitle').value,
        metaDescription: document.getElementById('metaDescription').value,
        comments: document.getElementById('enableComments').checked,
        sharing: document.getElementById('enableSharing').checked,
        status: 'draft',
        savedAt: new Date().toISOString()
    };
    
    // Save to localStorage (in real app, would save to backend)
    localStorage.setItem('blogDraft', JSON.stringify(draftData));
    
    showNotification('Blog saved as draft! 💾', 'success');
}

// Preview Blog
function preview() {
    const title = document.getElementById('blogTitle').value.trim();
    const content = document.getElementById('blogContent').innerText.trim();
    
    if (!title || !content) {
        showNotification('Please enter title and content to preview', 'error');
        return;
    }
    
    // Create preview modal
    const previewHTML = `
        <div style="padding: 20px;">
            <h2 style="margin-top: 0; color: var(--dark-text);">${title}</h2>
            <div style="color: var(--text-muted); margin-bottom: 20px;">
                <span>Category: ${document.getElementById('blogCategory').value || 'Not selected'}</span>
                <span style="margin-left: 20px;">Published: ${document.getElementById('publishDate').value || 'Immediately'}</span>
            </div>
            <div style="border-top: 1px solid var(--border-color); padding-top: 20px; line-height: 1.6;">
                ${document.getElementById('blogContent').innerHTML}
            </div>
        </div>
    `;
    
    const modal = createModal('Blog Preview', previewHTML, [
        { text: 'Close', onClick: function() { modal.remove(); }}
    ]);
}

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Logout Function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
}

// Show User Menu
function showUserMenu() {
    const menuHTML = `
        <div style="position: absolute; top: 60px; right: 30px; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 1000; min-width: 200px;">
            <a href="#" style="display: block; padding: 12px 16px; color: #2C3E50; border-bottom: 1px solid #E0E0E0; text-decoration: none;">Profile Settings</a>
            <a href="#" style="display: block; padding: 12px 16px; color: #2C3E50; border-bottom: 1px solid #E0E0E0; text-decoration: none;">Account</a>
            <a href="#" style="display: block; padding: 12px 16px; color: #2C3E50; text-decoration: none;" onclick="logout(); return false;">Logout</a>
        </div>
    `;
    
    const existingMenu = document.querySelector('[data-menu="user"]');
    if (existingMenu) existingMenu.remove();
    
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('data-menu', 'user');
    menuDiv.innerHTML = menuHTML;
    document.body.appendChild(menuDiv);
    
    setTimeout(() => {
        document.addEventListener('click', function closeMenu(e) {
            if (!menuDiv.contains(e.target) && !e.target.closest('.user-profile')) {
                menuDiv.remove();
                document.removeEventListener('click', closeMenu);
            }
        });
    }, 100);
}

// Show Notifications
function showNotifications() {
    const notifications = [
        { title: 'Blog Published', message: 'Your blog "Health Tips" has been published', time: '2 hours ago' },
        { title: 'New Comment', message: 'Someone commented on your blog', time: '5 hours ago' }
    ];
    
    let notificationHTML = '<div style="padding: 20px;">';
    notifications.forEach(notif => {
        notificationHTML += `
            <div style="border-bottom: 1px solid #E0E0E0; padding: 12px 0;">
                <p style="margin: 0; font-weight: 600; color: #2C3E50;">${notif.title}</p>
                <p style="margin: 5px 0; color: #7F8C8D; font-size: 0.9rem;">${notif.message}</p>
                <p style="margin: 5px 0; color: #95A5A6; font-size: 0.85rem;">${notif.time}</p>
            </div>
        `;
    });
    notificationHTML += '</div>';
    
    const modal = createModal('Notifications', notificationHTML, [
        { text: 'Close', onClick: function() { modal.remove(); }}
    ]);
}

// Create Modal Helper
function createModal(title, content, buttons = []) {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5000;
    `;
    
    let buttonsHTML = '';
    buttons.forEach(btn => {
        buttonsHTML += `<button style="padding: 10px 20px; margin-right: 10px; background-color: ${btn.text === 'Cancel' ? '#E0E0E0' : '#FF6B35'}; color: ${btn.text === 'Cancel' ? '#2C3E50' : 'white'}; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">${btn.text}</button>`;
    });
    
    modal.innerHTML = `
        <div style="background: white; border-radius: 10px; padding: 30px; max-width: 600px; max-height: 80vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
            <h2 style="margin-top: 0; margin-bottom: 20px; color: #2C3E50;">${title}</h2>
            <div>${content}</div>
            <div style="margin-top: 25px; text-align: right;">
                ${buttonsHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    const buttonElements = modal.querySelectorAll('button');
    buttonElements.forEach((btn, index) => {
        if (buttons[index]) {
            btn.addEventListener('click', buttons[index].onClick);
        }
    });
    
    return modal;
}

// Show Notification Toast
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'error' ? '#E74C3C' : type === 'success' ? '#2ECC71' : '#3498DB'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Ensure animations are defined
if (!document.querySelector('style[data-animations]')) {
    const style = document.createElement('style');
    style.setAttribute('data-animations', 'true');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Check if user is logged in
window.addEventListener('load', function() {
    const rememberMe = localStorage.getItem('rememberMe');
    if (!rememberMe) {
        // Optionally redirect to login if not logged in
        // window.location.href = 'index.html';
    }
});
