
interface UserProfile {
  age: string;
  income: string;
  dependents: string;
  riskTolerance: string;
}

interface RecommendationData {
  type: string;
  coverage: string;
  term: string;
  monthlyPremium: string;
  explanation: string;
  benefits: string[];
  considerations: string[];
  confidence: 'high' | 'medium' | 'low';
}

export const generateRecommendation = (profile: UserProfile): RecommendationData => {
  const age = parseInt(profile.age);
  const income = parseInt(profile.income.replace(/,/g, ''));
  const dependents = parseInt(profile.dependents);
  const riskTolerance = profile.riskTolerance;

  // Calculate coverage multiplier based on income and dependents
  let coverageMultiplier = 7; // Base 7x income
  if (dependents > 0) coverageMultiplier += dependents * 2;
  if (dependents > 3) coverageMultiplier += 2;

  // Adjust based on age
  if (age < 30) coverageMultiplier += 1;
  if (age > 50) coverageMultiplier -= 1;

  const recommendedCoverage = Math.min(income * coverageMultiplier, 2000000);
  const formattedCoverage = `$${(recommendedCoverage / 1000).toFixed(0)}K`;

  // Determine insurance type based on profile
  let insuranceType = 'Term Life';
  let termLength = '20 years';
  let confidence: 'high' | 'medium' | 'low' = 'high';

  if (riskTolerance === 'high' && income > 100000 && age < 45) {
    insuranceType = 'Whole Life';
    termLength = 'Lifetime';
  } else if (riskTolerance === 'medium' && income > 75000) {
    insuranceType = 'Universal Life';
    termLength = 'Flexible';
    confidence = 'medium';
  }

  // Adjust term length for term life
  if (insuranceType === 'Term Life') {
    if (age < 35 && dependents > 0) termLength = '30 years';
    if (age > 50) termLength = '15 years';
    if (age > 60) termLength = '10 years';
  }

  // Calculate estimated premium (simplified calculation)
  let basePremium = (recommendedCoverage / 1000) * 0.8; // $0.80 per $1K for base
  
  // Age adjustments
  if (age > 40) basePremium *= 1.5;
  if (age > 50) basePremium *= 2;
  if (age > 60) basePremium *= 3;

  // Type adjustments
  if (insuranceType === 'Whole Life') basePremium *= 8;
  if (insuranceType === 'Universal Life') basePremium *= 4;

  const monthlyPremium = `$${Math.round(basePremium)}`;

  // Generate explanation
  let explanation = '';
  if (insuranceType === 'Term Life') {
    explanation = `Based on your profile, Term Life Insurance offers the most cost-effective protection for your family. With ${dependents > 0 ? `${dependents} dependent${dependents > 1 ? 's' : ''}` : 'your current situation'}, a ${termLength} term provides coverage during your most financially vulnerable years. The ${formattedCoverage} coverage amount is calculated to replace ${coverageMultiplier}x your annual income, ensuring your family can maintain their lifestyle and meet financial obligations.`;
  } else if (insuranceType === 'Whole Life') {
    explanation = `Given your higher income and risk tolerance, Whole Life Insurance provides both protection and wealth building opportunities. This permanent coverage includes a cash value component that grows over time, offering financial flexibility and potential tax advantages. While premiums are higher, the investment component aligns with your risk profile and long-term financial goals.`;
  } else {
    explanation = `Universal Life Insurance offers a balance between protection and flexibility. With adjustable premiums and death benefits, this policy can adapt to your changing financial circumstances. The cash value component provides growth potential while maintaining the security your family needs.`;
  }

  // Generate benefits and considerations
  const benefits = [];
  const considerations = [];

  if (insuranceType === 'Term Life') {
    benefits.push(
      'Most affordable premium for maximum coverage',
      'Simple and straightforward coverage',
      'Ideal for temporary financial obligations',
      'Can often be converted to permanent insurance later'
    );
    considerations.push(
      'Coverage expires at the end of the term',
      'Premiums will increase significantly if renewed',
      'No cash value or investment component',
      'May become unaffordable or unavailable with age'
    );
  } else if (insuranceType === 'Whole Life') {
    benefits.push(
      'Permanent coverage that never expires',
      'Builds cash value that you can borrow against',
      'Fixed premiums that never increase',
      'Potential dividends from mutual insurance companies'
    );
    considerations.push(
      'Much higher premiums than term insurance',
      'Lower returns compared to other investment options',
      'Complex policy structure and features',
      'Early surrender may result in losses'
    );
  } else {
    benefits.push(
      'Flexible premiums and death benefits',
      'Cash value growth potential',
      'Permanent coverage with investment options',
      'Transparency in fees and charges'
    );
    considerations.push(
      'More expensive than term insurance',
      'Investment risk affects cash value',
      'Requires active management and monitoring',
      'Fees can be complex and reduce returns'
    );
  }

  return {
    type: insuranceType,
    coverage: formattedCoverage,
    term: termLength,
    monthlyPremium,
    explanation,
    benefits,
    considerations,
    confidence
  };
};
