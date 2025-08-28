# SYNERGY MEDIA - Marketing Agency Portfolio

A professional, dark-themed marketing agency website built with Next.js, featuring a comprehensive CMS system, authentication, and stunning animations.

## 🚀 Features

- **Dark Cinematic Theme** with neon gradients and professional animations
- **Portfolio Showcase** with client work, case studies, and results
- **Admin Dashboard** for content management (CMS)
- **Authentication System** with NextAuth.js
- **Database Integration** with Prisma and SQLite/PostgreSQL
- **Responsive Design** optimized for all devices
- **Framer Motion Animations** for smooth, professional interactions
- **Contact Form** with email notifications

## 🎨 Design System

- **Primary Colors**: Electric purple/blue neon (#7c3aed)
- **Secondary Colors**: Neon pink (#e879f9) and cyan (#06b6d4)
- **Typography**: Playfair Display (headings) + Inter (body)
- **Theme**: Dark background with neon accents and glow effects

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with hero and portfolio showcase
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio showcase
│   ├── clients/           # Client testimonials and logos
│   ├── contact/           # Contact form
│   ├── dashboard/         # Admin CMS dashboard
│   └── auth/              # Authentication pages
├── components/            # Reusable components
│   ├── animations/        # Framer Motion animation components
│   ├── dashboard/         # Admin dashboard components
│   └── ui/               # shadcn/ui components
├── lib/                  # Utilities and configurations
├── prisma/               # Database schema and migrations
└── scripts/              # Database seeding scripts
\`\`\`

## 🛠️ Setup Instructions

### 1. Environment Variables

Create a `.env` file in the root directory:

\`\`\`env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Optional: For production
VERCEL_URL="your-vercel-url"
\`\`\`

### 2. Database Setup

\`\`\`bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma db push

# Seed the database with sample data
npm run seed
\`\`\`

### 3. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000` to see your website.

## 📝 Content Management

### Admin Access
- **URL**: `/dashboard`
- **Login**: `admin@synergymedia.com`
- **Password**: `admin123`

### Adding Your Content

#### 1. Client Logos
**Location**: Dashboard → Clients → Add/Edit Client
- Upload client logos and paste URLs in the "Logo URL" field
- **Database Field**: `Client.logo`

#### 2. Project Thumbnails
**Location**: Dashboard → Projects → Add/Edit Project
- Main showcase images for portfolio items
- **Database Field**: `Project.thumbnail`

#### 3. Instagram Reels & Videos
**Location**: Dashboard → Projects → Add/Edit Project
- **Instagram Reels**: Paste Instagram post/reel URLs
- **Project Videos**: YouTube/Vimeo links for demos
- **Database Fields**: `Project.instagramUrl`, `Project.videoUrl`

#### 4. Additional Project Images
**Location**: Dashboard → Projects → Add/Edit Project
- Multiple images stored as JSON array
- **Database Field**: `Project.images`

#### 5. Client Testimonials
**Location**: Dashboard → Clients → Add/Edit Client
- Client feedback and star ratings
- **Database Field**: `Client.testimonial`, `Client.rating`

#### 6. Project Results & Metrics
**Location**: Dashboard → Projects → Add/Edit Project
- ROI, traffic increases, conversion rates
- **Database Field**: `Project.results` (JSON format)

### Content Locations in Code

#### Homepage (`app/page.tsx`)
- **Lines 65-85**: Featured work section
- **Lines 90-95**: Project thumbnails
- **Lines 105-115**: Video/Instagram reel buttons
- **Lines 200-220**: Client logos grid

#### Portfolio Page (`app/portfolio/page.tsx`)
- **Lines 45-65**: Project grid with filters
- **Lines 70-90**: Project cards with hover effects
- **Lines 100-120**: Project details and results

#### Clients Page (`app/clients/page.tsx`)
- **Lines 35-55**: Client testimonials
- **Lines 75-95**: Client logos showcase

## 🎯 Key Features Explained

### 1. Portfolio Showcase
- Displays client work with thumbnails, videos, and Instagram reels
- Hover effects reveal project details and action buttons
- Results and metrics prominently displayed

### 2. Admin Dashboard
- Full CRUD operations for clients, projects, and services
- Real-time updates to the website
- Professional interface matching the brand aesthetic

### 3. Animation System
- Custom Framer Motion components for consistent animations
- Neon glow effects and smooth transitions
- Scroll-triggered animations and hover states

### 4. Database Schema
\`\`\`prisma
model Client {
  id          String    @id @default(cuid())
  name        String    @unique
  logo        String?   // EXACT LOCATION for client logos
  website     String?
  testimonial String?   // EXACT LOCATION for testimonials
  rating      Int?
  projects    Project[]
}

model Project {
  id           String  @id @default(cuid())
  title        String  @unique
  thumbnail    String? // EXACT LOCATION for project images
  videoUrl     String? // EXACT LOCATION for videos
  instagramUrl String? // EXACT LOCATION for Instagram reels
  images       String? // JSON array for additional images
  results      String? // JSON object for metrics/results
  client       Client  @relation(fields: [clientId], references: [id])
}
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Database for Production
- **Recommended**: Neon PostgreSQL or Supabase
- Update `DATABASE_URL` in environment variables
- Run `npx prisma db push` after deployment

## 📞 Support

For questions or support, contact the development team or refer to the documentation above.

---

**SYNERGY MEDIA** - Crafting digital experiences that captivate, convert, and create lasting impact.
\`\`\`

```env file="" isHidden
