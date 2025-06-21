# 🚀 Alex Rivera Style Portfolio - Setup Guide

A stunning animated portfolio landing page built with React.js, TailwindCSS, Framer Motion, and EmailJS.

## ✨ Features

- **Dark Neon Theme**: Black background with vibrant neon green/cyan typography
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Typing Effect**: Dynamic typing animation for subtitle
- **Floating Particles**: Animated background particles
- **Glowing Effects**: Neon glow effects on text and buttons
- **Responsive Design**: Mobile-first responsive design
- **Contact Form**: EmailJS integration for contact functionality
- **Modern Navigation**: Transparent navbar with scroll effects

## 🛠 Tech Stack

- **React.js** - Frontend framework
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **EmailJS** - Email service integration
- **React Typed** - Typing animation effect
- **React Icons** - Icon library

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

## ⚙️ Configuration

### 1. Personal Information

Update the following files with your personal information:

**src/components/Hero.js**
- Line 67: Change "Alex Rivera" to your name
- Line 75-82: Update the typing animation strings
- Line 125-129: Update social media links

**src/components/Navbar.js**
- Line 49: Change "&lt;YourName/&gt;" to your preferred logo

### 2. EmailJS Setup

1. **Create EmailJS Account**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Create an account and verify your email

2. **Set up Email Service**
   - Create a new email service (Gmail, Outlook, etc.)
   - Note down your Service ID

3. **Create Email Template**
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Note down your Template ID

4. **Get Public Key**
   - Go to Integration tab
   - Copy your Public Key

5. **Update Configuration**
   - Open `src/config/emailjs.js`
   - Replace the placeholder values:
   ```javascript
   export const emailjsConfig = {
     serviceId: 'your_actual_service_id',
     templateId: 'your_actual_template_id',
     publicKey: 'your_actual_public_key',
   };
   ```

### 3. Customization

**Colors**: Update `tailwind.config.js` to change neon colors:
```javascript
neon: {
  green: '#00ff88',  // Change to your preferred green
  cyan: '#00ffff',   // Change to your preferred cyan
  purple: '#8b5cf6', // Change to your preferred purple
  pink: '#f472b6',   // Change to your preferred pink
}
```

**Animations**: Modify animation durations in `tailwind.config.js` keyframes section.

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `build`

### Alternative: GitHub + Vercel

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Deploy automatically on every push

## 📱 Mobile Optimization

The portfolio is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized animations for mobile devices
- Responsive typography scaling

## 🎨 Customization Guide

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/pages/Home.js`
3. Update navigation in `src/components/Navbar.js`

### Modifying Animations

All animations use Framer Motion. Key animation variants are defined in each component:
- `containerVariants` - Parent container animations
- `itemVariants` - Child element animations
- `buttonVariants` - Button-specific animations

### Changing Theme Colors

1. Update `tailwind.config.js` neon colors
2. Modify CSS custom properties in `src/index.css`
3. Update component-specific color classes

## 🔧 Troubleshooting

**Common Issues:**

1. **EmailJS not working**
   - Check your service ID, template ID, and public key
   - Verify your email service is properly configured
   - Check browser console for error messages

2. **Animations not smooth**
   - Ensure `framer-motion` is properly installed
   - Check for conflicting CSS animations
   - Reduce animation complexity on slower devices

3. **Build errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check for any missing imports
   - Verify all file paths are correct

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup, please open an issue in the repository.

---

**Happy coding! 🚀**