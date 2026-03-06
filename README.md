# Chris Holt's Portfolio

A modern, minimalist portfolio website built with Next.js 14, showcasing my work as a Frontend Software Engineer.

## 🚀 Built With

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## ✨ Features

- **Minimalist Design:** Clean, distraction-free interface inspired by modern portfolio aesthetics
- **Interactive Cursor Glow:** Smooth, GPU-accelerated cursor effect with violet accent
- **Responsive Layout:** Two-column desktop layout with sticky sidebar, mobile-optimized single column
- **Active Navigation:** Scroll-based navigation that highlights current section
- **Dark Mode:** Forced dark theme for consistent experience
- **Project Showcase:** Portfolio projects with images, tech stacks, and detailed case studies
- **Performance Optimized:** Next.js Image optimization, passive event listeners, and efficient rendering

## 🎨 Design Philosophy

This portfolio embraces minimalism with a focus on:
- Clean typography and generous whitespace
- Subtle animations and transitions
- Consistent violet/purple accent color (#8B5CF6)
- Accessibility-first approach
- Mobile-first responsive design

## 📁 Project Structure

```
my_site/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page with all sections
│   ├── layout.tsx         # Root layout with forced dark mode
│   ├── blog/[id]/         # Dynamic blog/project detail pages
│   └── providers.tsx      # Theme provider configuration
├── components/            # React components
│   ├── BlogClient.tsx     # Blog detail page component
│   ├── CursorGlow.tsx     # Interactive cursor effect
│   └── icons.tsx          # SVG icon components
├── lib/                   # Data and utilities
│   ├── blogs.ts          # Project/blog data
│   ├── experience.ts     # Work experience data
│   └── animations.ts     # Framer Motion variants
├── public/               # Static assets
│   └── images/           # Project thumbnails
└── styles/              # Global styles
    └── globals.css      # Tailwind config and custom styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chrisholtt/my_site.git
cd my_site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Adding Projects

Edit `lib/blogs.ts` to add or modify projects:

```typescript
{
  id: "project-slug",
  title: "Project Name",
  imageSrc: "/images/project.png",
  excerpt: "Brief description",
  date: "Month Day, Year",
  content: ["Paragraph 1", "Paragraph 2"],
  techStack: ["React", "TypeScript", "Next.js"],
  link: {
    href: "https://project-url.com",
    label: "project-url.com"
  }
}
```

### Adding Experience

Edit `lib/experience.ts` to update work history:

```typescript
{
  id: "job-slug",
  title: "Job Title · Company",
  period: "Year — Year",
  description: "What you did and achieved",
  techStack: ["Tech 1", "Tech 2"]
}
```

### Updating Personal Info

Edit `app/page.tsx` to change:
- Name and title in the sidebar
- About section content
- Social media links

## 🎨 Color Theme

The site uses a unified violet/purple color scheme:
- Primary accent: `violet-300` (#c4b5fd)
- Hover states: `violet-300`
- Background accents: `violet-400/10`
- Cursor glow: `rgba(139, 92, 246)`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **GitHub:** [@chrisholtt](https://github.com/chrisholtt)
- **LinkedIn:** [chris-holt](https://linkedin.com/in/chris-holt)
- **Email:** [Contact via portfolio](mailto:your-email@example.com)

---

Built with ❤️ using Next.js and Tailwind CSS