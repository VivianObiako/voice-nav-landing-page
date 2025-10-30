# Contributing to VoiceNav Landing Page

Thank you for your interest in contributing to the VoiceNav landing page! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- A code editor (VS Code recommended)

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/voicenav-landing-page.git
   cd voicenav-landing-page
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎯 Types of Contributions

### 🐛 Bug Reports

When filing bug reports, please include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Browser and device information

### ✨ Feature Requests

For feature requests, please include:
- Clear description of the feature
- Use case and benefits
- Mockups or examples if applicable

### 💻 Code Contributions

#### Before You Start

- Check existing issues and PRs to avoid duplicates
- For major changes, open an issue first to discuss
- Make sure you understand the project structure

#### Code Style Guidelines

**TypeScript & React:**
- Use TypeScript for all new code
- Follow existing naming conventions
- Use functional components with hooks
- Keep components small and focused

**Styling:**
- Use Tailwind CSS classes
- Follow existing design patterns
- Ensure responsive design (mobile-first)
- Use shadcn/ui components when possible

**File Organization:**
- Components in `src/components/`
- Utilities in `src/lib/`
- Styles in `src/app/globals.css`

#### Testing Your Changes

Before submitting:
1. Run the development server: `npm run dev`
2. Test on different screen sizes
3. Check for TypeScript errors: `npm run build`
4. Run the linter: `npm run lint`

## 📝 Pull Request Process

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the guidelines above

3. Commit your changes with a clear message:
   ```bash
   git commit -m "feat: add hero section animation"
   ```

4. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request with:
   - Clear title and description
   - Reference any related issues
   - Screenshots of visual changes
   - Notes about testing performed

## 🔧 Development Tips

### Useful Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Add shadcn/ui component
npx shadcn@latest add [component-name]
```

### Project Structure

```
src/
├── app/
│   ├── globals.css     # Global styles with shadcn variables
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main landing page
├── components/
│   └── ui/             # shadcn/ui components
└── lib/
    └── utils.ts        # Utility functions
```

### Key Technologies

- **Next.js 15**: App Router, Server Components
- **TypeScript**: Type safety and better DX
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: Accessible component library
- **Lucide React**: Icon library

## 🤔 Questions?

If you have questions:
1. Check the README.md for basic information
2. Look through existing issues and discussions
3. Open a new issue with the "question" label
4. Refer to the main VoiceNav repository for broader questions

## 📜 Code of Conduct

Please be respectful and professional in all interactions. We want to maintain a welcoming environment for all contributors.

Thank you for contributing to VoiceNav! 🎉
