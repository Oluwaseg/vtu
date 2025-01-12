# VTU API System

A robust Virtual Top-Up (VTU) API system for mobile networks, built with Express.js and MongoDB.

## Features

- User Authentication with JWT
- Role-based Access Control (User, Reseller, Admin)
- Airtime and Data Bundle Purchase
- Transaction History
- Rate Limiting
- API Documentation with Swagger
- Secure Error Handling

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update the values:
   ```bash
   cp .env.example .env
   ```

## Environment Variables

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/vtu_api
JWT_SECRET=your_jwt_secret_here
MOBILE_VTU_API_URL=https://api.mobilevtu.com
MOBILE_VTU_API_KEY=your_api_key_here
```

## Running the Application

Development mode:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Documentation

- Swagger UI: http://localhost:3000/api-docs
- Postman Collection: Import `VTU_API.postman_collection.json`

## API Endpoints

### Authentication

- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - User login

### VTU Services

- POST `/api/vtu/airtime` - Purchase airtime
- POST `/api/vtu/data` - Purchase data bundle

## Security Features

- JWT Authentication
- Rate Limiting
- CORS Protection
- Helmet Security Headers
- Input Validation
- Error Handling

## Testing

Run tests using:
```bash
npm test
```

## License

MIT