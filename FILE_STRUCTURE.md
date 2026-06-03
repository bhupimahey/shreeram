## File Structure Guide

This document provides a detailed overview of the repository structure and file organization.

```
shreeram/
│
├── 📄 index.html                    # Login page entry point
├── 📄 dashboard.html                # Main dashboard
├── 📄 all-blogs.html                # Blog management page
├── 📄 README.md                     # Main documentation
│
├── 📁 css/                          # Stylesheets directory
│   ├── style.css                    # Global styles & variables
│   ├── login.css                    # Login page specific styles
│   ├── dashboard.css                # Dashboard layout styles
│   └── blogs.css                    # Blog management styles
│
├── 📁 js/                           # JavaScript files directory
│   ├── login.js                     # Login functionality & validation
│   ├── dashboard.js                 # Dashboard interactions & charts
│   └── blogs.js                     # Blog management functions
│
├── 📁 images/                       # Images & assets directory
│   ├── logo.png                     # Hospital main logo (120x120)
│   ├── logo-small.png               # Sidebar logo (50x50)
│   ├── avatar.jpg                   # User profile picture (40x40)
│   ├── blog-1.jpg                   # Blog thumbnail (600x400)
│   ├── blog-2.jpg                   # Blog thumbnail (600x400)
│   ├── blog-3.jpg                   # Blog thumbnail (600x400)
│   ├── blog-4.jpg                   # Blog thumbnail (600x400)
│   ├── blog-5.jpg                   # Blog thumbnail (600x400)
│   └── README.md                    # Images documentation
│
└── 📁 docs/                         # Documentation (optional)
    ├── ARCHITECTURE.md              # System architecture
    ├── API-INTEGRATION.md           # Backend API integration guide
    ├── DEPLOYMENT.md                # Deployment instructions
    └── CONTRIBUTING.md              # Contribution guidelines
```

## File Descriptions

### HTML Files

#### `index.html`
- **Purpose**: Login/Authentication page
- **Key Features**:
  - Email and password input fields
  - Remember me functionality
  - Hospital branding section
  - Feature highlights display
  - Client-side form validation
- **Dependencies**: `css/login.css`, `js/login.js`
- **External CDN**: None

#### `dashboard.html`
- **Purpose**: Main admin dashboard
- **Key Features**:
  - Statistics cards (4 main metrics)
  - Blog views chart (line chart)
  - Category distribution (pie chart)
  - Recent blogs list
  - Recent activities timeline
  - Sidebar navigation
  - Top header with search and notifications
- **Dependencies**: `css/dashboard.css`, `js/dashboard.js`
- **External CDN**: Chart.js

#### `all-blogs.html`
- **Purpose**: Blog management interface
- **Key Features**:
  - Blogs table with sorting
  - Search and filter functionality
  - Category and status filters
  - Action buttons (Edit, View, Duplicate, Delete)
  - Pagination controls
  - Sidebar navigation
- **Dependencies**: `css/blogs.css`, `js/blogs.js`
- **External CDN**: None

### CSS Files

#### `css/style.css` (2,440 bytes)
- **Purpose**: Global styles and CSS variables
- **Contains**:
  - CSS custom properties (variables)
  - Typography styles
  - Button styles (.btn-primary, .btn-secondary, .btn-signin)
  - Form element styles
  - Badge and status indicator styles
  - Utility classes
  - Media queries for responsive design
- **Color Palette**:
  - Primary: #FF6B35 (Orange)
  - Primary Dark: #8B2E1F (Dark Red)
  - Secondary: #4ECDC4 (Teal)
  - Sidebar: #8B1F1F (Hospital Red)
  - Light BG: #F5F5F5
  - Text: #2C3E50 (Dark)

#### `css/login.css` (4,321 bytes)
- **Purpose**: Login page styling
- **Contains**:
  - Login container layout (flex 1:1 split)
  - Left side (hospital branding):
    - Background gradient
    - Logo styling
    - Feature items grid
    - Feature icons
  - Right side (login form):
    - Card styling
    - Form group styling
    - Input wrapper with icons
    - Password toggle styling
    - Checkbox styling
    - Forgot password link
  - Responsive breakpoints for tablets and mobile
- **Animations**: Background dot pattern

#### `css/dashboard.css` (9,908 bytes)
- **Purpose**: Dashboard layout and styling
- **Contains**:
  - Sidebar styling (fixed, 280px width)
  - Main content layout
  - Top header (sticky)
  - Navigation menu styling
  - Stats grid (4-column layout)
  - Chart containers
  - Recent blogs and activities sections
  - Scrollbar customization
  - Responsive grid layouts
  - Mobile sidebar toggle
- **Layout**: CSS Grid for responsive design
- **Breakpoints**: 1200px, 768px

#### `css/blogs.css` (4,119 bytes)
- **Purpose**: Blog management page styling
- **Contains**:
  - Filters section styling
  - Table container and styling
  - Blog table with hover effects
  - Pagination controls
  - Status badge styling
  - Category badge styling
  - Action button styling
  - Responsive table adjustments
- **Tables**: Full responsive table design

### JavaScript Files

