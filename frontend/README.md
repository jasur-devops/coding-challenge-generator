# DevOps Challenge Quiz Frontend

## Quick Start

### Prerequisites
- Node.js 18.17.0 or higher (recommended Node.js 20.x LTS for React 19)
- npm 9.x or yarn 1.22.x

### Setup and Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create environment file:
```bash
touch ./frontend/.env
```

3. Configure environment variables in `.env`:
```bash
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
```

### Running the Project

Development mode:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:{port}`

## Project Structure
```
frontend/
├── src/
│   ├── auth/          # Authentication components
│   ├── challenge/     # Challenge generation components
│   ├── history/       # History panel components
│   ├── layout/        # Layout components
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static assets
└── index.html         # HTML entry point
```

## Authentication Setup with Clerk

### Getting Started with Clerk

1. Sign up for Clerk:
   - Visit [clerk.com](https://clerk.com)
   - Click "Sign Up" in the top right corner
   - Complete the registration process with your email

2. Create a New Application:
   - After signing in, click "Create Application" on your Clerk Dashboard
   - Choose "Create from scratch"
   - Name your application (e.g., "DevOps Challenge Quiz")
   - Select the "React" framework
   - Choose your sign-in methods (recommended: Email, Google)
   - Click "Create Application"

3. Get Your API Keys:
   - In your new application dashboard, click on "API Keys" in the left sidebar
   - Copy the "Publishable Key" (starts with `pk_test_` or `pk_live_`)

### Environment Setup

1. Create a `.env` file in the frontend directory:
```bash
VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
```

### Usage

The application uses Clerk for authentication. The main authentication components are located in:
```
src/
└── auth/
    ├── AuthenticationPage.jsx    # Sign-in and sign-up page
    └── ClerkProviderWithRoutes.jsx  # Clerk configuration and protected routes
```

For more information about Clerk features and APIs, visit the [Clerk Documentation](https://clerk.com/docs).
