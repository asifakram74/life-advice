import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(express.json());

// Supabase client
const supabase = createClient(
  process.env.VITE_SUPABASE_URL || 'https://vrgliroyyrdpvureqlyg.supabase.co',
  process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZ2xpcm95eXJkcHZ1cmVxbHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3ODIzOTEsImV4cCI6MjA2ODM1ODM5MX0.D3QXj6bF-XHY-Hu5difRYtxiUNvAHMc3Yfp2hAdIW9A'
);
 
// Life insurance recommendation logic
const generateRecommendation = ({ age, income, dependents, riskTolerance }) => {
  console.log("Input received:", { age, income, dependents, riskTolerance });

  // Calculate base coverage amount (5-10x annual income)
  let baseCoverage = income * 7;

  // Adjust for dependents
  const dependentMultiplier = Math.max(1, dependents * 0.5);
  baseCoverage *= dependentMultiplier;

  // Adjust for age
  if (age < 30) {
    baseCoverage *= 1.2;
  } else if (age > 50) {
    baseCoverage *= 0.8;
  }

  // Round to nearest $50,000
  const coverageAmount = Math.round(baseCoverage / 50000) * 50000;

  // Determine product type and term
  let productType = 'Term Life';
  let term = 20;
  let explanation = '';

  if (age < 40) {
    if (riskTolerance === 'High') {
      productType = 'Term Life';
      term = 30;
      explanation = '30-year term life: low cost and good for investing the difference.';
    } else if (riskTolerance === 'Medium') {
      productType = 'Term Life';
      term = 20;
      explanation = '20-year term life: balances cost and duration.';
    } else {
      productType = 'Whole Life';
      term = 'Lifetime';
      explanation = 'Whole life: guaranteed coverage with cash value.';
    }
  } else if (age < 55) {
    if (riskTolerance === 'High') {
      productType = 'Term Life';
      term = 15;
      explanation = '15-year term: cost-effective for remaining earning years.';
    } else {
      productType = 'Universal Life';
      term = 'Flexible';
      explanation = 'Universal life: flexible and suited to your age and profile.';
    }
  } else {
    productType = 'Whole Life';
    term = 'Lifetime';
    explanation = 'Whole life: good for estate planning and guaranteed coverage.';
  }

  const recommendation = `${productType} – $${coverageAmount.toLocaleString()}${term !== 'Lifetime' && term !== 'Flexible' ? ` for ${term} years` : ''}`;

  return { recommendation, explanation };
};

// API Endpoint
app.post('/api/recommendation', (req, res) => {
  try {
    let { age, income, dependents, riskTolerance } = req.body;

    // Convert string values to appropriate types
    age = parseInt(age, 10);
    income = parseFloat(income);
    dependents = parseInt(dependents, 10);

    if (!age || !income || dependents < 0 || !riskTolerance) {
      return res.status(400).json({ error: 'Missing or invalid fields' });
    }

    const validRisk = ['Low', 'Medium', 'High'];
    if (!validRisk.includes(riskTolerance.charAt(0).toUpperCase() + riskTolerance.slice(1).toLowerCase())) {
      return res.status(400).json({ error: 'Invalid risk tolerance' });
    }

    const result = generateRecommendation({
      age,
      income,
      dependents,
      riskTolerance: riskTolerance.charAt(0).toUpperCase() + riskTolerance.slice(1).toLowerCase()
    });

    res.json(result);
  } catch (err) {
    console.error('Error generating recommendation:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});