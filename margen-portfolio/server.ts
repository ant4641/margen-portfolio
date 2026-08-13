import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API health endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Gemini Chat API endpoint for interactive recruiter & visitor Q&A
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Missing message parameter" });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
      // Return smart structured answer based on preset knowledge if GEMINI_API_KEY is not set
      const fallbackReply = getFallbackAnswer(message);
      res.json({ reply: fallbackReply, source: "knowledge_base" });
      return;
    }

    // Call Gemini API server-side
    const ai = new GoogleGenAI({ apiKey });
    
    const systemPrompt = `你是一位代表林新善（Margen Lin）的 AI 職涯助理。你的任務是向瀏覽此履歷網站的人資（HR）、技術主管（Engineering Manager）與獵頭，精準呈現 Margen 的核心技術優勢、商業影響力與個人特質。

# Key Persona & Career Summary
1. 核心定位：資深後端工程師（5+ 年經驗），深耕 Java (Spring Boot) 與 PHP (Laravel)，專精於「大型商業系統重構」與「高複雜度 IoT 軟硬體整合（門禁/車辨/串流）」。
2. 核心技術與架構思維：
   - 架構設計：堅守 Domain-Driven Design (DDD) 與 SOLID 原則，具備高擴充性模組化設計能力。
   - 巨量數據與系統重構：
     - MariaDB Slave 機制重構（一致性快照與 MVCC 機制，達成線上零鎖表備份，提升叢集穩定度 90%）。
     - Kafka/ELK 大數據管道 1GB 壓力測試與 Snappy 壓縮評估，驗證節省 85% 磁碟空間，達成 1,680 萬筆資料無損寫入。
   - 軟硬體整合 (IoT)：具備 RTSP 轉流技術控管 50+ 支攝影機畫面經驗，並透過 Modbus TCP、IO Box 與 API 串接 ETC、門禁機與感測器。
   - AdTech 廣告科技：維運 DSP 下單系統與 SSP 廣告 API，實作可視率（Viewability > 60%）演算法，優化商業報表與廣告真實度。
   - 品質與 CI/CD：建立前端 Jest E2E 自動化測試鏈，修復 350+ 個單元/功能測試 Method，確保 CI/CD 流程高度穩定。
3. 軟實力與領導溝通：
   - 流程優化者 (Process Optimizer)：資管本科系出身，從最基礎 SDLC 與 UML 繪製學起，能導入 Use Case 與流程圖規範，教導 PM 補齊邊界條件 (Edge Cases)，顯著降低需求溝通不符導致的返工率。
   - 跨界影響力與溝通：具備 IT 人力諮詢顧問與海外 STEM 科學教學經驗，具備極強的口條表達、簡報展示與跨部門協調能力。
   - 產品思維：熱愛從「使用者體驗」與「解決真實問題」出發開發產品（如 Side Project：即興劇 AI 互動系統）。
4. 職涯歷程摘要：
   - 日誌監控與告警系統服務商（2026/04 - 仍在職）：資深全端工程師，主導分散式 DB 重構、Kafka/ELK 壓力測試與全球極端時區告警演算法。
   - 口袋證券（2024/01 - 2024/12）：資深系統工程師，負責線上開戶系統重構，DB 查詢速度提升 87%，導入 OpenCV 提升 OCR 辨識率 12%，撰寫自動化備份幫公司省下萬美元服務費。
   - 集星網路（2021/09 - 2024/01）：軟體工程師，開發長照中心大樓管理系統（串接 15+ 種硬體）與電動車智能停車場管理系統（實體 3 案場上線並親自現場部署測試）。
   - 資訊接案與招募顧問（2019/02 - 2021/09）：建立人才資料庫提升效率 80%，海外 STEM 教學公開觀課示範講師，幫新創公司建立自動化腳本提升結算效率 100%。
   - 艾普特媒體（2018/08 - 2019/02）：AdTech 軟體工程師，維運 DSP/SSP 雙平台，開發 CTR/收益報表與廣告可視率演算法，導入 SDLC 流程優化開發效率。

回應風格規範：
1. 語氣：自信、專業、具備工程邏輯，同時帶有清晰、親和且客觀的態度。
2. 數據導向：回答關於經驗的問題時，優先使用量化數據（如 87% 效能提升、85% 空間節省、1,680萬筆資料零掉單）來證明實力。
3. 導向商業價值：強調 Margen 不只是一個「寫程式的工程師」，而是一個能「解決商業痛點、引導團隊 SOP、打造有感產品」的專業技術大將。`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: `${systemPrompt}\n\n使用者問題：${message}` }] }
      ]
    });

    const replyText = response.text || "非常抱歉，目前暫時無法取得詳細回覆，歡迎直接透過 Email (hsinshanlin@gmail.com) 或電話 (0972109721) 與林新善聯繫！";
    res.json({ reply: replyText, source: "gemini_ai" });

  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    const fallbackReply = getFallbackAnswer(req.body.message || "");
    res.json({ reply: fallbackReply, source: "fallback_due_to_error" });
  }
});

