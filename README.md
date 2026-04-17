# Claude for Microsoft Office

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18-green)
![Office Add-in](https://img.shields.io/badge/Microsoft-Office%20Add--in-blue)
![Status](https://img.shields.io/badge/status-active-success)

> This is an AI assistant for Microsoft Word and PowerPoint that runs on the Claude API.
---

## Preview

![Claude Office UI](./docs/design.png)

---

## Features

- Quickly summarize documents
- Rewrite text in different styles  
- Turn text into slide outlines 
- Use your own AI prompts right inside Word
- Put the results back into the document with one click

## Tech Stack

- Office add-in built with HTML, CSS, and JavaScript
- Node.js + Express
- Claude API by Anthropic
- WebView2 in the Office runtime

---

## Installation

### 1. Clone repo

```bash
git clone https://github.com/YOUR_USERNAME/claude-office-suite.git
cd claude-office-suite
```

### 2. Setup backend 
```bash
cd apps/backend
npm install
```
- Create .env:
 ```bash
 ANTHROPIC_API_KEY=your_api_key_here
PORT=3000
 ```
- Run it:
```bash
npm start
```
### 3. Run Add-in
- Open:
```bash
apps/addin/public/manifest.xml
```
- Load into Word:

Word → Insert → Add-ins → My Add-ins
Upload manifest

## Security

- API key is stored **only on backend**
- No secrets exposed in frontend
- HTTPS on localhost is supported
