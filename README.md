# Housecalls Pro - React Application

A modern React application built with TypeScript, Ant Design v4, Formik, and SCSS following component-based architecture.

## 🚀 Features

- **React v18** with TypeScript for type safety
- **Ant Design v4.x.x** for UI components
- **Formik + Yup** for form handling and validation
- **Lucide Icons** for modern iconography
- **React Router** for navigation
- **SCSS** for styling with design system variables
- **Component-based architecture** for scalability
- **Mock authentication** with localStorage persistence
- **Responsive design** following mobile-first approach
- **Figma design implementation** for pixel-perfect UI

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ui/             # UI components (Button, etc.)
│   ├── forms/          # Form components (FormField, etc.)
│   └── layout/         # Layout components (ProtectedRoute, etc.)
├── pages/              # Page components
│   ├── LoginPage.tsx   # Login page (Figma design implemented)
│   └── DashboardPage.tsx # Dashboard page
├── services/           # API services and business logic
│   └── authService.ts  # Authentication service with mock data
├── types/              # TypeScript type definitions
│   └── auth.ts         # Authentication types
├── styles/             # Global styles and SCSS variables
│   └── globals.scss    # Design system variables and global styles
└── assets/             # Static assets
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🔐 Authentication

The application includes mock authentication with the following credentials:

### Test Users:
- **Username:** `admin` | **Password:** `password123`
- **Username:** `demo` | **Password:** `password123`

### Microsoft Login:
- Click "Login with Microsoft" for mock Microsoft OAuth flow

## 📱 Features Implemented

### Login Page
- ✅ Pixel-perfect implementation of Figma design
- ✅ Responsive layout with left panel (brand) and right panel (form)
- ✅ Form validation using Formik + Yup
- ✅ Remember me functionality
- ✅ Forgot password link (placeholder)
- ✅ Microsoft login integration (mock)
- ✅ Professional error handling and loading states

### Dashboard Page
- ✅ Protected route with authentication check
- ✅ Sidebar navigation with menu items
- ✅ Header with user profile and notifications
- ✅ Responsive layout
- ✅ Logout functionality
- ✅ Placeholder content (awaiting Figma design)

## 🎨 Design System

The application follows a comprehensive design system with:

- **Color Palette:** Primary (#00b4e5), neutral grays, white
- **Typography:** Roboto font family with consistent sizing
- **Spacing:** 4px grid system for consistent spacing
- **Border Radius:** Consistent corner radius values
- **Responsive Breakpoints:** Mobile-first approach

## 🧩 Component Architecture

### Reusable Components
- **Button:** Multiple variants (primary, secondary, microsoft)
- **FormField:** Input fields with validation and error states
- **ProtectedRoute:** Authentication wrapper for protected pages

### Best Practices
- TypeScript for type safety
- Component composition over inheritance
- Proper prop typing and validation
- SCSS modules for scoped styling
- Consistent naming conventions

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📋 Next Steps

1. **Dashboard Design:** Awaiting Figma design for dashboard layout
2. **Real Authentication:** Replace mock auth with actual API integration
3. **Additional Features:** Based on requirements

## 🌟 Technologies Used

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **UI Library:** Ant Design v4.24.16
- **Form Management:** Formik + Yup
- **Routing:** React Router DOM
- **Styling:** SCSS with CSS variables
- **Icons:** Lucide React
- **State Management:** Built-in React state (expandable)

## 📞 Support

For questions or issues, please refer to the documentation or contact the development team.

---

Built with ❤️ following React and TypeScript best practices.# demo-001
