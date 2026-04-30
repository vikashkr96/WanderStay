<div align="center">

```
██╗    ██╗ █████╗ ███╗   ██╗██████╗ ███████╗██████╗ ███████╗████████╗ █████╗ ██╗   ██╗
██║    ██║██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝██╔══██╗╚██╗ ██╔╝
██║ █╗ ██║███████║██╔██╗ ██║██║  ██║█████╗  ██████╔╝███████╗   ██║   ███████║ ╚████╔╝ 
██║███╗██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗╚════██║   ██║   ██╔══██║  ╚██╔╝  
╚███╔███╔╝██║  ██║██║ ╚████║██████╔╝███████╗██║  ██║███████║   ██║   ██║  ██║   ██║   
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝  
```

### 🌍 *Your world. Your stays. Your adventure.* ✈️

<br/>

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)](https://ejs.co/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![Mapbox](https://img.shields.io/badge/Mapbox-000000?style=for-the-badge&logo=mapbox&logoColor=white)](https://mapbox.com/)
[![Passport](https://img.shields.io/badge/Passport-34E27A?style=for-the-badge&logo=passport&logoColor=white)](http://www.passportjs.org/)

<br/>

> **"Built different. Stays different."**

<br/>

---

## 🎬 SEE IT IN ACTION — DON'T JUST READ ABOUT IT

[![WanderStay Demo](https://img.shields.io/badge/▶%20WATCH%20FULL%20DEMO-FF0000?style=for-the-badge&logo=youtube&logoColor=white&labelColor=FF0000)](https://youtu.be/HTCLwz5mdZM?si=DcHb9bRD89kHDOug)

**👆 Click that. Watch it. Come back amazed. 👆**

---

</div>

<br/>

## 🚀 What is WanderStay?

WanderStay is a **full-stack Airbnb-inspired travel platform** where wanderers list their spaces and explorers find their next adventure — complete with authentication, real maps, cloud image uploads, reviews, and more. Built from scratch with **zero templates, zero shortcuts, 100% craft**.

This isn't a tutorial clone. This is the real thing.

<br/>

## ✨ Features That Slap

| Feature | Description |
|---|---|
| 🔐 **Auth System** | Full signup/login/logout with Passport.js — sessions, flash messages, the works |
| 🏠 **Listings CRUD** | Create, read, update, delete listings — complete with authorization |
| 🖼️ **Cloud Image Uploads** | Images stored on Cloudinary via Multer — no clunky local storage |
| 🗺️ **Interactive Maps** | Mapbox-powered maps for every listing location — explore visually |
| ⭐ **Review System** | Users can drop reviews & ratings — with ownership-based delete |
| 🛡️ **Route Protection** | Middleware guards ensure only owners can edit/delete their own content |
| 📋 **Server-side Validation** | Joi schema validation on all inputs — no garbage data, ever |
| 💥 **Error Handling** | Custom error classes + async wrappers = graceful failure, always |
| 🌐 **MVC Architecture** | Clean separation of Models, Views, Controllers — like a pro |
| 📱 **Responsive UI** | Bootstrap-powered layouts that work on everything from phone to ultrawide |

<br/>

## 🛠️ Tech Stack — The Weapons

```
┌─────────────────────────────────────────────────────────────────────┐
│                        WANDERSTAY STACK                             │
├──────────────────┬──────────────────────────────────────────────────┤
│  Runtime         │  Node.js                                         │
│  Framework       │  Express.js                                      │
│  Database        │  MongoDB + Mongoose                              │
│  Templating      │  EJS (Embedded JavaScript)                       │
│  Authentication  │  Passport.js + passport-local-mongoose           │
│  Image Storage   │  Cloudinary + multer-storage-cloudinary          │
│  Maps            │  Mapbox GL JS                                    │
│  Validation      │  Joi                                             │
│  Styling         │  Bootstrap 5 + Custom CSS                        │
│  Env Config      │  dotenv                                          │
│  Sessions        │  express-session + connect-mongo                 │
│  Flash Messages  │  connect-flash                                   │
└──────────────────┴──────────────────────────────────────────────────┘
```

<br/>

## 📁 Project Architecture

```
WanderStay/
│
├── 📂 controllers/          # Business logic lives here
│   ├── listings.js          #   CRUD ops for listings
│   ├── reviews.js           #   Review create/delete
│   └── users.js             #   Auth — signup, login, logout
│
├── 📂 models/               # Mongoose schemas
│   ├── listing.js           #   Listing model
│   ├── review.js            #   Review model
│   └── user.js              #   User model (with passport plugin)
│
├── 📂 routes/               # Express route definitions
│   ├── listing.js           #   /listings routes
│   ├── review.js            #   /listings/:id/reviews routes
│   └── user.js              #   /signup, /login, /logout
│
├── 📂 views/                # EJS templates
│   ├── layouts/             #   Base layout (boilerplate)
│   ├── listings/            #   Index, show, new, edit pages
│   ├── users/               #   Login & signup pages
│   └── partials/            #   Navbar, footer, flash messages
│
├── 📂 public/               # Static assets
│   ├── css/                 #   Custom stylesheets
│   └── js/                  #   Client-side JS (map init, etc.)
│
├── 📂 utils/                # Utility helpers
│   ├── ExpressError.js      #   Custom error class
│   └── wrapAsync.js         #   Async error wrapper
│
├── 📂 init/                 # Database seeding
│   └── index.js             #   Seed listings for dev/demo
│
├── app.js                   # 🚀 App entry point
├── middleware.js             # Auth & ownership checks
├── schema.js                # Joi validation schemas
├── cloudConfig.js           # Cloudinary configuration
└── .env                     # 🔒 Secrets (not committed)
```

<br/>

## ⚡ Getting Started — Run This Locally

### Prerequisites

Make sure you have these installed:

```bash
node --version    # v18+ recommended
npm --version     # comes with Node
mongod --version  # MongoDB running locally or use Atlas
```

### 1. Clone the repo

```bash
git clone https://github.com/vikashkr96/WanderStay.git
cd WanderStay
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up your environment variables

Create a `.env` file in the root:

```env
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_super_secret_session_key
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_public_token
```

### 4. Seed the database (optional but recommended)

```bash
node init/index.js
```

### 5. Fire it up 🔥

```bash
node app.js
```

Open your browser and hit → **`http://localhost:8080`**

<br/>

## 🔑 Key Implementation Highlights

### 🔒 Authentication Flow
Passport.js handles everything — sessions are stored in MongoDB via `connect-mongo` so they persist across server restarts. Flash messages give real-time feedback for login errors and success states.

### 🖼️ Image Upload Pipeline
Files go: `User Browser → Multer (memory) → multer-storage-cloudinary → Cloudinary CDN`. The returned URL + filename get stored in MongoDB alongside the listing.

### 🗺️ Mapbox Integration
On listing creation, the address is geocoded via Mapbox Geocoding API and the GeoJSON coordinates are stored in MongoDB. On the listing page, Mapbox GL JS renders an interactive map pinned to that exact location.

### 🛡️ Authorization Middleware
`middleware.js` exports `isLoggedIn`, `isOwner`, and `isReviewAuthor` — these are plugged directly into routes to block unauthorized actions before the controller even runs.

### 💥 Async Error Handling
Every async controller is wrapped in `wrapAsync()` which catches promise rejections and forwards them to Express's centralized error handler — no unhandled promise rejection warnings.

<br/>

## 🌐 Live Demo

[![Watch Demo](https://img.shields.io/badge/🎥%20Full%20Video%20Walkthrough-Watch%20Now-red?style=for-the-badge)](https://youtu.be/HTCLwz5mdZM?si=DcHb9bRD89kHDOug)

<br/>

## 🤝 Contributing

Got ideas? Found a bug? Want to make WanderStay even more insane?

```bash
# 1. Fork it
# 2. Create your feature branch
git checkout -b feature/something-wild

# 3. Commit your changes
git commit -m "Add something wild"

# 4. Push to the branch
git push origin feature/something-wild

# 5. Open a Pull Request
```

All contributions welcome — big or small. 🙌

<br/>

## 📬 Connect With The Builder

<div align="center">

Built with 🔥 by **Vikash Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-vikashkr96-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vikashkr96)

*If this project helped you or impressed you — drop a ⭐ on the repo. It means the world.*

</div>

<br/>

---

<div align="center">

```
  "Not all those who wander are lost —
   but all those who wander need a place to stay."
```

**WanderStay** — *Find your stay. Live your story.*

</div>
