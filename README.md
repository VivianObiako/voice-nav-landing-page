# VoiceNav Landing Page

A modern, responsive landing page for VoiceNav - the voice-controlled browser automation system. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

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
4. **Technology Stack**: Technologies used in VoiceNav
5. **Footer**: Copyright and project information

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

- **Vercel** (recommended): `npx vercel`
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Follow AWS Amplify deployment guide

## 📄 License

Open source project for VoiceNav voice-controlled browser automation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please refer to the main VoiceNav repository.
