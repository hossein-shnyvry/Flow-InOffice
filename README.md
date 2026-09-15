# InOffice Flow

A Chrome extension that provides exclusive access to Google Flow without changing your region. Built on top of `CFC-Flow-v1.1.0` with a redesigned InOffice UI.

## Features

- One-click connection to Google Flow
- Custom InOffice branding and Persian UI
- No region change required
- Real-time connection status feedback

## What's New in This Version

- Core functional files preserved as-is: `app.js`, `engine.js`, `link.js`, `panel.js`, and `stat.js`
- Popup redesigned with InOffice styles, colors, and logo
- Persian introduction text with links to website, Instagram, and Telegram
- Extension name and description updated in `manifest.json`
- Permissions, network destinations, and core execution paths preserved

## Installation

### From Source (Developer Mode)

1. Clone this repository or download the ZIP
2. Open Chrome and navigate to `chrome://extensions`
3. Enable **Developer mode** (top right toggle)
4. Click **Load unpacked** and select the project folder
5. The extension icon will appear in your toolbar

### Usage

1. Click the extension icon in your toolbar
2. Press the **Connect** button
3. If a Flow tab is already open, reload it
4. You're ready to use Google Flow

## Project Structure

```
Flow-InOffice/
├── app.js           # Background service worker (spec fetching, script registration)
├── engine.js        # Core engine (obfuscated)
├── content.js       # Content script for banner injection
├── link.js          # Link handler (obfuscated)
├── panel.js         # Popup panel logic
├── stat.js          # Diagnostic status reporting
├── panel.html       # Popup HTML
├── panel.css        # Popup styles
├── banner.css       # In-page banner styles
├── info.html        # Guide page
├── manifest.json    # Chrome extension manifest (v3)
├── assets/          # Icons and media
└── README.fa.md     # Persian documentation
```

## Permissions

This extension requires:
- `scripting` permission to register/unregister content scripts
- Access to `https://flow.google.com/*` and `https://flow.cfcnode.com/*`

## Security Notice

This package does not perform functional hardening to preserve original behavior. The core engine code is obfuscated and `app.js` retains the original network destinations. This package does not constitute production security approval. Review permissions and files before installation.

## License

[MIT License](LICENSE)

## Author

**Hossein Shnyvry**
- [LinkedIn](https://www.linkedin.com/in/hossein-shnyvry/)
- [Instagram](https://www.instagram.com/hossein_shnyvry/)
- [Telegram](https://t.me/hossein_shnyvry)