#### `js/login.js` (3,856 bytes)
- **Purpose**: Login functionality
- **Key Functions**:
  - `togglePassword()`: Show/hide password
  - `showNotification()`: Toast notifications
  - Form submission handler
  - Email validation (regex)
  - Password validation (minimum 6 chars)
  - localStorage management (remember me)
  - Animations (slideIn, slideOut)
- **Events**: Form submit, password toggle, forgot password

#### `js/dashboard.js` (12,028 bytes)
- **Purpose**: Dashboard interactions and data visualization
- **Key Functions**:
  - `toggleSidebar()`: Mobile sidebar toggle
  - `initializeBlogViewsChart()`: Line chart initialization
  - `initializeCategoryChart()`: Pie chart initialization
  - `logout()`: User logout
  - `showUserMenu()`: User dropdown menu
  - `showNotifications()`: Notification modal
  - `createModal()`: Generic modal helper
  - `formatDate()`: Date formatting
  - `showNotification()`: Toast notifications
- **Charts**: Using Chart.js library
- **Data**: Hardcoded sample data for demo

#### `js/blogs.js` (12,047 bytes)
- **Purpose**: Blog management functionality
- **Key Functions**:
  - `toggleSidebar()`: Mobile sidebar toggle
  - `setupEventListeners()`: Event delegation setup
  - `loadBlogs()`: Load blog data
  - `filterBlogs()`: Search and filter blogs
  - `setupActionButtons()`: Edit, View, Duplicate, Delete handlers
  - `handleEditBlog()`: Edit blog functionality
  - `handleViewBlog()`: View blog functionality
  - `handleDuplicateBlog()`: Duplicate blog
  - `handleDeleteBlog()`: Delete with confirmation
  - `setupPagination()`: Pagination handler
  - `logout()`: User logout
  - `showUserMenu()`: User menu
  - `showNotifications()`: Notifications
  - `createModal()`: Modal helper
  - `showNotification()`: Toast notifications
- **Features**: Search, filter by category/status, CRUD operations

### Images Directory

#### `images/README.md`
- **Purpose**: Image asset documentation
- **Contains**:
  - Required image specifications
  - File size and format recommendations
  - Placeholder image service links
  - How to add images guide
  - Image specifications table

#### Required Image Files
- `logo.png`: 120x120px, PNG with transparency
- `logo-small.png`: 50x50px, PNG with transparency
- `avatar.jpg`: 40x40px, JPG
- `blog-1.jpg` through `blog-5.jpg`: 600x400px, JPG

### Configuration Files (Optional)

#### `.gitignore` (Optional)
```
# Dependencies
node_modules/
package-lock.json

# Environment
.env
.env.local

# IDE
.vscode/
.idea/
*.swp

# Build
dist/
build/

# Logs
*.log
```

#### `package.json` (Optional - for Node.js projects)
For future backend integration or build tools.

## How Files Work Together

### Login Flow
1. User opens `index.html`
2. Browser loads `css/login.css` and `js/login.js`
3. User enters credentials and submits form
4. JavaScript validates input and stores in localStorage
5. Redirects to `dashboard.html`

### Dashboard Flow
1. Browser loads `dashboard.html`
2. Loads `css/dashboard.css` and `js/dashboard.js`
3. Chart.js initializes for visualizations
4. Sample data displays in charts and tables
5. User can navigate to other pages via sidebar

### Blog Management Flow
1. User navigates to `all-blogs.html`
2. Browser loads `css/blogs.css` and `js/blogs.js`
3. Blog table displays with sample data
4. User can search, filter, and perform CRUD operations
5. Notifications provide feedback

## File Dependencies

```
index.html
├── css/style.css
├── css/login.css
└── js/login.js

dashboard.html
├── css/style.css
├── css/dashboard.css
├── js/dashboard.js
├── Chart.js (CDN)
└── images/

all-blogs.html
├── css/style.css
├── css/dashboard.css
├── css/blogs.css
├── js/blogs.js
└── images/
```

## Naming Conventions

- **HTML Files**: Kebab-case (e.g., `all-blogs.html`)
- **CSS Files**: Kebab-case (e.g., `dashboard.css`)
- **JavaScript Files**: Kebab-case (e.g., `login.js`)
- **Image Files**: Kebab-case with number suffix (e.g., `blog-1.jpg`)
- **CSS Classes**: BEM-like (e.g., `.dashboard-container`, `.stat-card`)
- **JavaScript Functions**: camelCase (e.g., `toggleSidebar()`)
- **CSS Variables**: Kebab-case (e.g., `--primary-color`)

## Total Project Size

- HTML Files: ~28 KB
- CSS Files: ~20 KB
- JavaScript Files: ~28 KB
- Images: Varies (depends on image size)
- **Total (without images)**: ~76 KB

## Performance Considerations

- All CSS files are loaded in parallel
- JavaScript files are loaded at end of body (async)
- Chart.js is loaded from CDN (faster, global cache)
- No build process needed (pure client-side)
- Minification recommended for production

## Next Steps for Development

1. Add backend API integration
2. Implement database connection
3. Add user authentication service
4. Create .gitignore and version control setup
5. Add build tools (Webpack, Gulp) if needed
6. Implement CI/CD pipeline
7. Add unit and integration tests
