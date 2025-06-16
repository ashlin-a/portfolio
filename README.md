# 🚀 My Portfolio Website

> A modern, responsive portfolio website built with Next.js 14 to showcase my development skills and projects.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=cloudflare)](https://ashlin.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/ashlin-a/portfolio)

<div align="center">
  <img src="./public/portfolio-preview.png" alt="Portfolio Preview" width="800"/>
</div>

## ✨ Features

- **🎨 Modern Design** - Clean, responsive UI with smooth animations and transitions
- **📱 Mobile-First** - Fully responsive design that works on all devices
- **⚡ Performance Optimized** - Built with Next.js 14 for lightning-fast loading
- **📧 Contact Form** - Integrated contact form with email validation and delivery

## 🛠️ Tech Stack

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

</div>

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tailwind Motion](https://github.com/romboHQ/tailwindcss-motion)** - Smooth animations
- **[React Icons](https://react-icons.github.io/react-icons/)** - Beautiful icon library

### Backend & Validation
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Resend](https://resend.com/)** - Modern email API

### Deployment & Tools
- **[Cloudflare Workers](https://workers.cloudflare.com/)** - Deployment and hosting
- **[Prettier](https://prettier.io/)** - Code formatting

## Run locally

Here's how to run it locally:

### Prerequisites

- Node.js 18+ 
- npm or pnpm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashlin-a/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
    The contact form uses Resend for email delivery:

    - Sign up for a [Resend account](https://resend.com/)
    - Get your API key from the dashboard
    - Add the API key to your `.env` file
   
   ```env
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 🎨 Key Technical Implementations

### Form Validation & Email Integration
- Built custom contact form with Zod schema validation
- Integrated Resend API for reliable email delivery
- Implemented client-side and server-side validation

### Responsive Design & Animations
- Mobile-first approach with Tailwind CSS
- Smooth transitions using Tailwind Motion
- Interactive navigation with scroll detection

## 🌐 Deployment

This portfolio is deployed on **Cloudflare Workers**, chosen for its excellent performance, generous free tier and global CDN.

### Build Command
```bash
pnpm run build
```

### Deploy Command for Cloudflare Workers
```bash
pnpm run deploy
```

### Deployment Process
1. Connected GitHub repository to Cloudflare Workers
2. Configured build settings (Next.js framework preset)
3. Added environment variables in Cloudflare dashboard
4. Automatic deployments on every push to main branch

### Why Cloudflare Workers?
- Lightning-fast global CDN
- Excellent performance metrics
- Seamless integration with Cloudflare ecosystem

### Asset Management
Project screenshots and images are stored in Cloudflare R2 for:
- Cost-effective object storage
- Global distribution via CDN
- Seamless integration with Cloudflare Pages
- Optimized image delivery

## 🛠️ Development Learnings

This project helped me master:
- **Next.js 14 App Router** - Modern React framework patterns
- **TypeScript Integration** - Type-safe development workflow  
- **Form Handling** - Custom validation without external form libraries
- **Email Integration** - Server-side API routes with Resend
- **Responsive Design** - Mobile-first CSS architecture

## 📄 License

This project is licensed under the GNU GPL License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Tailwind Motion](https://github.com/romboHQ/tailwindcss-motion)
- People illustrations by [Storyset](https://storyset.com/people)

## Contact
**Ashlin Asokan**
- Website: [ashlin.dev](https://ashlin.dev)
- LinkedIn: [@simpleashlin](https://linkedin.com/in/simpleashlin)
- Email: mail@ashlin.dev

---

<div align="center">
  <p>⭐ Feel free to explore the code and see how it's built!</p>
</div>