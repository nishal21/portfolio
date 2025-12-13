<div align="center">

# 🚀 Nishal's Portfolio

### A Modern, Interactive Portfolio Experience

[![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://nishalk.netlify.app) • [Report Bug](https://github.com/nishal21/Portfolio/issues) • [Request Feature](https://github.com/nishal21/Portfolio/issues)

</div>

---

## ✨ Overview

Welcome to my portfolio! This is a cutting-edge web application that showcases projects, skills, and experiences through stunning animations, 3D graphics, and seamless interactions. Built with modern web technologies, it delivers an immersive user experience across all devices.

## 🎯 Features

### Core Functionality
- ✅ **Modern Stack** - Built with Next.js 15, React 19, and TypeScript for type-safety and performance
- ✅ **Stunning Animations** - Smooth transitions using Framer Motion, Anime.js, and GSAP
- ✅ **3D Graphics** - Interactive 3D components powered by Three.js and React-Three-Fiber
- ✅ **Responsive Design** - Mobile-first approach ensuring perfect display on all devices
- ✅ **Contact Forms** - Integrated email functionality via EmailJS and Formspree
- ✅ **Fast Performance** - Optimized loading times and SEO-friendly
- ✅ **Dark/Light Themes** - Eye-friendly themes for different preferences
- ✅ **Accessibility** - WCAG compliant for inclusive user experience

## 🛠️ Tech Stack

<table>
  <tr>
    <td align="center"><strong>Category</strong></td>
    <td align="center"><strong>Technologies</strong></td>
  </tr>
  <tr>
    <td><strong>Framework</strong></td>
    <td><a href="https://nextjs.org/">Next.js 15.4.5</a></td>
  </tr>
  <tr>
    <td><strong>Language</strong></td>
    <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
  </tr>
  <tr>
    <td><strong>UI Library</strong></td>
    <td><a href="https://react.dev/">React 19.1.0</a></td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td><a href="https://tailwindcss.com/">TailwindCSS 4</a></td>
  </tr>
  <tr>
    <td><strong>Animations</strong></td>
    <td><a href="https://www.framer.com/motion/">Framer Motion</a>, <a href="https://animejs.com/">Anime.js</a>, <a href="https://greensock.com/gsap/">GSAP</a></td>
  </tr>
  <tr>
    <td><strong>3D Graphics</strong></td>
    <td><a href="https://threejs.org/">Three.js</a>, <a href="https://docs.pmnd.rs/react-three-fiber/">React-Three-Fiber</a></td>
  </tr>
  <tr>
    <td><strong>Icons</strong></td>
    <td><a href="https://lucide.dev/">Lucide React</a></td>
  </tr>
  <tr>
    <td><strong>Form Handling</strong></td>
    <td><a href="https://www.emailjs.com/">EmailJS</a>, <a href="https://formspree.io/">Formspree</a></td>
  </tr>
</table>

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** or **pnpm** - Comes with Node.js

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/nishal21/Portfolio.git
cd Portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables** (if needed)

Create a `.env.local` file in the root directory and add your API keys:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio in action! 🎉

## 📁 Project Structure

```
nishal21-portfolio/
├── public/                 # Static assets
│   ├── images/            # Image files
│   ├── icons/             # Icon files
│   └── ...
├── src/                   # Source code
│   ├── app/              # Next.js app directory
│   ├── components/       # Reusable React components
│   │   ├── ui/          # UI components
│   │   ├── sections/    # Page sections
│   │   └── ...
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles
│   ├── types/           # TypeScript type definitions
│   └── config/          # Configuration files
├── .env.local           # Environment variables (create this)
├── package.json         # Project dependencies
├── tsconfig.json        # TypeScript configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # TailwindCSS configuration
├── postcss.config.mjs   # PostCSS configuration
├── eslint.config.mjs    # ESLint configuration
└── README.md           # You are here!
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server at `localhost:3000` |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint to check for code quality issues |
| `npm run lint:fix` | Automatically fixes linting errors |

## 🎨 Customization Guide

### 1. **Personal Information**
- Update your details in `src/config/personal-info.ts`
- Modify social media links and contact information

### 2. **Projects**
- Add your projects in `src/data/projects.ts`
- Include project images in `public/images/projects/`

### 3. **Styling**
- Customize colors in `tailwind.config.ts`
- Modify global styles in `src/styles/globals.css`

### 4. **Components**
- Update page sections in `src/components/sections/`
- Customize UI components in `src/components/ui/`

### 5. **SEO & Metadata**
- Edit site metadata in `src/app/layout.tsx`
- Update OpenGraph images in `public/`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nishal21/Portfolio)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Add environment variables in Vercel dashboard
5. Deploy! 🚀

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nishal21/Portfolio)

### Deploy to GitHub Pages

```bash
npm run build
npm run export
# Follow GitHub Pages deployment guide
```

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports & Feature Requests

Found a bug or have a feature request? Please open an issue [here](https://github.com/nishal21/Portfolio/issues/new).

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Examples](https://docs.pmnd.rs/react-three-fiber/getting-started/examples)
- [Framer Motion Gallery](https://www.framer.com/motion/)
- [TailwindCSS Components](https://tailwindui.com/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Contact

**Nishal** - [@nishal21](https://github.com/nishal21)

Project Link: [https://github.com/nishal21/Portfolio](https://github.com/nishal21/Portfolio)

---

<div align="center">

### ⭐ If you like this project, please consider giving it a star!

Made with ❤️ by [Nishal](https://github.com/nishal21)

</div>
