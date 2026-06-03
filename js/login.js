// Login Page JavaScript

// Toggle Password Visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleBtn.textContent = '🙈';
    } else {
        passwordField.type = 'password';
        toggleBtn.textContent = '👁️';
    }
}

// Handle Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;
    
    // Validation
    if (!email || !password) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('.btn-signin');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Signing in...';
    submitBtn.disabled = true;
    
    // Simulate login request
    setTimeout(() => {
        // Store credentials if remember me is checked
        if (remember) {
            localStorage.setItem('email', email);
            localStorage.setItem('rememberMe', 'true');
        }
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    }, 1500);
});

// Load saved email if remember me was checked
window.addEventListener('DOMContentLoaded', function() {
    const savedEmail = localStorage.getItem('email');
    const rememberMe = localStorage.getItem('rememberMe');
    
    if (savedEmail && rememberMe === 'true') {
        document.getElementById('email').value = savedEmail;
        document.getElementById('remember').checked = true;
    }
});

// Show Notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background-color: ${type === 'error' ? '#E74C3C' : '#2ECC71'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
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

// Forgot Password Handler
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    showNotification('Password reset link sent to your email', 'success');
});
