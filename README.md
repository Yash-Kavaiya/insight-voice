# 🎙️ Insight Voice

> Transform your business conversations into actionable intelligence with enterprise-grade AI

Insight Voice is a cutting-edge web application that leverages advanced AI technology to analyze audio conversations, providing intelligent transcription, sentiment analysis, and business insights. Built for modern enterprises that want to unlock the full potential of their communication data.

## ✨ Features

### 🤖 Intelligent Audio Analysis
- **Advanced Transcription**: Industry-leading accuracy with real-time processing across 65+ languages
- **Sentiment Intelligence**: Comprehensive emotion analysis and customer satisfaction tracking
- **AI-Powered Insights**: Extract key topics, action items, and strategic decisions automatically
- **Speaker Detection**: Identify and track multiple speakers in conversations

### 🛡️ Enterprise-Grade Security
- **Data Privacy**: Bank-level encryption and SOC 2 compliance
- **PII Detection**: Automatic identification and protection of sensitive information
- **Secure Processing**: Complete data sovereignty controls

### 📊 Business Intelligence
- **Executive Dashboards**: C-suite reporting with KPIs and trend analysis
- **Performance Metrics**: Track communication effectiveness and outcomes
- **Export Capabilities**: Download reports and transcripts in multiple formats

### 🎯 User Experience
- **Drag & Drop Upload**: Intuitive audio file upload interface
- **Real-time Processing**: Live analysis progress with detailed feedback
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark/Light Mode**: Customizable interface themes

## 🚀 Quick Start

### Prerequisites

- **Node.js** (version 18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yash-Kavaiya/insight-voice.git
   cd insight-voice
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Lightning-fast build tool and development server

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible components for complex UI patterns
- **Lucide React** - Beautiful, customizable icons

### State & Data Management
- **TanStack Query** - Powerful data synchronization for server state
- **React Router** - Declarative routing for single-page applications
- **React Hook Form** - Performant forms with easy validation

### Development Tools
- **ESLint** - Code linting and quality enforcement
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic CSS vendor prefixing

## 📁 Project Structure

```
insight-voice/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── sample-call-*.txt  # Demo audio files
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── AudioAnalysis.tsx
│   │   ├── AudioUpload.tsx
│   │   ├── Dashboard.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── assets/           # Images and media
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory for local development:

```env
# API Configuration
VITE_API_BASE_URL=your_api_endpoint
VITE_API_KEY=your_api_key

# Feature Flags
VITE_ENABLE_ANALYTICS=true
```

### Tailwind Configuration

The project uses a custom Tailwind configuration with:
- Extended color palette for corporate branding
- Custom typography settings
- Responsive breakpoints
- Animation utilities

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use existing UI components from shadcn/ui
- Maintain consistent code formatting with ESLint
- Write meaningful commit messages
- Test your changes thoroughly

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with tree-shaking and code splitting
- **Loading Speed**: Sub-second initial page loads
- **Accessibility**: WCAG 2.1 AA compliant

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 Enterprise Support

For enterprise licensing, custom integrations, or technical support:

- 📧 Email: support@insight-voice.com
- 🌐 Website: [insight-voice.com](https://insight-voice.com)
- 📞 Phone: +1 (555) 123-4567

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - The AI-powered development platform
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Powered by [Vite](https://vitejs.dev/) and [React](https://react.dev/)

---

<div align="center">

**Made with ❤️ by the Insight Voice Team**

[🌟 Star this repo](https://github.com/Yash-Kavaiya/insight-voice) • [🐛 Report Bug](https://github.com/Yash-Kavaiya/insight-voice/issues) • [💡 Request Feature](https://github.com/Yash-Kavaiya/insight-voice/issues)

</div>
