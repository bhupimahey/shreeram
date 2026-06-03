````markdown
# Shree Ram Super Speciality Hospital - Admin Dashboard

A modern, responsive admin dashboard for managing blog content, media, and hospital information for Shree Ram Super Speciality Hospital.

![Hospital Logo](images/logo.png)

## 🏥 Features

- **Authentication System** - Secure login with email and password validation
- **Dashboard** - Overview of blog statistics, views, and recent activities
- **Blog Management** - Create, read, update, and delete blog posts
- **Category Management** - Organize blogs by categories
- **Tag Management** - Tag system for better content organization
- **Media Manager** - Upload and manage media assets
- **Analytics** - Visual charts and statistics
- **User Management** - Profile and settings management
- **Responsive Design** - Works on desktop, tablet, and mobile devices

## 📁 Project Structure

```
shreeram/
├── index.html                 # Login page
├── dashboard.html             # Main dashboard
├── all-blogs.html            # Blog management page
├── css/
│   ├── style.css             # Global styles
│   ├── login.css             # Login page styles
│   ├── dashboard.css         # Dashboard layout styles
│   └── blogs.css             # Blog management styles
├── js/
│   ├── login.js              # Login functionality
│   ├── dashboard.js          # Dashboard interactions
│   └── blogs.js              # Blog management functions
├── images/
│   ├── logo.png              # Main hospital logo
│   ├── logo-small.png        # Sidebar logo
│   ├── avatar.jpg            # User avatar
│   └── blog-*.jpg            # Blog thumbnail images
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required for basic functionality
- Chart.js library (included via CDN)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/bhupimahey/shreeram.git
cd shreeram
```

2. **Add Images**
   - Place your hospital logo as `images/logo.png`
   - Place your small logo as `images/logo-small.png`
   - Add user avatar as `images/avatar.jpg`
   - Add blog images as `images/blog-1.jpg`, `blog-2.jpg`, etc.
   - See `images/README.md` for placeholder options

3. **Open in Browser**
   - Open `index.html` in your web browser
   - Default login credentials (for testing):
     - Email: `admin@shreeram.com`
     - Password: `password` (minimum 6 characters)

## 🎨 Customization

### Color Scheme
Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #FF6B35;          /* Main orange */
    --primary-dark: #8B2E1F;           /* Dark red */
    --secondary-color: #4ECDC4;        /* Teal */
    --sidebar-bg: #8B1F1F;             /* Hospital red */
    /* ... other variables ... */
}
```

### Hospital Branding
1. Replace hospital logo in `images/` folder
2. Update hospital name in HTML files
3. Modify color scheme in CSS
4. Update contact information in footer sections

### Features to Add
- Backend API integration for real data
- User authentication with JWT tokens
- Database integration (MongoDB, MySQL, etc.)
- Email notifications
- Advanced analytics
- Export functionality (PDF, CSV)
- Multi-language support
- Two-factor authentication

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔐 Security Considerations

### Current Implementation (Development)
- Client-side validation only
- Password stored in localStorage (for demo)
- No SSL/HTTPS requirement

### Production Recommendations
1. **Backend Integration**
   - Implement secure authentication with tokens
   - Use HTTPS for all communications
   - Hash passwords on the server

2. **Data Protection**
   - Encrypt sensitive data
   - Implement CSRF protection
   - Use CORS appropriately

3. **Access Control**
   - Implement role-based access control (RBAC)
   - Add permission verification on backend
   - Session timeout functionality

4. **API Security**
   - Validate all inputs
   - Rate limiting
   - SQL injection prevention
   - XSS protection

## 📊 Dashboard Features

### Statistics Dashboard
- Total Blogs Count
- Published Blogs Count
- Draft Blogs Count
- Total Views

### Charts
- **Line Chart**: Blog views over time
- **Pie Chart**: Blog distribution by category

### Recent Activity
- Recent blog publications
- Blog updates
- Category additions
- User activities

## 📝 Blog Management

### Features
- Create new blogs with rich text editor
- Categorize blogs
- Add tags for better organization
- Set publishing status (Draft/Published)
- View blog statistics
- Duplicate existing blogs
- Delete blogs
- Search and filter functionality

### Filters
- Search by blog title
- Filter by category
- Filter by publication status

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Charts**: Chart.js
- **Icons**: Unicode/Emoji
- **Layout**: CSS Grid & Flexbox
- **Responsive**: Mobile-first approach

## 📦 Dependencies

- **Chart.js** (CDN): For chart visualization
- **No build tools required**: Static HTML/CSS/JS

To use Chart.js locally:
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

## 🐛 Troubleshooting

### Images Not Loading
- Check image file paths in HTML
- Ensure images are in the `images/` directory
- Verify file names match exactly (case-sensitive)

### Charts Not Displaying
- Ensure Chart.js CDN is accessible
- Check browser console for JavaScript errors
- Verify canvas elements exist in HTML

### Sidebar Not Responsive
- Check that menu-toggle button is visible on mobile
- Verify CSS media queries are loaded
- Clear browser cache

### Login Issues
- Check password length (minimum 6 characters)
- Verify email format is valid
- Check browser console for errors

## 📈 Future Enhancements

- [ ] Backend API integration
- [ ] Real-time notifications
- [ ] Advanced user management
- [ ] Content scheduling
- [ ] SEO optimization tools
- [ ] Analytics dashboard expansion
- [ ] Multi-hospital support
- [ ] Mobile app version
- [ ] Dark mode theme
- [ ] Internationalization (i18n)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email: support@shreeram.com or open an issue in the repository.

## 👥 Team

- **Developer**: Bhupinder (@bhupimahey)
- **Hospital**: Shree Ram Super Speciality Hospital

## 🙏 Acknowledgments

- Chart.js for excellent charting library
- Hospital administration for requirements
- All contributors and testers

---

**Last Updated**: June 3, 2026
**Version**: 1.0.0
````
