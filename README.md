# Abiy Getahun Aragaw - Portfolio

A modern, interactive portfolio website showcasing my journey as an Information Science student and Full Stack Developer. Built with cutting-edge technologies and featuring smooth animations, responsive design, and comprehensive project showcases.

## 👨‍💻 About Me

I'm Abiy Getahun Aragaw, a second-year Information Science student at Addis Ababa University with a passion for solving real-world problems using technology. My portfolio showcases my academic journey, technical skills, and innovative projects in system development and full-stack applications.

**Tagline:** Building practical and scalable digital solutions through curiosity, creativity, and a strong passion for solving real-world problems using technology.

## 🚀 Features

- **Interactive Hero Section** - Professional introduction with key statistics
- **Comprehensive About Section** - Detailed background and vision
- **Skills Showcase** - Technical skills across multiple programming languages and tools
- **Experience Timeline** - Academic and professional experience
- **Project Portfolio** - In-depth showcase of major projects including GovTech and AgriTech solutions
- **Contact Integration** - Functional contact form with email notifications
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **SEO Optimized** - Meta tags and semantic HTML
- **Dark Theme** - Modern dark theme design
- **Smooth Animations** - Framer Motion animations
- **TypeScript** - Type-safe development

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics
- **TSParticles** - Particle effects
- **shadcn/ui** - Modern UI components

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **CORS** - Cross-origin resource sharing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abiygetahun2005-ctrl/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```

   Configure your email settings in `.env`:
   ```env
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@domain.com
   SMTP_PASS=your-app-password
   CONTACT_TO_EMAIL=your-email@domain.com
   ```

4. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm run dev:fullstack

   # Or start separately:
   npm run dev          # Frontend (port 8080)
   npm run start:server # Backend (port 5000)
   ```

## 📜 Available Scripts

- `npm run dev` - Start frontend development server
- `npm run start:server` - Start backend server
- `npm run dev:fullstack` - Start both frontend and backend
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm test` - Run tests

## 🎨 Customization

### Adding Projects
Edit `src/components/ProjectsSection.tsx` to add your projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tags: ["Tech1", "Tech2", "Tech3"],
    image: "/path/to/image.jpg",
    github: "https://github.com/username/repo",
    live: "https://your-live-demo.com",
    color: "hsl(24 70% 50% / 0.1)",
  },
  // Add more projects...
];
```

### Personal Information
Update personal details in the respective components:
- `src/components/HeroSection.tsx` - Hero content
- `src/components/AboutSection.tsx` - About information
- `src/components/SkillsSection.tsx` - Skills and technologies
- `src/components/ContactSection.tsx` - Contact information

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the build settings
3. Add environment variables in Vercel dashboard

### Manual Deployment
1. Build the project: `npm run build`
2. Serve the `dist` folder with any static hosting service

## 📞 Contact

- **Email**: abiygetahun56@gmail.com
- **Phone**: +251 975 141 477
- **Location**: Addis Ababa, Ethiopia
- **LinkedIn**: https://www.linkedin.com/in/abiy-aragaw-246645335
- **GitHub**: https://github.com/abiygetahun2005-ctrl
- **Twitter**: https://x.com/abi57962

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Abiy Getahun Aragaw
