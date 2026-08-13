<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Margen Portfolio (林新善個人履歷網站)

本專案為一個基於 React + Vite (前端) 與 Express + Gemini AI SDK (後端) 的 Full-Stack 個人職涯履歷網站。

---

## 🚀 本地開發與運行 (Local Development)

### 系統需求
* **Node.js**: 建議版本為 `v22` 或以上
* **npm**: `v10` 或以上

### 步驟 1：安裝套件
請於專案根目錄執行以下命令以安裝所需依賴：
```bash
npm install
```

### 步驟 2：設定環境變數
在專案根目錄下建立 `.env.local` 檔案，並填入您的 Gemini API Key：
```env
GEMINI_API_KEY=your_gemini_api_key_here
```
> 💡 *提示：若未設定環境變數，系統將自動降級並使用預設的本地知識庫 (Fallback Base) 進行回覆。*

### 步驟 3：啟動開發伺服器
執行以下命令啟動專案，前端會自動透過 Vite 進行熱更新 (HMR)：
```bash
npm run dev
```
啟動後可在瀏覽器開啟 [http://localhost:3000](http://localhost:3000)。

### 步驟 4：本地打包與生產模式測試
若要測試打包後的生產環境運行狀態：
```bash
# 1. 清理舊檔案並編譯 (會同時打包前端靜態檔與 server.ts)
npm run build

# 2. 啟動生產伺服器
npm run start
```

---

## 🐳 Docker 容器化部署 (Docker Deployment)

專案已配置多階段構建 (Multi-stage Build) 的 `Dockerfile`，能有效縮小鏡像體積並提升安全性。

### 1. 構建 Docker 鏡像
```bash
docker build -t margen-portfolio .
```

### 2. 運行 Docker 容器
將本地 `.env.local` 傳入容器中，並將容器的 3000 端口映射到本地：
```bash
docker run -d -p 3000:3000 --env-file .env.local --name portfolio margen-portfolio
```
運行後即可透過 `http://localhost:3000` 進行訪問。

---

## 🛠️ GitHub Actions 自動化部署 (CI/CD)

專案在 `.github/workflows/deploy.yml` 設計了極具彈性的 CI/CD 流程。當您將程式碼推送 (Push) 或發送 PR 至 `main` 分支時，會自動觸發該流程。

### 1. 持續整合 (CI)
* 自動拉取程式碼。
* 透過 `npm ci` 安裝依賴。
* 執行靜態程式碼檢查與型別檢查 (`npm run lint`)。
* 執行專案打包測試 (`npm run build`)，確保程式碼無編譯錯誤。

### 2. 持續部署 (CD)
流程採用 **動態條件判定 (Conditional Job Execution)**。您只需要在 GitHub 專案的 `Settings > Secrets and variables > Actions` 設定對應的 Secrets，即可啟用對應的部署方式：

#### 🔹 方案 A：Render 雲平台部署 (推薦，最簡單)
如果您將專案部署在 Render 上，只需設定以下 Secret，推送至 `main` 分支時即會自動觸發 Render 重新拉取並部署：
* `RENDER_DEPLOY_HOOK_URL`: 填入 Render Web Service 的 Deploy Hook URL。

#### 🔹 方案 B：自建主機部署 (VPS via SSH + PM2)
如果您使用自建的 VPS (例如 AWS EC2, GCP VM 等) 並使用 PM2 維運，可設定以下 Secrets 以實作自動同步與重啟：
* `SSH_HOST`: 伺服器的 IP 地址或網域名稱。
* `SSH_USERNAME`: 登入伺服器的帳號。
* `SSH_KEY`: 您的 SSH 私鑰。
* `SSH_PORT`: SSH 連接埠（預設為 22）。
* `DEPLOY_PATH`: 專案在伺服器上的部署目錄（例如 `/var/www/margen-portfolio`）。

#### 🔹 方案 C：Docker Hub 鏡像自動構建與推送
如果希望每次推送時自動打包 Docker Image 並上傳至 Docker Hub：
* `DOCKER_USERNAME`: Docker Hub 帳號。
* `DOCKER_PASSWORD`: Docker Hub 密碼 (建議使用 Personal Access Token)。

---

## 📂 專案常用指令 (Scripts)

在 `package.json` 中配置了以下開發與維運指令：

| 指令 | 作用 |
| :--- | :--- |
| `npm run dev` | 啟動開發伺服器 (包含 Vite 熱重載) |
| `npm run build` | 進行生產環境打包 (同時編譯前端 React 與後端 Express) |
| `npm run start` | 啟動打包後的 Node.js 生產伺服器 |
| `npm run lint` | 執行 TypeScript 型別檢查 (`tsc --noEmit`) |
| `npm run clean` | 清理打包產物 (刪除 `dist` 目錄) |
