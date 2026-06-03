// Blogs Management JavaScript

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (sidebar && !sidebar.contains(event.target) && menuToggle && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    loadBlogs();
});

// Setup Event Listeners
function setupEventListeners() {
    // Search filter
    const searchFilter = document.querySelector('.search-filter');
    if (searchFilter) {
        searchFilter.addEventListener('keyup', function() {
            filterBlogs();
        });
    }
    
    // Category filter
    const categoryFilter = document.querySelectorAll('.filter-select')[0];
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            filterBlogs();
        });
    }
    
    // Status filter
    const statusFilter = document.querySelectorAll('.filter-select')[1];
    if (statusFilter) {
        statusFilter.addEventListener('change', function() {
            filterBlogs();
        });
    }
    
    // Filter button
    const filterBtn = document.querySelector('.btn-filter');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            filterBlogs();
        });
    }
    
    // Action buttons
    setupActionButtons();
    
    // Pagination
    setupPagination();
    
    // User profile and notifications
    document.querySelector('.user-profile')?.addEventListener('click', showUserMenu);
    document.querySelector('.notification-icon')?.addEventListener('click', showNotifications);
}

// Load Blogs
function loadBlogs() {
    // In a real application, this would fetch from an API
    console.log('Loading blogs...');
}

// Filter Blogs
function filterBlogs() {
    const searchTerm = document.querySelector('.search-filter')?.value.toLowerCase() || '';
    const category = document.querySelectorAll('.filter-select')[0]?.value || '';
    const status = document.querySelectorAll('.filter-select')[1]?.value || '';
    
    const rows = document.querySelectorAll('.blogs-table tbody tr');
    
    rows.forEach(row => {
        let show = true;
        
        // Search filter
        if (searchTerm) {
            const titleCell = row.querySelector('.blog-title-cell span');
            if (!titleCell || !titleCell.textContent.toLowerCase().includes(searchTerm)) {
                show = false;
            }
        }
        
        // Category filter
        if (category && category !== 'All Categories') {
            const categoryCell = row.querySelector('.category-badge');
            if (!categoryCell || !categoryCell.textContent.includes(category)) {
                show = false;
            }
        }
        
        // Status filter
        if (status && status !== 'All Status') {
            const statusCell = row.querySelector('.status-badge');
            if (!statusCell || !statusCell.textContent.includes(status)) {
                show = false;
            }
        }
        
        row.style.display = show ? '' : 'none';
    });
}

// Setup Action Buttons
function setupActionButtons() {
    document.querySelectorAll('.action-buttons .btn-icon').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.title;
            const blogRow = this.closest('tr');
            const blogTitle = blogRow.querySelector('.blog-title-cell span').textContent;
            
            if (action === 'Edit') {
                handleEditBlog(blogRow);
            } else if (action === 'View') {
                handleViewBlog(blogRow);
            } else if (action === 'Duplicate') {
                handleDuplicateBlog(blogRow);
            } else if (action === 'Delete') {
                handleDeleteBlog(blogRow);
            }
        });
    });
}

// Handle Edit Blog
function handleEditBlog(row) {
    const blogTitle = row.querySelector('.blog-title-cell span').textContent;
    showNotification(`Editing: ${blogTitle}`, 'info');
    // Redirect to edit page or open modal
    // window.location.href = 'edit-blog.html?id=' + blogId;
}

// Handle View Blog
function handleViewBlog(row) {
    const blogTitle = row.querySelector('.blog-title-cell span').textContent;
    showNotification(`Viewing: ${blogTitle}`, 'info');
    // Open blog in new window
    // window.open('blog-detail.html?id=' + blogId, '_blank');
}

// Handle Duplicate Blog
function handleDuplicateBlog(row) {
    const blogTitle = row.querySelector('.blog-title-cell span').textContent;
    showNotification(`Blog "${blogTitle}" duplicated successfully`, 'success');
}

// Handle Delete Blog
function handleDeleteBlog(row) {
    const blogTitle = row.querySelector('.blog-title-cell span').textContent;
    
    if (confirm(`Are you sure you want to delete "${blogTitle}"?`)) {
        row.style.opacity = '0.5';
        
        setTimeout(() => {
            row.remove();
            showNotification(`Blog "${blogTitle}" deleted successfully`, 'success');
        }, 500);
    }
}

// Setup Pagination
function setupPagination() {
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    
    paginationBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.disabled) return;
            
            // Remove active class from all buttons
            paginationBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            if (this.textContent !== '<' && this.textContent !== '>') {
                this.classList.add('active');
            }
            
            showNotification(`Navigating to page`, 'info');
        });
    });
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
    
    // Remove existing menu if any
    const existingMenu = document.querySelector('[data-menu="user"]');
    if (existingMenu) existingMenu.remove();
    
    const menuDiv = document.createElement('div');
    menuDiv.setAttribute('data-menu', 'user');
    menuDiv.innerHTML = menuHTML;
    document.body.appendChild(menuDiv);
    
    // Close menu on click outside
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
        <div style="background: white; border-radius: 10px; padding: 30px; max-width: 500px; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
            <h2 style="margin-top: 0; margin-bottom: 20px; color: #2C3E50;">${title}</h2>
            <div>${content}</div>
            <div style="margin-top: 25px; text-align: right;">
                ${buttonsHTML}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Attach click handlers
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
