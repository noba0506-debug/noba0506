import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock CMS Data (In-memory for preview)
  let siteContent = {
    hero: {
      title: "중식의 맛있는 상상,\n예술이 되어\n당신의 미각을 깨우다.",
      subtitle: "조찬형 셰프의 철학과 정성이 빚어내는 궁극의 중식 미학, 찬형각."
    },
    about: {
      title: "The Art of Modern Chinese Cuisine",
      description: "중식은 불과 향, 그리고 타이밍이 만들어내는 하나의 예술입니다. '찬형각'은 오랜 시간 쌓아온 조찬형 셰프의 노하우와 미학을 바탕으로, 전통 중식의 깊은 깊이에 현대적인 감각을 더한 프리미엄 다이닝을 선보입니다."
    },
    features: [
      {
        id: "philosophy",
        title: "Chef’s Philosophy",
        description: "조찬형 셰프가 식재료 선정부터 레시피 개발까지 모든 과정을 직접 총괄하여 독창적인 요리를 선보입니다."
      },
      {
        id: "dining",
        title: "Sensory Dining",
        description: "60평 규모의 모던하고 세련된 인테리어, 프라이빗한 룸에서 아늑하고 품격 있는 다이닝을 즐기실 수 있습니다."
      },
      {
        id: "ingredients",
        title: "Premium Ingredients",
        description: "타합하지 않는 신선함. 당일 엄선된 최고의 재료만을 사용하여 요리의 깊이와 풍미를 극대화합니다."
      }
    ]
  };

  // API Routes
  app.get("/api/content", (req, res) => {
    res.json(siteContent);
  });

  app.post("/api/content", (req, res) => {
    siteContent = { ...siteContent, ...req.body };
    res.json({ message: "Content updated successfully", content: siteContent });
  });

  // Vite middleware for development
  const isProd = process.env.NODE_ENV === "production" || process.env.VITE_PROD === "true";

  if (!isProd) {
    console.log("Starting server in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files from dist
    app.use(express.static(distPath, {
      index: false // We handle index.html manually for SPA fallback
    }));

    // API Routes handled before SPA fallback
    app.get("/api/content", (req, res) => {
      res.json(siteContent);
    });

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
