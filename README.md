# Personal Portfolio Website

A modern, responsive, and animated personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Interactive Animations**: Powered by Framer Motion for engaging user experience
- **Multi-page Layout**: Home, About, Projects, and Contact pages with React Router
- **Contact Form**: Functional contact form using EmailJS
- **Project Showcase**: Dynamic project filtering and detailed project cards
- **Skills Section**: Interactive skills display with progress bars
- **Social Integration**: Links to GitHub, LinkedIn, and other social platforms

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Form Handling**: EmailJS
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## ⚙️ Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service and template
3. Update the EmailJS configuration in `src/pages/Contact.js`:

```javascript
const serviceId = 'your_service_id';
const templateId = 'your_template_id';
const publicKey = 'your_public_key';
```

### Personal Information

Update the following files with your personal information:

- `src/pages/Home.js` - Hero section content
- `src/pages/About.js` - About section, skills, and experience
- `src/pages/Projects.js` - Your projects data
- `src/pages/Contact.js` - Contact information and social links
- `src/components/Footer.js` - Footer links and information

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  // Add more custom colors
}
```

### Animations

Animations are handled by Framer Motion. You can customize them in individual components or add new ones.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `build` folder to your hosting provider

## 📄 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [EmailJS](https://www.emailjs.com/)
- [Unsplash](https://unsplash.com/) for placeholder images

## 📞 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio-website](https://github.com/yourusername/portfolio-website)

Live Demo: [https://your-portfolio.vercel.app](https://your-portfolio.vercel.app)