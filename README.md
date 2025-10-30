# VoiceNav Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A modern, responsive landing page for VoiceNav - the voice-controlled browser automation system. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🌟 Live Demo

Visit the landing page: [VoiceNav Landing Page](#) (Add your deployed URL here)

Main VoiceNav Repository: [VoiceNav](https://github.com/VivianObiako/voicenav)

## 🚀 Features

- **Modern Design**: Clean, professional landing page design
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode**: Automatic dark/light mode support
- **TypeScript**: Full type safety with TypeScript
- **shadcn/ui**: Beautiful, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **SEO Optimized**: Proper meta tags and structure

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/VivianObiako/voicenav-landing-page.git
cd voicenav-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3001](http://localhost:3001) in your browser.

## 🏗️ Project Structure

```
voicenav-landing-page/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles with shadcn variables
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Homepage
│   ├── components/
│   │   └── ui/                  # shadcn/ui components
│   └── lib/
│       └── utils.ts             # Utility functions
├── components.json              # shadcn/ui configuration
├── tailwind.config.ts           # Tailwind configuration
└── tsconfig.json               # TypeScript configuration
```

## 🎨 Components Used

- **Button**: Primary and outline button variants
- **Card**: Feature cards and content sections
- **Typography**: Responsive headings and text

## 📱 Sections

1. **Hero Section**: Main title, description, and CTA buttons
2. **Features**: Three key features with icons and descriptions
3. **Voice Commands**: Examples of voice commands users can use
4. **Installation Guide**: Complete setup instructions with troubleshooting
5. **Technology Stack**: Technologies used in VoiceNav
6. **Footer**: Copyright and project information

## 🎯 Key Features of the Landing Page

- **Smart Navigation**: "View on GitHub" button links directly to the VoiceNav repository
- **Interactive Guide**: "Installation Guide" button smoothly scrolls to detailed setup instructions
- **Code Examples**: Copy-paste ready commands for easy setup
- **Visual Hierarchy**: Color-coded sections for different types of information
- **Accessibility**: Built with accessible components and proper semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

### Customization

1. **Colors**: Modify `src/app/globals.css` CSS variables
2. **Typography**: Update `tailwind.config.ts` theme configuration
3. **Components**: Edit components in `src/components/ui/`

## 🌐 Deployment

This project can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your Git repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`

### Manual Deployment
```bash
npm run build
npm run start
```

### Environment Variables
For production deployment, you may want to set:
- `NEXT_PUBLIC_SITE_URL` - Your deployed site URL
- `NEXT_PUBLIC_GITHUB_URL` - Link to the VoiceNav repository

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
- Ensure Node.js version 18+ is installed
- Clear node_modules and reinstall: `rm -rf node_modules package-lock.json && npm install`

**Development Server Issues:**
- Port 3001 already in use? Change port in `package.json` or run `npm run dev -- -p 3002`
- Hot reload not working? Try restarting the dev server

**Styling Issues:**
- Tailwind not working? Check `tailwind.config.ts` paths
- shadcn/ui components not styled? Verify `globals.css` imports

### Getting Help

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [shadcn/ui documentation](https://ui.shadcn.com/)
3. Open an issue in this repository

## 📄 License

Open source project for VoiceNav voice-controlled browser automation.

## 🤝 Contributing

We welcome contributions to improve the VoiceNav landing page! Here's how you can help:

### Development Workflow

1. **Fork the repository**
   ```bash
   git clone https://github.com/your-username/voicenav-landing-page.git
   cd voicenav-landing-page
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Install dependencies and start development**
   ```bash
   npm install
   npm run dev
   ```

4. **Make your changes**
   - Follow the existing code style
   - Test your changes thoroughly
   - Ensure the build passes: `npm run build`

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

6. **Push and create a pull request**
   ```bash
   git push origin feature/your-feature-name
   ```

### Contribution Guidelines

- **Code Style**: Follow existing TypeScript and React patterns
- **Components**: Use shadcn/ui components when possible
- **Styling**: Use Tailwind CSS classes, avoid custom CSS
- **Responsiveness**: Ensure changes work on mobile, tablet, and desktop
- **Accessibility**: Maintain accessibility standards
- **Performance**: Keep bundle size and loading times optimal

### Types of Contributions

- 🐛 **Bug fixes**: Fix styling issues, broken links, or functionality
- ✨ **New features**: Add new sections, animations, or interactions
- 📝 **Content updates**: Improve copy, add examples, or update links
- 🎨 **Design improvements**: Enhance visual design or user experience
- 📚 **Documentation**: Improve README, add comments, or create guides

## 📞 Support

For questions or support, please refer to the main VoiceNav repository.
