# 🌟 P2L RAN - Refuge Alumni Network

A comprehensive platform connecting refugee alumni to empower their continued growth and success. Built with React, this application provides a centralized hub for career development, learning, networking, and community support.

![P2L RAN Screenshot](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18+-blue) ![Vite](https://img.shields.io/badge/Vite-6+-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3+-teal)

## 🚀 Live Demo

**🔗 [View Live Application](https://kaleekuhn.github.io/P2L-RUN/)**

## ✨ Features

### 🏠 **Dashboard**
- Personalized welcome with user progress tracking
- Community impact metrics and statistics
- Latest opportunities and upcoming events
- Daily inspiration and motivational content

### 💼 **Job Board**
- Curated job listings for refugee alumni
- Advanced filtering by industry, location, and type
- Direct application links and company information
- Salary ranges and posting dates

### 📚 **Learning Hub**
- Course catalog with certifications
- Progress tracking and skill development
- Multiple learning paths (Technology, Business, Language)
- Weekly challenges and achievements

### 📅 **Events & Networking**
- Alumni networking events
- Professional workshops and bootcamps
- RSVP system with attendee tracking
- Virtual and in-person event support

### 👥 **Community Forum**
- Discussion boards and knowledge sharing
- Success story highlights
- Study groups and collaboration
- Peer support and mentorship connections

### 🤝 **Mentorship Matching**
- AI-powered mentor-mentee pairing
- Professional guidance from successful alumni
- Goal setting and progress tracking
- Flexible scheduling and communication

### 🤖 **AI Support**
- Intelligent career guidance chatbot
- Resume review and optimization
- Interview preparation assistance
- Personalized recommendations

## 🎨 Design Features

- **Dark Theme**: Modern, eye-friendly interface
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Framer Motion powered interactions
- **Gradient Accents**: Beautiful brand colors throughout
- **Accessibility**: Touch-friendly and keyboard navigable

## 🛠️ Tech Stack

- **Frontend Framework**: React 19+ with Hooks
- **Build Tool**: Vite 6+ for lightning-fast development
- **Styling**: TailwindCSS 3+ with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Routing**: React Router DOM with GitHub Pages support
- **Icons**: Lucide React for consistent iconography
- **Deployment**: GitHub Pages with Actions CI/CD

## 🏗️ Architecture

```
src/
├── components/
│   ├── layout/          # Header, Navigation components
│   └── ui/              # Reusable UI components (Button, Card)
├── pages/               # Main application pages
│   ├── Dashboard.jsx    # Main dashboard view
│   ├── JobBoard.jsx     # Job listings and search
│   ├── LearningHub.jsx  # Courses and education
│   ├── Events.jsx       # Events and networking
│   ├── Community.jsx    # Forum and discussions
│   ├── Mentorship.jsx   # Mentor matching
│   └── AISupport.jsx    # AI-powered assistance
├── data/
│   └── mockData.js      # Sample data for development
├── utils/
│   └── animations.js    # Reusable animation configurations
└── App.jsx              # Main application component
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ (required for React Router)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kaleekuhn/P2L-RUN.git
   cd P2L-RUN
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/P2L-RUN/`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Mobile Optimization

The application is fully responsive with:
- **Mobile-first design** approach
- **Hamburger navigation** for mobile devices
- **Touch-optimized** button sizes (44px minimum)
- **Responsive grids** that adapt to screen size
- **Optimized text sizing** across breakpoints

## 🎯 User Experience

### Progressive Enhancement
- **Fast loading** with Vite's optimized bundling
- **Smooth animations** that enhance usability
- **Intuitive navigation** with clear visual hierarchy
- **Consistent design** language throughout

### Accessibility Features
- **Keyboard navigation** support
- **Focus indicators** for interactive elements
- **Screen reader** friendly markup
- **Color contrast** meeting WCAG guidelines

## 🌐 Deployment

### GitHub Pages
The application is automatically deployed using GitHub Actions:

1. **Push to main branch** triggers deployment
2. **Build process** runs on Node.js 20
3. **Static files** deployed to GitHub Pages
4. **Live at**: https://kaleekuhn.github.io/P2L-RUN/

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Notes

### Custom Design System
- **Brand Colors**: Primary blue, secondary purple, accent cyan
- **Dark Theme**: Consistent color palette for dark mode
- **Typography**: Inter font with optimized rendering
- **Spacing**: Consistent spacing scale using Tailwind

### Performance Optimizations
- **Code splitting** by routes
- **Lazy loading** for non-critical components
- **Optimized images** and assets
- **Minimal bundle size** with tree shaking

## 🐛 Troubleshooting

### Common Issues

**Routing issues after deployment:**
- Ensure `basename="/P2L-RUN"` is set in React Router
- Check that GitHub Pages is configured for "GitHub Actions" deployment

**Build failures:**
- Verify Node.js version is 20+
- Clear `node_modules` and reinstall dependencies
- Check for ESLint errors

**Mobile layout issues:**
- Test across different viewport sizes
- Verify touch targets meet 44px minimum
- Check responsive breakpoints

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **P2L Organization** for the vision and mission
- **Refugee Alumni Community** for inspiration and feedback
- **Open Source Libraries** that power this application
- **Contributors** who helped make this project possible

## 📞 Support

For questions, feedback, or support:
- **Issues**: [GitHub Issues](https://github.com/kaleekuhn/P2L-RUN/issues)
- **Discussions**: [GitHub Discussions](https://github.com/kaleekuhn/P2L-RUN/discussions)

---

**Built with ❤️ for the refugee alumni community**

*Empowering journeys, connecting futures* 🌍✨