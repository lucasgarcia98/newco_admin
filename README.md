# NewCo Admin Panel

This project is an admin panel system built with React.js for the front-end and Node.js with NestJS for the back-end. It utilizes Material UI for the UI components and Prisma ORM for database interactions with PostgreSQL.

## Project Structure

```
newco-admin
├── frontend                # Frontend application
│   ├── package.json       # Frontend dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration for frontend
│   ├── vite.config.ts     # Vite configuration for frontend
│   ├── public              # Public assets
│   │   └── index.html     # Main HTML file for frontend
│   └── src                # Source code for frontend
│       ├── main.tsx       # Entry point for React application
│       ├── App.tsx        # Main application component
│       ├── pages          # Page components
│       │   ├── Dashboard.tsx  # Dashboard page
│       │   ├── Login.tsx      # Login page
│       │   └── Users.tsx      # Users management page
│       ├── components      # Reusable components
│       │   ├── layout      # Layout components
│       │   │   ├── NavBar.tsx  # Navigation bar
│       │   │   └── SideBar.tsx  # Sidebar navigation
│       │   └── ui         # UI components
│       │       ├── DataTable.tsx  # Data table component
│       │       └── ConfirmDialog.tsx  # Confirmation dialog
│       ├── hooks          # Custom hooks
│       │   └── useAuth.ts  # Authentication hook
│       ├── api            # API client
│       │   └── apiClient.ts  # API client instance
│       ├── theme          # Theme configuration
│       │   └── theme.ts   # Material UI theme
│       └── types          # TypeScript types
│           └── index.ts   # Type definitions
├── backend                 # Backend application
│   ├── package.json       # Backend dependencies and scripts
│   ├── tsconfig.json      # TypeScript configuration for backend
│   ├── nest-cli.json      # NestJS CLI configuration
│   ├── prisma             # Prisma setup
│   │   ├── schema.prisma  # Prisma schema definition
│   │   └── migrations     # Database migrations
│   └── src                # Source code for backend
│       ├── main.ts        # Entry point for NestJS application
│       ├── app.module.ts  # Root module of the application
│       ├── modules        # Feature modules
│       │   ├── auth       # Authentication module
│       │   │   ├── auth.module.ts  # Auth module definition
│       │   │   ├── auth.controller.ts  # Auth controller
│       │   │   └── auth.service.ts  # Auth service
│       │   └── users      # User management module
│       │       ├── users.module.ts  # Users module definition
│       │       ├── users.controller.ts  # Users controller
│       │       └── users.service.ts  # Users service
│       ├── prisma         # Prisma service
│       │   └── prisma.service.ts  # Prisma service for database access
│       └── common         # Common utilities
│           ├── dto       # Data Transfer Objects
│           │   └── index.ts  # DTO definitions
│           └── guards     # Guards for route protection
│               └── jwt.guard.ts  # JWT guard for authentication
├── docker-compose.yml      # Docker configuration
├── .env.example            # Example environment variables
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- PostgreSQL (version 12 or higher)
- Docker (for containerized setup)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd newco-admin
   ```

2. Install dependencies for the frontend:

   ```
   cd frontend
   npm install
   ```

3. Install dependencies for the backend:

   ```
   cd ../backend
   npm install
   ```

### Running the Application

You can run the application using Docker or directly using Node.js.

#### Using Docker

1. Build and run the containers:

   ```
   docker-compose up --build
   ```

#### Directly with Node.js

1. Start the backend server:

   ```
   cd backend
   npm run start:dev
   ```

2. Start the frontend application:

   ```
   cd ../frontend
   npm run dev
   ```

### Environment Variables

Copy the `.env.example` file to `.env` and configure your environment variables accordingly.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.