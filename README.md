# Welcome to your Life Advice project

## Project info

**URL**: 

## Features

- **Interactive Form**: Clean, responsive form with real-time validation
- **Smart Recommendations**: Rules-based recommendation engine extensible for ML integration
- **Database Storage**: PostgreSQL integration via Supabase
- **RESTful API**: Node.js/Express backend with comprehensive error handling
- **Modern UI**: Tailwind CSS with smooth animations and micro-interactions

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Lucide React
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (Supabase)
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Supabase account

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Click "Connect to Supabase" in the top right
   - Create a new project or use existing one
   - Run the database migration in the Supabase SQL editor

4. Create `.env` file:
   ```bash
   cp .env.example .env
   ```
   Update with your Supabase credentials

5. Start the development servers:
   ```bash
   # Terminal 1 - Frontend
   npm run dev
   
   # Terminal 2 - Backend
   npm run server
   ```

## API Endpoints

### POST /api/recommendation
Submit user data and receive personalized recommendation.

**Request Body:**
```json
{
  "age": 35,
  "income": 75000,
  "dependents": 2,
  "risk_tolerance": "Medium"
}
```

**Response:**
```json
{
  "id": "uuid",
  "recommendation": "Term Life – $525,000 for 20 years",
  "explanation": "A 20-year term life policy balances cost and coverage duration..."
}
```

### GET /api/submissions
Retrieve all user submissions (admin/analytics).

### GET /api/health
Health check endpoint.

## Recommendation Logic

The system uses a rules-based approach considering:

- **Coverage Amount**: 5-10x annual income, adjusted for dependents
- **Product Type**: Term Life, Whole Life, or Universal Life
- **Term Length**: Based on age and risk tolerance
- **Risk Factors**: Age, dependents, and risk tolerance preferences

## Database Schema

- **user_submissions** table stores:
  - User inputs (age, income, dependents, risk_tolerance)
  - Generated recommendations and explanations
  - Timestamps for analytics

## Future Enhancements

- Machine learning integration for advanced recommendations
- User authentication and profile management
- Comparison tools for different insurance products
- Integration with insurance provider APIs
- Advanced analytics and reporting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.