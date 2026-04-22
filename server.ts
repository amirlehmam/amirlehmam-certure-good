import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes go here
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  app.post("/api/register", express.urlencoded({ extended: true }), async (req, res) => {
    console.log("Registration request received:", req.body);
    const brevoUrl = "https://8edb9099.sibforms.com/serve/MUIFANpOGOYwxgMKdNyuJYO6_soF4Dcht7GVa5f8XerygRDKQVDVS-9DUwEMme0EZi1j7izY1XLWaq2dWx0nvQ9pf6QcKIamXDUp9aSSMoO648JGiMPzZyPndsuUZIa9VMXKI6HBWWAaaMX-KE-lH-PQIJA_eHaGjlf0_Mvw0q6zNFggF1fOGrgX7-Wjpyz1aeOym7hL0a_7wf0f";
    
    try {
      const response = await fetch(brevoUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(req.body as any).toString(),
      });

      // We don't care about the redirect from Brevo, we just want to know if it was accepted
      if (response.ok || response.status === 302) {
        res.json({ success: true });
      } else {
        const errorText = await response.text();
        console.error("Brevo error detail:", errorText);
        res.status(500).json({ success: false, error: "Brevo error" });
      }
    } catch (error) {
      console.error("Registration proxy error:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000,
        hmr: process.env.DISABLE_HMR !== 'true'
      },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
