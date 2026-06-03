// Dashboard JavaScript

// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

// Close sidebar when clicking outside
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});

// Initialize Charts
document.addEventListener('DOMContentLoaded', function() {
    initializeBlogViewsChart();
    initializeCategoryChart();
    setupEventListeners();
});

// Blog Views Chart
function initializeBlogViewsChart() {
    const ctx = document.getElementById('viewsChart');
    if (!ctx) return;
    
    const chartData = {
        labels: ['May 15', 'May 20', 'May 25', 'May 30', 'Jun 4', 'Jun 9', 'Jun 15'],
        datasets: [{
            label: 'Blog Views',
            data: [1200, 1500, 1300, 1800, 2100, 2400, 2800],
            borderColor: '#FF6B35',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: '#FF6B35',
            pointBorderColor: 'white',
            pointBorderWidth: 2,
            pointHoverRadius: 8
        }];
    };
    
    new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return 'Views: ' + context.parsed.y + ' views';
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0,0,0,0.05)',
                        drawBorder: false
                    },
                    ticks: {
                        color: '#7F8C8D',
                        font: {
                            size: 12
                        }
                    }
                },
                x: {
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#7F8C8D',
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    });
}

// Category Distribution Chart
function initializeCategoryChart() {
    const ctx = document.getElementById('categoryChart');
    if (!ctx) return;
    
    const chartData = {
        labels: ['News & Sports', 'Health Tips', 'Treatments', 'Patient Care', 'General'],
        datasets: [{
            data: [45, 38, 32, 20, 16],
            backgroundColor: [
                '#FF6B6B',
                '#4ECDC4',
                '#95E1D3',
                '#F38181',
                '#AAF683'
            ],
            borderColor: 'white',
            borderWidth: 3
        }];
    };
    
    new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    padding: 12,
                    titleColor: 'white',
                    bodyColor: 'white',
                    borderColor: '#FF6B35',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + context.parsed + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Logout Function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.clear();
        window.location.href = 'index.html';
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Date Range Picker
    const datePickerBtn = document.querySelector('.date-picker');
    if (datePickerBtn) {
        datePickerBtn.addEventListener('click', function() {
            showDateRangePicker();
        });
    }
    
    // Navigation Links
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Don't prevent default for actual links
            if (this.href && this.href !== '#') {
                return;
            }
        });
    });
    
    // User Profile Dropdown
    document.querySelector('.user-profile').addEventListener('click', function() {
        showUserMenu();
    });
    
    // Notification Icon
    document.querySelector('.notification-icon').addEventListener('click', function() {
        showNotifications();
    });
}

// Show Date Range Picker
function showDateRangePicker() {
    const modal = createModal('Date Range', `
        <div style="display: flex; gap: 15px; margin: 20px 0;">
            <div>
                <label>From Date:</label>
                <input type="date" id="fromDate" value="2025-05-15" style="width: 100%; padding: 8px; margin-top: 5px;">
            </div>
            <div>
                <label>To Date:</label>
                <input type="date" id="toDate" value="2025-06-15" style="width: 100%; padding: 8px; margin-top: 5px;">
            </div>
        </div>
    `, [
        { text: 'Apply', onClick: function() { 
            const from = document.getElementById('fromDate').value;
            const to = document.getElementById('toDate').value;
            document.querySelector('.date-picker').textContent = '📅 ' + formatDate(from) + ' - ' + formatDate(to);
            modal.remove();
            showNotification('Date range updated', 'success');
        }},
        { text: 'Cancel', onClick: function() { modal.remove(); }}
    ]);
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
        { title: 'New Blog Comment', message: 'John commented on "Health Tips"', time: '5 mins ago' },
        { title: 'Blog Viewed', message: 'Your blog reached 1,000 views today', time: '1 hour ago' }
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

// Format Date Helper
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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

// Check if user is logged in
window.addEventListener('load', function() {
    const rememberMe = localStorage.getItem('rememberMe');
    if (!rememberMe) {
        // Optionally redirect to login if not logged in
        // window.location.href = 'index.html';
    }
});
