# Àgbàr Life Care — Web Ecosystem

## Tech Stack
| Layer | Technology | Cost |
|-------|-----------|------|
| Frontend | Next.js 14 (App Router) | Free |
| Styling | Tailwind CSS + custom CSS | Free |
| Database | Firebase Firestore | Free tier |
| Auth | Firebase Auth | Free tier |
| Email | Nodemailer (Gmail SMTP) | Free |
| Hosting | Vercel | Free tier |
| Payments | Flutterwave (test mode now) | Free |
| Version control | GitHub | Free |

---

## 1. Prerequisites
- Node.js 18+ installed
- A Google account (for Firebase)
- A GitHub account
- A Vercel account (sign up at vercel.com with GitHub)

---

## 2. Clone and install

```bash
# 1. Create a new GitHub repo called agbar-life-care (public or private)
# 2. Clone it locally
git clone https://github.com/YOUR_USERNAME/agbar-life-care.git
cd agbar-life-care

# 3. Copy all these project files into the folder
# 4. Install dependencies
npm install
```

---

## 3. Add your logo

Copy your logo file into `/public/logo.jpg`  
(This is what the navbar and hero use — must be exactly this name)

---

## 4. Set up Firebase

1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → name it `agbar-life-care`
3. Disable Google Analytics (not needed) → Create project

### Enable Firestore
- Left sidebar → **Firestore Database** → Create database
- Choose **Start in test mode** (we'll tighten rules before launch)
- Select a region (e.g. `europe-west1` for London proximity)

### Get client credentials
- Left sidebar → ⚙️ **Project settings** → **Your apps** tab
- Click **</>** (web) → Register app → name it `agbar-web`
- Copy the `firebaseConfig` values into your `.env.local`

### Get admin credentials (for API routes)
- Left sidebar → ⚙️ **Project settings** → **Service accounts**
- Click **Generate new private key** → download the JSON
- Copy `project_id`, `client_email`, and `private_key` into `.env.local`

---

## 5. Set up email (Gmail)

1. Go to your Gmail → Manage Google Account → Security
2. Enable **2-Step Verification** (required)
3. Search for **App passwords** → Create one for "Mail"
4. Copy the 16-character password into `EMAIL_PASS` in `.env.local`

---

## 6. Create `.env.local`

Copy `.env.example` to `.env.local` and fill in all values:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your actual keys.

**⚠️ NEVER commit `.env.local` to GitHub — it's in .gitignore**

---

## 7. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 8. Deploy to Vercel (free)

```bash
# Push to GitHub
git add .
git commit -m "Initial Àgbàr ecosystem"
git push origin main
```

Then:
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repo
3. Vercel auto-detects Next.js — click **Deploy**
4. After deploy, go to **Settings → Environment Variables**
5. Add every variable from your `.env.local` file
6. Redeploy

Your site is now live at `https://agbar-life-care.vercel.app` (or your custom domain)

---

## 9. Firestore security rules (before going live)

Replace the default test rules with these in Firebase Console → Firestore → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only server-side (Admin SDK) can write webinar signups
    match /webinar_registrants/{doc} {
      allow read, write: if false; // Only API routes via Admin SDK
    }
    // Future: portal access per authenticated user
    match /care_logs/{doc} {
      allow read: if request.auth != null;
      allow write: if false;
    }
  }
}
```

---

## Project file structure

```
agbar-life-care/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page — assembles all sections
│   ├── globals.css         # Brand tokens, animations, global styles
│   └── api/
│       └── webinar-signup/
│           └── route.ts    # POST handler: Firebase + email
├── components/
│   ├── Navbar.tsx          # Fixed nav with scroll effect
│   ├── HeroSection.tsx     # Hero with particles + animated headline
│   ├── TickerStrip.tsx     # Scrolling brand ticker
│   ├── ServicesSection.tsx # 6-service grid
│   ├── WebinarSection.tsx  # Signup form → Firebase → email
│   ├── PackagesSection.tsx # 3-tier pricing cards
│   ├── PortalSection.tsx   # Diaspora Bridge mockup
│   ├── TrustStrip.tsx      # Security/compliance badges
│   ├── PaymentModal.tsx    # Checkout modal (Flutterwave-ready)
│   └── Footer.tsx          # Footer with links
├── lib/
│   ├── firebase.ts         # Client Firebase init
│   ├── firebase-admin.ts   # Server Firebase Admin SDK
│   ├── email.ts            # Nodemailer email functions
│   └── useReveal.ts        # Scroll reveal hook
├── public/
│   └── logo.jpg            # ← PUT YOUR LOGO HERE
├── .env.example            # Template for environment variables
├── .env.local              # ← YOUR REAL KEYS (never commit this)
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── package.json
```

---

## Milestone progress

| # | Milestone | Status |
|---|-----------|--------|
| 1 | Landing page + webinar signup (15 days) | ✅ Built |
| 2 | Payment integration — Flutterwave (45 days) | 🔄 Modal ready, connect live keys |
| 3 | Diaspora Bridge portal MVP (90 days) | 🔄 UI ready, backend next |

---

## Next steps (Milestone 2)

To go live with real Flutterwave payments:

1. Create account at [flutterwave.com](https://flutterwave.com)
2. Get your public key from the dashboard
3. Add `NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY=your_key` to `.env.local`
4. Replace the mock payment in `PaymentModal.tsx` with:

```javascript
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'

const config = {
  public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
  tx_ref: Date.now().toString(),
  amount: 85000,
  currency: 'NGN',
  payment_options: 'card,ussd,banktransfer',
  customer: { email, name, phone_number },
  customizations: { title: 'Àgbàr Life Care', description: packageName, logo: '/logo.jpg' },
}
```