function getFallbackAnswer(q: string): string {
  const query = q.toLowerCase();
  if (query.includes("特色") || query.includes("定位") || query.includes("優勢")) {
    return "【林新善的核心特色 — 專準主義 (Essentialism)】\n1. 大型商業系統重構 & 高併發：具備 MariaDB MVCC 零鎖表備份、Kafka 1,680 萬筆 100% 零掉單與 85% 磁碟空間壓縮經驗。\n2. IoT 軟硬整合與 DDD：實戰串接 15+ 硬體協定 (Modbus TCP, RTSP, IO Box) 並於長照中心與 3 停車場落地。\n3. 商業 ROI 與團隊溝通：曾任招募顧問，具備極佳溝通效率，能將技術轉化為商業價值（幫公司省下 $10,000 美金）。";
  }
  if (query.includes("mariadb") || query.includes("kafka") || query.includes("日誌") || query.includes("壓測")) {
    return "【日誌監控平台亮點】\n• MariaDB 重構：引入一致性快照與 MVCC 機制，達成線上零鎖表備份，消除 Race Condition，叢集穩定度高達 90%。\n• Kafka/ELK 大數據管道：進行 1GB 壓力測試與 Snappy 壓縮評估，達成 1,680 萬筆資料 100% 零掉單寫入，並節省 85% 磁碟空間。";
  }
  if (query.includes("證券") || query.includes("口袋") || query.includes("開戶") || query.includes("查詢") || query.includes("10000") || query.includes("美金")) {
    return "【口袋證券線上開戶系統成果】\n• 效能飆升：重構客戶資料查詢語法，查詢速度提升 87%。\n• 成本優化：撰寫 MSSQL 定期自動備份還原工具，幫公司省下 $10,000 美金的升級授權費。\n• AI 整合：使用 OpenCV 優化影像辨識，OCR 辨識率提升 12%。\n• 自動化：測試效率提升 5 倍，排程監控警報自動發送。";
  }
  if (query.includes("iot") || query.includes("長照") || query.includes("停車場") || query.includes("硬體") || query.includes("rtsp")) {
    return "【IoT 軟硬體整合與 DDD 落地】\n• 智慧長照大樓管理：導入 DDD 建構架構，串接門禁、車辨、訪客等 15+ 硬體，控管 50 隻 RTSP 攝影機，並實地通報緊急事件。\n• 智慧電動車停車場：結合車牌辨識演算法自動判斷車輛進出場，並親自到實體案場進行現場部署與全流程測試。";
  }
  if (query.includes("獵頭") || query.includes("主管") || query.includes("建議") || query.includes("點評")) {
    return "【資深獵頭 & 20+年科技主管視角評估】\n1. 數據導向 (Data-Driven)：所有成就皆有數據背書 (87% 加速, 85% 空間節省, $10,000 美金成本節省)，屬於 Top 5% 資深履歷。\n2. 真正落地 DDD：非口號，而是真正運用在金融與實體長照/停車場的實戰。\n3. 軟硬兼修與極佳溝通：同時具備招募顧問與底層工控/高併發經驗，適合擔任 Tech Lead。";
  }
  return "【林新善 (Margen Lin)】\n具備 5+ 年 Java (Spring Boot) & PHP (Laravel) 後端與全端經驗。專精於大型商業系統重構、高併發數據管道、IoT 軟硬整合與 DDD 領域驅動設計。歡迎點擊頁面上的選單查看三大亮點專案、詳細職涯時間軸與資深主管點評報告！";
}

async function startServer() {
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
