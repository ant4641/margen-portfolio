<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Margen Portfolio (林新善個人履歷網站 - 靜態版)

本專案為一個基於 React + Vite + Tailwind CSS v4 的個人職涯履歷網站。目前為純前端靜態網站版本，不需運行任何後端伺服器或資料庫。

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

### 步驟 2：啟動開發伺服器
執行以下命令啟動專案，前端會自動透過 Vite 進行熱更新 (HMR)：
```bash
npm run dev
```
啟動後可在瀏覽器開啟 [http://localhost:5173](http://localhost:5173)。

### 步驟 3：本地打包與預覽
若要測試打包後的靜態網頁與本地預覽：
```bash
# 1. 執行 Vite 打包（檔案會輸出至 dist/ 目錄）
npm run build

# 2. 本地預覽打包結果
npm run preview
```
啟動後可在瀏覽器開啟 [http://localhost:4173](http://localhost:4173)。

---

## ⚙️ GitHub Pages 自動部署設定 (CI/CD)

專案已配置 [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)，只要你將程式碼推送到 GitHub，GitHub Action 就會自動幫你打包並發布至 **GitHub Pages**。

### ⚠️ 首次部署必要設定 (只需設定一次)
為了讓 GitHub 有權限幫你發布網站，請在你的 GitHub 專案頁面進行以下設定：

1. 開啟你的 GitHub 專案網頁，點選上方選單的 **Settings** (設定)。
2. 在左側選單中找到並點選 **Pages**。
3. 在中間的 **Build and deployment** 區段下，將 **Source** 欄位從「Deploy from a branch」改為 **「GitHub Actions」**。
4. 設定完成！

### 🚀 開始部署
往後只要你執行 `git push` 將程式碼推送至 `main` 分支，GitHub Actions 就會自動啟動，並在 1~2 分鐘內部署上線。
* **部署後的網站網址為**：`https://<你的GitHub帳號>.github.io/margen-portfolio/`

---

## 📂 專案常用指令 (Scripts)

在 `package.json` 中配置了以下開發指令：

| 指令 | 作用 |
| :--- | :--- |
| `npm run dev` | 啟動前端開發伺服器 (開發模式，監聽 5173 Port) |
| `npm run build` | 進行生產環境打包 (輸出靜態資源至 `dist` 目錄) |
| `npm run preview` | 在本地啟動簡易伺服器預覽 `dist` 打包結果 (監聽 4173 Port) |
| `npm run lint` | 執行 TypeScript 型別安全檢查 (`tsc --noEmit`) |
| `npm run clean` | 清理打包產物 (刪除 `dist` 目錄) |
