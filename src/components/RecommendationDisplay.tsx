
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Shield, TrendingUp, Clock, DollarSign, Users, AlertTriangle } from 'lucide-react';

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

interface RecommendationDisplayProps {
  recommendation: RecommendationData;
  onStartOver: () => void;
}

const RecommendationDisplay: React.FC<RecommendationDisplayProps> = ({ 
  recommendation, 
  onStartOver 
}) => {
  const getConfidenceColor = (confidence: string) => {
    switch (confidence) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRecommendationIcon = (type: string) => {
    if (type.toLowerCase().includes('term')) return Shield;
    if (type.toLowerCase().includes('whole')) return TrendingUp;
    return Shield;
  };

  const RecommendationIcon = getRecommendationIcon(recommendation.type);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 animate-slide-up">
      {/* Main Recommendation Card */}
      <Card className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full"></div>
        
        <CardHeader className="relative pb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <RecommendationIcon className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Your Recommended Plan
                </CardTitle>
                <CardDescription className="text-lg">
                  Based on your profile analysis
                </CardDescription>
              </div>
            </div>
            <Badge className={`${getConfidenceColor(recommendation.confidence)} border-0`}>
              {recommendation.confidence.charAt(0).toUpperCase() + recommendation.confidence.slice(1)} Match
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Recommendation Details */}
          <div className="grid md:grid-cols-3 gap-6 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{recommendation.type}</div>
              <div className="text-sm text-gray-600">Insurance Type</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{recommendation.coverage}</div>
              <div className="text-sm text-gray-600">Coverage Amount</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{recommendation.term}</div>
              <div className="text-sm text-gray-600">Term Length</div>
            </div>
          </div>

          {/* Monthly Premium */}
          <div className="text-center p-4 bg-accent/10 rounded-lg border border-accent/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-accent" />
              <span className="text-lg font-semibold text-gray-700">Estimated Monthly Premium</span>
            </div>
            <div className="text-4xl font-bold text-accent">{recommendation.monthlyPremium}</div>
            <div className="text-sm text-gray-600 mt-1">Based on standard health rating</div>
          </div>

          {/* Explanation */}
          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Why This Recommendation?</h3>
            <p className="text-gray-700 leading-relaxed">{recommendation.explanation}</p>
          </div>
        </CardContent>
      </Card>

      {/* Benefits and Considerations */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Benefits */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <CheckCircle className="h-5 w-5" />
              Key Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendation.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Considerations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Important Considerations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recommendation.considerations.map((consideration, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{consideration}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="px-8">
          Get Detailed Quote
        </Button>
        <Button variant="outline" size="lg" onClick={onStartOver} className="px-8">
          Start Over
        </Button>
      </div>

      {/* Disclaimer */}
      <Card className="bg-gray-50 border-gray-200">
        <CardContent className="pt-6">
          <p className="text-sm text-gray-600 text-center">
            <strong>Important:</strong> This is a simplified recommendation based on basic information. 
            Actual premiums and coverage may vary based on health underwriting, lifestyle factors, 
            and specific insurance company policies. Please consult with a licensed insurance professional 
            for comprehensive advice tailored to your unique situation.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendationDisplay;
