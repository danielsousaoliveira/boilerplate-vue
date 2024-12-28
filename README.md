A modern Vue 3 boilerplate with TypeScript, Vite, Tailwind CSS, Pinia, Vue Query, and Docker support.

## Features

- ⚡️ [Vue 3](https://vuejs.org/)
- 🎯 [TypeScript](https://www.typescriptlang.org/)
- 📦 [Vite](https://vitejs.dev/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🏪 [Pinia](https://pinia.vuejs.org/) - State Management
- 🔄 [Vue Query](https://tanstack.com/query/latest) - Data Fetching
- 🐳 [Docker](https://www.docker.com/) Support
- 🔧 [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## Prerequisites

- Node.js
- npm or yarn
- Docker (optional)

## Installation and Setup

### Local Development

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-name>
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

### Using Docker

#### Development Environment

1. Start the development container:

```bash
docker-compose up dev
```

The application will be available at `http://localhost:3000`

#### Production Environment

1. Start the production container:

```bash
docker-compose up prod
```

The application will be available at `http://localhost:8080`

#### Docker Commands

- Stop containers:

```bash
docker-compose down
```

- Rebuild containers:

```bash
docker-compose build
```

- View logs:

```bash
docker-compose logs -f
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
```

## Deployment

### Using Nginx

1. Build the application:

```bash
npm run build
```

2. Configure Nginx to serve the application (example configuration):

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## License

[MIT](LICENSE)
