AspiraSI - Pradita Academic Chatbot

   ╔════════════════════════════════════════════════════════════════╗
   ║                                                                ║
   ║               ASPIRASI - INTELLIGENT ACADEMIC ADVISOR          ║
   ║                                                                ║
   ║       Specialization Guide • Career Roadmap • Portfolio Ideas  ║
   ║                                                                ║
   ║    Powered by React • TypeScript • Vite • Tailwind • Framer    ║
   ║                                                                ║
   ╚════════════════════════════════════════════════════════════════╝

Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix%20UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)

Introduction

**AspiraSI** is a specialized web-based chatbot designed for Information Systems students at **Pradita University**. It addresses the common confusion students face regarding academic specializations and future career paths.

Unlike generic chatbots, AspiraSI is pre-trained with specific academic data, offering tailored guidance on three main majors: **IS Governance**, **Enterprise Systems**, and **Business Intelligence**. It acts as a virtual mentor that helps students visualize their future by providing concrete learning roadmaps and portfolio project ideas.

Overview

A modern, responsive Single Page Application (SPA) built with the React ecosystem. It features a "Glowing Tech" aesthetic using Glassmorphism design principles.

* **Interactive Roadmap:** A 3-step flow (Major → Career → Learning Path) to guide students.
* **Smart Suggestions:** Provides curated bootcamp recommendations (DQLab, Dicoding, Skilvul, etc.).
* **Portfolio Generator:** Offers specific project ideas and references based on user interest.
* **Responsive UX:** Optimized for both desktop and mobile (dynamic viewport handling).

Project Structure

AspiraSI/
├── src/
│   ├── components/
│   │   ├── chat/
│   │   │   ├── MessageBubble.tsx   # Chat bubble component
│   │   │   ├── ActionChips.tsx     # Interactive suggestion buttons
│   │   │   └── Card.tsx            # Recommendation cards (Bootcamps)
│   │   └── ui/                     # Reusable UI components (Shadcn/Radix)
│   ├── data/
│   │   └── knowledge.ts            # The "Brain" (Static Knowledge Base)
│   ├── hooks/
│   │   ├── useChat.ts              # Core Chat Logic & State Management
│   │   └── use-mobile.tsx          # Mobile responsiveness logic
│   ├── pages/
│   │   ├── Index.tsx               # Main entry (Intro -> Landing -> Chat)
│   │   ├── LandingView.tsx         # User onboarding & profiling
│   │   └── ChatView.tsx            # Main chat interface
│   └── App.tsx                     # Routing & Providers
├── public/                         # Static assets (Favicon, etc.)
├── index.html                      # Entry HTML & Meta Data
└── vite.config.ts                  # Bundler configuration

Quick Start (Local)

Ensure you have Node.js installed.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Greycia/AspiraSI-Chatbot-Akademik.git](https://github.com/Greycia/AspiraSI-Chatbot-Akademik.git)
    cd AspiraSI-Chatbot-Akademik
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Navigate to `http://localhost:8080` (or the port shown in terminal).

How It Works

1.  **User Onboarding:** Users input their name, semester, and initial interest (Major) in the `LandingView`.
2.  **Session Initialization:** `useChat.ts` initializes a session with a personalized greeting based on the user's profile.
3.  **Keyword Matching:** The bot listens for specific triggers (e.g., "Roadmap", "Portfolio", "Belajar").
4.  **Data Retrieval:**
    * If **Roadmap** is requested: It triggers a 3-step interactive flow using data from `CAREER_PATHS` in `knowledge.ts`.
    * If **Portfolio** is requested: It fetches specific project ideas from `PORTFOLIO_DATA`.
5.  **Rendering:** Responses are rendered as Text, Chips (options), or Cards (links) via `MessageBubble.tsx`.

Core Components

`src/data/knowledge.ts`

The static database containing all academic intelligence. It holds:
* `PRADITA_DATA`: General major descriptions.
* `CAREER_PATHS`: 10 specific careers per major with detailed learning steps.
* `PORTFOLIO_DATA`: GitHub portfolio references and project ideas.
* `BOOTCAMP_RECOMMENDATIONS`: Curated external learning resources.

`src/hooks/useChat.ts`

The engine of the application. It handles:
* Message history state (`messages`).
* Typing simulation (`isTyping`).
* Logic for parsing user input and selecting the correct response strategy.

`src/components/views/ChatView.tsx`

The visual interface. It handles:
* Auto-scrolling logic.
* Mobile keyboard layout adjustments (`dvh`).
* Session termination safety guards (`AlertDialog`).

Configuration

**Tailwind Config**

The visual theme is defined in `tailwind.config.ts`. You can adjust the "Pradita Orange" or "Glass Effect" opacity variables there.

**Meta Data**

To change the website title or SEO description shown in link previews, edit `index.html`.

Extending the Chatbot

**Add a New Major**
1.  Open `src/data/knowledge.ts`.
2.  Add a new key to `CAREER_PATHS` and `PORTFOLIO_DATA`.
3.  Update the `interestOptions` in `LandingView.tsx`.

**Add New Career Paths**
1.  Navigate to `CAREER_PATHS` in `knowledge.ts`.
2.  Append a new object to the `careers` array with `role` and `roadmap` fields.

**Deploying Updates**
Since this is a static site:
1.  Commit changes to GitHub.
2.  Vercel (if connected) will automatically redeploy the new version.

Troubleshooting

| Issue | Solution |
| :--- | :--- |
| **Blank Screen** | Check console for errors. Ensure `npm install` completed successfully. |
| **Keyboard Covers Input** | Ensure `ChatView.tsx` uses `dvh` units, not `vh`. |
| **Bot Not Replying** | Check `useChat.ts` keyword matching logic. Ensure text matches case-insensitive rules. |
| **Images/Icons Missing** | Verify `lucide-react` is installed and imported correctly. |

Deployment

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the repository in Vercel.
3.  Use default Vite settings (Build command: `npm run build`, Output: `dist`).
4.  Add your custom domain (optional).

Resources & Credits

* **Content Source:** Buku Panduan Akademik Sistem Informasi 2020 - Universitas Pradita.
* **Course References:** DQLab, Dicoding, Skilvul, BuildWithAngga.
* **Author:** Greycia.

License

Distributed under the MIT License. See `LICENSE` for more information.
