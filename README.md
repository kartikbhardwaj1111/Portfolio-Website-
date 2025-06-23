# 🚀 Kartik Bhardwaj - Portfolio Website

A modern, interactive portfolio website built with React.js featuring stunning neon-themed animations, responsive design, and seamless user experience.

## 🌟 Live Demo

**🔗 [View Live Portfolio](https://bit.ly/kartik-bio)**

## ✨ Features

### 🎨 Design & UI
- **Neon-themed Interface** with custom color palette
- **Smooth Animations** powered by Framer Motion
- **Responsive Design** optimized for all devices
- **Interactive Elements** with hover effects and transitions
- **Modern Typography** with custom font configurations

### 🔧 Technical Features
- **Single Page Application** with React Router
- **Component-based Architecture** for maintainability
- **Custom Tailwind CSS** configuration with neon colors
- **EmailJS Integration** for contact form functionality
- **Interactive Certificate Viewer** with book-like interface
- **Result Modal System** for academic achievements
- **Mouse Follower Effect** for enhanced interactivity
- **Scroll-to-Top** functionality

### 📱 Pages & Sections
- **Home** - Hero section with animated typing effect
- **About** - Personal introduction and background
- **Skills** - Technical and design skills with progress bars
- **Resume** - Complete professional resume with download option
- **Projects** - Showcase of development projects
- **Contact** - Interactive contact form with social links

### 🎓 Special Components
- **Education Section** with academic timeline
- **Certificate Book** - Interactive 3D book interface
- **Result Modal** - Academic results viewer
- **Skills Progress Bars** with animated percentages
- **Social Media Integration**

## 🛠️ Tech Stack

### Frontend
- **React.js** (v18.2.0) - Core framework
- **React Router DOM** (v6.15.0) - Navigation
- **Framer Motion** (v10.16.4) - Animations
- **React Icons** (v4.11.0) - Icon library
- **React Typed** (v2.0.12) - Typing animations

### Styling
- **Tailwind CSS** (v3.3.3) - Utility-first CSS framework
- **PostCSS** (v8.4.29) - CSS processing
- **Autoprefixer** (v10.4.15) - CSS vendor prefixes

### Communication
- **EmailJS** (v3.11.0) - Contact form backend

### Development Tools
- **React Scripts** (v5.0.1) - Build tools
- **Web Vitals** (v2.1.4) - Performance monitoring

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Add your EmailJS configuration:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── photos/
│   │   ├── certificates/     # Certificate images
│   │   ├── profile/         # Profile photos
│   │   └── result/          # Academic result documents
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── CertificateBook/ # Interactive certificate viewer
│   │   ├── AboutMe.js       # About section component
│   │   ├── ContactSection.js # Contact form
│   │   ├── EducationSection.js # Education timeline
│   │   ├── Footer.js        # Footer component
│   │   ├── Hero.js          # Landing hero section
│   │   ├── MouseFollower.js # Mouse tracking effect
│   │   ├── Navbar.js        # Navigation bar
│   │   ├── ResultModal.js   # Academic results modal
│   │   ├── ScrollToTop.js   # Scroll to top button
│   │   └── Skills.js        # Skills showcase
│   ├── config/
│   │   └── emailjs.js       # EmailJS configuration
│   ├── pages/
│   │   ├── About.js         # About page
│   │   ├── Contact.js       # Contact page
│   │   ├── Home.js          # Home page
│   │   ├── Projects.js      # Projects page
│   │   ├── Resume.js        # Resume page
│   │   └── Skills.js        # Skills page
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies and scripts
└── vercel.json              # Vercel deployment config
```

## 🎨 Customization

### Colors
The neon color palette is defined in `tailwind.config.js`:
```javascript
colors: {
  'neon-green': '#00ff88',
  'neon-cyan': '#00ffff',
  'neon-purple': '#8b5cf6',
  'neon-pink': '#f472b6',
}
```

### Animations
Custom animations are configured in Tailwind:
- `glow` - Text glow effect
- `float` - Floating elements
- `pulse-glow` - Pulsing glow effect
- `book-open` - Certificate book opening
- `page-flip` - Page turning animation

### Content
Update personal information in respective component files:
- `src/components/Hero.js` - Name and titles
- `src/components/AboutMe.js` - Personal description
- `src/components/EducationSection.js` - Academic information
- `src/pages/Resume.js` - Professional experience

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push to main branch

### Manual Build
```bash
npm run build
```
This creates a `build` folder with optimized production files.

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed and user experience
- **Bundle Size**: Optimized with code splitting
- **SEO**: Meta tags and semantic HTML structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kartik Bhardwaj**
- Portfolio: [https://bit.ly/kartik-bio](https://bit.ly/kartik-bio)
- GitHub: [@kartikbhardwaj](https://github.com/kartikbhardwaj)
- LinkedIn: [Kartik Bhardwaj](https://linkedin.com/in/kartikbhardwaj)

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **React Icons** for beautiful icons
- **EmailJS** for contact form functionality
- **Vercel** for seamless deployment

---

⭐ **Star this repository if you found it helpful!**

Built with ❤️ by Kartik Bhardwaj