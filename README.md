# Lost & Found Web Application

A lightweight, responsive web application for reporting lost and found items. Users can submit details about an item (whether lost or found), including an optional image (.jpg or .png), and the item will be instantly displayed on the community board UI.

## Features
- **Report Form**: Simple interface to mark items as "Lost" or "Found".
- **Image Upload**: Users can attach images of the item which are previewed inline.
- **Dynamic Board**: Items are populated instantly on the main grid upon submission.
- **Responsive Design**: Clean interface built natively for desktop, tablet, and mobile viewing.

## Tech Stack
- **HTML5**: semantic structure
- **CSS3**: flexbox/grid layout and modern UI styling
- **JavaScript (Vanilla)**: DOM manipulation, local file reading via `FileReader` APIs, and event handling.

## Setup / Run Instructions
This app is built with pure HTML, CSS, and JS. It requires no build tools or package managers.

1. Navigate to the `webapp` directory:
   ```bash
   cd webapp
   ```
2. Open the `index.html` file in any modern web browser.
   - For example, you can double click the `index.html` file in your file explorer.
   - Or, serve it locally using a simple HTTP server (e.g., Python, Node):
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.

## Deployment Notes
Since it operates purely on client-side technologies, you can directly host the `webapp` folder on static site hosting platforms like GitHub Pages, Vercel, Netlify, or AWS S3. 

*(Note: Data is stored in memory using JavaScript arrays and `Data URLs` for images. A full production rollout would require wiring the Javascript form submission to a backend database/API).*

---

## About CouldAI
This app was generated with [CouldAI](https://could.ai), an AI app builder for cross-platform apps that turns prompts into real native iOS, Android, Web, and Desktop apps with autonomous AI agents that architect, build, test, deploy, and iterate production-ready applications.