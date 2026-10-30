# Herr — A Birthday Surprise for Neha ✨

A personalized romantic birthday surprise website crafted for **Neha** (Birthday: **November 6, 2026**).

---

## 🌹 Experience Structure & Sequence

The experience follows this exact chronological narrative:

1. **Vintage Sealed Envelope**
   - *"A little something for Neha."*
   - Interactive envelope opening experience.
2. **Welcome Screen + Birthday Countdown**
   - Counting down to **November 6, 2026**.
3. **A Little Collection of Memories**
   - Curated gallery of 5–10 personal photographs.
4. **The Photograph**
   - One separate featured beach photograph of us together.
   - Caption: *"The ocean was beautiful, but my favourite view was beside me."*
   - Attribution: *"— A little memory of us"*
5. **Open When You Feel...**
   - Interactive personal letters for different moods and moments.
6. **Our Song**
   - *"I Wanna Be Yours"* by Arctic Monkeys.
   - Smooth, persistent audio player configured for continuous playback across sections (strictly user-initiated, no forced autoplay).
7. **Final Sealed Envelope**
   - A heartfelt, handwritten-style birthday letter.

---

## 🛠️ Technology Stack

- **Frontend:** React 19, Vite, JavaScript (ES Modules), CSS3 (Mobile-First Vanilla CSS)
- **Backend:** Node.js, Express.js, CORS, Dotenv
- **Version Control:** Git & GitHub ([gv7-pixel/herr](https://github.com/gv7-pixel/herr.git))
- **Package Management:** npm

---

## 📁 Project Architecture

```
herr/
├── client/                      # Frontend application (React + Vite)
│   ├── public/
│   │   └── assets/
│   │       ├── audio/           # Our song: "I Wanna Be Yours"
│   │       ├── featured/        # Featured beach photograph
│   │       ├── photos/          # 5–10 personal photographs
│   │       ├── stamps/          # Vintage postage stamps & wax seals
│   │       └── textures/        # Vintage paper & envelope textures
│   ├── src/
│   │   ├── components/          # Reusable UI components (AudioBar, etc.)
│   │   ├── hooks/               # Custom React hooks (useAudioPlayer)
│   │   ├── sections/            # The 7 sequenced experience sections
│   │   ├── styles/              # Mobile-first CSS architecture
│   │   ├── utils/               # Constants, dates, metadata
│   │   ├── assets/              # Static source assets
│   │   ├── App.jsx              # Main application orchestrator
│   │   └── main.jsx             # React entry point
│   ├── index.html
│   ├── package.json
│   └── vite.config.js           # Vite dev server + API proxy configuration
├── server/                      # Backend API (Node.js + Express)
│   ├── src/
│   │   ├── config/              # Environment & configuration
│   │   ├── controllers/         # API business logic
│   │   ├── middleware/          # Global error handling & middleware
│   │   ├── routes/              # Express API endpoints (/api/health, /api/info)
│   │   └── server.js            # Express server initialization
│   ├── .env.example             # Server environment variables template
│   └── package.json
├── .gitignore                   # Ignores node_modules, builds, secrets, logs
├── package.json                 # Root script runner (concurrent client & server)
└── README.md                    # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18+ (tested on Node v24+)
- **npm**: v9+ (tested on npm v11+)

### Installation

Clone the repository and install all dependencies:

```bash
git clone https://github.com/gv7-pixel/herr.git
cd "herr b'day"

# Install root, client, and server dependencies in one command
npm run install:all
```

Or install separately:

```bash
# Client dependencies
cd client
npm install

# Server dependencies
cd ../server
npm install
```

---

## 💻 Running Locally

### Option 1: Run Both Concurrently (Recommended)

From the project root:

```bash
npm run dev
```

This launches:
- **Client (Vite):** [http://localhost:5173](http://localhost:5173)
- **Backend (Express):** [http://localhost:5000](http://localhost:5000)

### Option 2: Run Separately

**Frontend:**
```bash
npm run dev:client
# Or: cd client && npm run dev
# Available at http://localhost:5173
```

**Backend:**
```bash
npm run dev:server
# Or: cd server && npm run dev
# Available at http://localhost:5000
```

---

## 🧪 Health Check Endpoints

- Server Health: [http://localhost:5000/api/health](http://localhost:5000/api/health)
- Project Metadata: [http://localhost:5000/api/info](http://localhost:5000/api/info)

---

## 🎨 Asset Guidelines

To preserve visual authenticity, placeholder images are not used:
- Place 5–10 personal photographs in `client/public/assets/photos/`
- Place the beach photograph in `client/public/assets/featured/`
- Place the audio track (`i-wanna-be-yours.mp3`) in `client/public/assets/audio/`
- Place vintage textures and stamps in `client/public/assets/textures/` and `client/public/assets/stamps/`

The design system and vintage aesthetic styling will be implemented in **Phase 2**.
