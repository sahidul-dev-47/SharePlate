# SharePlate 🍽️

**SharePlate** is a full-stack surplus food-sharing platform built with Next.js and TypeScript. It connects people with extra food to share with neighbors nearby — reducing food waste while making meals more accessible and affordable.

**Live Demo:** [https://share-plate-psi.vercel.app](https://share-plate-psi.vercel.app)

---

## 🚀 Tech Stack

### Frontend
- **Next.js 14+** (App Router) with **React**
- **TypeScript** (strict mode)
- **Tailwind CSS** for styling
- **Recharts** for data visualization (stats/insights sections)
- **Lucide React** for icons

### Backend
- **Next.js API Routes** (serverless functions)
- **TypeScript** across the entire stack
- **MongoDB Atlas** for data persistence
- **Better Auth** for authentication (email/password + Google OAuth), backed by the MongoDB adapter

### Deployment
- **Vercel** (frontend + serverless backend)
- **MongoDB Atlas** (cloud database)

---

## ✨ Features

### 🏠 Landing Page
- Sticky, fully responsive navbar with role-aware navigation (3+ routes logged out, 5+ routes logged in)
- Hero section with clear call-to-action
- 7+ content sections: Features, How It Works, Categories, Impact Stats, Testimonials, FAQ, Newsletter/CTA
- Fully functional footer with contact info and social links

### 🔍 Explore / Listings Page
- Real-time search
- Multi-field filtering (category, price, location, etc.)
- Sorting options (price, date, rating)
- Pagination for browsing large result sets
- Skeleton loaders while data is fetching

### 📄 Listing Details Page
- Publicly accessible, no login required
- Multiple images/media support
- Structured sections: Overview, Specifications, Reviews & Ratings, Related Listings

### 🔐 Authentication
- Email/password registration and login with full client-side validation
- **Google OAuth** social login via Better Auth
- One-click **demo login** for quick evaluation
- Persistent sessions (30-day expiry, daily refresh)

### ➕ Add Item (Protected)
- Route: `/items/add`
- Redirects unauthenticated users to `/login`
- Fields: title, short description, full description, category, price, servings, area/city, pickup window, optional image URL

### 🗂️ Manage Items (Protected)
- Route: `/items/manage`
- Table/grid view of the user's own listings
- View and Delete actions per listing
- Responsive layout across all breakpoints

### 📃 Additional Pages
- About
- Contact
- (Extendable to Blog, Help/Support, Privacy & Terms)

---

## 🎨 Design Principles
- Maximum of 3 primary colors + a neutral palette
- Consistent card sizing, border radius, and spacing sitewide
- 4-column card grid on desktop, responsive down to mobile
- No placeholder or lorem ipsum content — all copy is real and contextual

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root:

```bash
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_random_secret_key
BETTER_AUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
```

> Generate a secure secret with: `openssl rand -base64 32`

---

## 🛠️ Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/shareplate.git
cd shareplate

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# then fill in the actual values

# 4. Run the development server
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## ☁️ Deployment (Vercel)

1. Push the repository to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add all environment variables from `.env.local` in **Project Settings → Environment Variables**, using your production URL for `BETTER_AUTH_URL`
4. Add the production callback URL to your Google OAuth client:
   ```
   https://your-domain.vercel.app/api/auth/callback/google
   ```
5. Whitelist Vercel's outbound IPs (or `0.0.0.0/0` for simplicity) in **MongoDB Atlas → Network Access**
6. Deploy 🚀

---

## 📂 Project Structure

```
shareplate/
├── app/
│   ├── (auth)/login/
│   ├── (auth)/register/
│   ├── items/add/
│   ├── items/manage/
│   ├── listings/[id]/
│   ├── explore/
│   └── api/auth/[...all]/
├── lib/
│   ├── auth.ts              # Better Auth server config
│   ├── auth-client.ts       # Better Auth client hooks
│   ├── mongodb.ts           # MongoDB client singleton
│   └── user-listings.ts     # Listing data helpers
├── components/
└── public/
```

---

## 📌 Roadmap
- [ ] Migrate listings from local storage to MongoDB collections
- [ ] Add Facebook OAuth
- [ ] Add review/rating submission flow
- [ ] Add infinite scroll as an alternative to pagination

---

## 📄 License

This project was built as a full-stack TypeScript learning/portfolio project.

---

## 🙌 Acknowledgements

Built with [Next.js](https://nextjs.org), [Better Auth](https://better-auth.com), [MongoDB Atlas](https://mongodb.com/atlas), and [Tailwind CSS](https://tailwindcss.com).
