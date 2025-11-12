# Suhas Kollur - Portfolio Website

A modern, production-grade personal portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. This portfolio showcases my experience, projects, skills, and publications as a Graduate Software Engineering student at Rutgers University.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 (App Router), React 19, TypeScript
- **Beautiful UI/UX**: Tailwind CSS with ShadCN UI components
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Meta tags, OpenGraph, sitemap, and robots.txt
- **Contact Form**: Integrated with Resend API for email functionality
- **Performance**: Optimized images, code splitting, and lazy loading

## 📋 Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- A Resend API key (for contact form functionality)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Then edit `.env.local` and add your configuration:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=your_email@example.com
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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-site/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── experience/        # Experience page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── publications/      # Publications page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── ui/                # ShadCN UI components
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer component
│   ├── theme-provider.tsx # Theme context
│   ├── theme-toggle.tsx   # Theme toggle button
│   ├── project-card.tsx   # Project card component
│   ├── experience-card.tsx # Experience card component
│   └── skills-grid.tsx    # Skills grid component
├── lib/                   # Utility functions
│   └── utils.ts           # Utility functions (cn, etc.)
├── public/                # Static assets
└── SuhasKollur_Resume.pdf # Resume PDF
```

## 🎨 Customization

### Updating Personal Information

1. **Home Page**: Edit `app/page.tsx` to update hero section content
2. **About Page**: Edit `app/about/page.tsx` to update your story
3. **Experience**: Edit `app/experience/page.tsx` to update work experience
4. **Projects**: Edit `app/projects/page.tsx` to update project details
5. **Skills**: Edit `app/skills/page.tsx` to update skill categories
6. **Publications**: Edit `app/publications/page.tsx` to update publications
7. **Contact**: Update email and social links in `app/contact/page.tsx` and `components/footer.tsx`

### Styling

- **Colors**: Edit `app/globals.css` to customize color scheme
- **Theme**: Modify `tailwind.config.ts` for theme customization
- **Components**: All UI components are in `components/ui/`

### Resume

Replace `SuhasKollur_Resume.pdf` in the root directory with your own resume PDF.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Add environment variables:
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL`
   - Click "Deploy"

3. **Update domain settings**
   - Update `app/sitemap.ts` and `app/robots.ts` with your domain
   - Update metadata in `app/layout.tsx` with your domain

### Deploy to Other Platforms

The site can be deployed to any platform that supports Next.js:
- **Netlify**: Use the Next.js build preset
- **AWS Amplify**: Connect your repository
- **Railway**: Deploy with one click
- **Docker**: Build and run in a container

## 🔧 Configuration

### Resend API Setup

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Verify your domain (optional, for production)
4. Add the API key to `.env.local`

### Environment Variables

- `RESEND_API_KEY`: Your Resend API key
- `CONTACT_EMAIL`: Email address to receive contact form submissions

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Future Enhancements

Here are some suggestions for future improvements:

### Blog Section
- Add a blog with MDX support
- Implement blog post routing and pagination
- Add categories and tags

### Analytics
- Integrate Google Analytics or Vercel Analytics
- Track page views and user interactions
- Add heatmaps and user behavior tracking

### Admin Dashboard
- Create an admin panel for content management
- Add authentication (NextAuth.js)
- Manage projects, blog posts, and contact submissions

### Auto-Import GitHub Repos
- Integrate GitHub API to automatically fetch repositories
- Display repository stats and languages
- Auto-generate project cards from GitHub repos

### Additional Features
- Add a testimonials/recommendations section
- Implement a newsletter subscription
- Add a download counter for resume
- Create a projects filter/search functionality
- Add internationalization (i18n) support

## 🐛 Troubleshooting

### Contact Form Not Working
- Verify `RESEND_API_KEY` is set in `.env.local`
- Check that `CONTACT_EMAIL` is configured
- Ensure Resend domain is verified (for production)

### Build Errors
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

### Theme Not Persisting
- Clear browser localStorage
- Check that `storageKey` in `ThemeProvider` matches

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Suhas Kollur**
- Graduate Software Engineering Student at Rutgers University
- Email: suhas.kollur@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com)
- GitHub: [Your GitHub](https://github.com)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [ShadCN UI](https://ui.shadcn.com/) - Beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide Icons](https://lucide.dev/) - Icon library
- [Resend](https://resend.com/) - Email API

---

Built with ❤️ using Next.js 15 and React 19

