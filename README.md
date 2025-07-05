# blogapi

This repository was generated using [CodeForge](https://github.com/codeforge/codeforge).

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/profencer/blogapi.git
cd blogapi
```

2. Install dependencies:
```bash
cd backend
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run start:dev
```

### Using Docker

1. Start with Docker Compose:
```bash
docker-compose up -d
```

### API Documentation

Once the server is running, you can access:

- **API Documentation**: http://localhost:3000/api/docs
- **Health Check**: http://localhost:3000/api/v1/health

## Project Structure

```
blogapi/
├── backend/           # NestJS backend application
├── specs/            # API specifications (OpenAPI/AsyncAPI)
├── docker-compose.yml # Docker configuration
└── README.md         # This file
```

## Generated with CodeForge

This project was scaffolded using CodeForge, a code-first backend generation platform.

- **Data Models**: Defined using JSON Schema
- **API Specifications**: Auto-generated OpenAPI 3.0 and AsyncAPI 2.0
- **Backend**: Complete NestJS application with TypeORM
- **Infrastructure**: Docker configuration for easy deployment

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
