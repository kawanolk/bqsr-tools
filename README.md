# BQSR Tools

Tauri 2 + React + TypeScript + Radix UI + Tailwind CSSで構築されたデスクトップアプリケーション

## 技術スタック

- **Tauri**
- **React**
- **TypeScript**
- **Radix UI**
- **Tailwind CSS**
- **Lucide React**
- **Vite**

## プロジェクト構造

```
bqsr-tools/
├── apps/                  # フロントエンドソースコード
│   ├── components/       # Reactコンポーネント
│   ├── lib/             # ユーティリティ関数
│   ├── styles/          # グローバルスタイル
│   ├── index.html       # HTMLエントリーポイント
│   └── main.tsx         # Reactエントリーポイント
├── src/                  # Rustソースコード
│   └── main.rs          # Tauriメインプロセス
├── icons/               # アプリケーションアイコン
├── package.json         # Node.js依存関係
├── tsconfig.json        # TypeScript設定
├── tailwind.config.js   # Tailwind CSS設定
├── vite.config.js       # Vite設定
├── tauri.conf.json      # Tauri設定
└── Cargo.toml           # Rust依存関係
```

## セットアップ

### 必要な環境

- Node.js 18以上
- Rust 1.70以上
- Tauri CLI

### インストール

```bash
# 依存関係のインストール
npm install

# Tauri CLIのインストール
cargo install tauri-cli --version "^2.0.0"
```

## 開発

### 開発サーバーの起動

```bash
npm run tauri:dev
```

または

```bash
cargo tauri dev
```

### ビルド

```bash
npm run tauri:build
```

または

```bash
cargo tauri build
```

## スクリプト

- `npm run dev` - Vite開発サーバーのみ起動
- `npm run build` - フロントエンドのビルド
- `npm run preview` - ビルド結果のプレビュー
- `npm run tauri:dev` - Tauriアプリケーションの開発モード起動
- `npm run tauri:build` - Tauriアプリケーションのビルド

## ライセンス

MIT
