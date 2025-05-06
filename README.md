# PrepWise - AI Interview Preparation Platform

![PrepWise Logo](public/logo.svg)

## Overview

PrepWise is an interactive AI-powered interview preparation platform designed to help job seekers practice and improve their interview skills. The application offers realistic mock interviews with AI interviewers, comprehensive feedback, and performance analytics to help users improve their interview performance and land their dream jobs.

With PrepWise, users can:
- Practice interviews for various roles and seniority levels
- Experience both technical and behavioral interview scenarios
- Receive detailed feedback and scoring on their performance
- Track progress over time with comprehensive analytics
- Practice with industry-specific interview questions

## Features

### AI-Powered Interviews
- Voice-based conversations with AI interviewers
- Real-time transcription and response
- Natural conversational flow

### Personalized Experience
- Interviews tailored to specific roles (Frontend, Full Stack, etc.)
- Customizable tech stack focus
- Adjustable difficulty levels (Junior, Mid, Senior)

### Comprehensive Feedback
- Detailed scoring across key competency areas
- Strengths and improvement suggestions
- Technical knowledge assessment

### User Dashboard
- Interview history and progress tracking
- Performance analytics and trends
- Scheduled practice sessions

## Technology Stack

### Frontend
- **React 19**: Latest version of React featuring improved performance and better server component support.
- **Next.js 15**: The React framework for production that enables features like server-side rendering and static site generation.
- **TypeScript**: Enhances code quality and developer experience with static typing.
- **TailwindCSS 4**: Utility-first CSS framework for rapid UI development with custom design system integration.

### UI Components & Styling
- **Shadcn/UI**: Component collection built on top of Tailwind CSS with a customizable and accessible design system.
- **Radix UI**: Headless UI component primitives for building accessible interfaces.
- **Lucide React**: Beautiful and consistent icon set for the UI.
- **Tailwind Merge & CLSX**: Utilities for conditional class name composition.

### Authentication & Backend
- **Firebase Authentication**: Secure user authentication system.
- **Firebase Firestore**: NoSQL database for storing user data, interview information, and feedback.
- **Firebase Admin SDK**: Server-side Firebase functionality for secure operations.

### Form Management
- **React Hook Form**: Efficient form management with validation.
- **Zod**: TypeScript-first schema validation with static type inference.
- **Hookform/Resolvers**: Integration between React Hook Form and validation libraries.

### AI Integration
- **VAPI AI**: Voice AI SDK for realistic conversational interviews.
- **AI SDK**: Framework for integrating AI capabilities.

### Developer Experience
- **ESLint**: Code quality and style enforcement.
- **TurboRepo/TurboPack**: Build system optimization for faster development experience.
- **TypeScript**: Type safety throughout the codebase.

### Date & Time Handling
- **DayJS**: Lightweight alternative to Moment.js for date manipulation.

### Notifications
- **Sonner**: Elegant toast notifications for the UI.

## Architecture

The application follows a modern React architecture with:

1. **App Router Pattern**: Leveraging Next.js App Router for file-based routing
2. **Server Components**: Using React Server Components for improved performance
3. **Route Groups**: Organized routing structure with auth and main application separation
4. **API Routes**: Backend functionality through Next.js API routes
5. **Client-Side Interactivity**: React hooks and state management for interactive features

## Future Roadmap

### Short-term Improvements
- **Resume Analysis**: AI-powered resume review and suggestions based on job descriptions
- **Video Recording**: Option to record interview sessions for self-review
- **Interview Templates**: Industry-specific interview templates for various roles
- **Community Features**: Share and practice with interview questions from the community

### Medium-term Additions
- **Body Language Analysis**: AI feedback on nonverbal communication using webcam
- **Interview Scheduling**: Book mock interviews with AI at specific times
- **Collaborative Interviews**: Practice panel interviews with multiple AI interviewers
- **Mobile Application**: Native mobile experience for practicing on the go

### Long-term Vision
- **Human Coach Integration**: Connect with real interview coaches for premium feedback
- **Company-Specific Preparation**: Training modules tailored to specific companies
- **Career Path Planning**: AI-driven career development suggestions based on interview performance
- **AR/VR Interview Simulation**: Immersive interview practice in virtual environments

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Firebase account (for authentication and database)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/prepwise.git
cd prepwise
