
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import LifeInsuranceForm from '@/components/LifeInsuranceForm';
import RecommendationDisplay from '@/components/RecommendationDisplay';
import EducationalContent from '@/components/EducationalContent';
import { generateRecommendation } from '@/utils/recommendationEngine';
import { Calculator, BookOpen, Shield } from 'lucide-react';

interface FormData {
  age: string;
  income: string;
  dependents: string;
  riskTolerance: string;
}

const Index = () => {
  const [currentTab, setCurrentTab] = useState('calculator');
  const [recommendation, setRecommendation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (formData: FormData) => {
    setIsLoading(true);
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const result = generateRecommendation(formData);
    setRecommendation(result);
    setCurrentTab('results');
    setIsLoading(false);
  };

  const handleStartOver = () => {
    setRecommendation(null);
    setCurrentTab('calculator');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LifeGuard Pro</h1>
                <p className="text-sm text-gray-600">Smart Life Insurance Recommendations</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Shield className="h-4 w-4" />
                <span>Trusted Recommendations</span>
              </div>
              <div className="flex items-center gap-1">
                <Calculator className="h-4 w-4" />
                <span>Smart Calculations</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>Educational Resources</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="calculator" className="flex items-center gap-2">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Calculator</span>
            </TabsTrigger>
            <TabsTrigger value="results" disabled={!recommendation} className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Results</span>
            </TabsTrigger>
            <TabsTrigger value="learn" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Learn</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="mt-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get Your Personalized Life Insurance Recommendation
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Answer a few simple questions about your financial situation, and we'll recommend 
                  the best life insurance option for your unique needs.
                </p>
              </div>
              
              <LifeInsuranceForm onSubmit={handleFormSubmit} isLoading={isLoading} />
              
              {/* Trust Indicators */}
              <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6">
                  <div className="mx-auto mb-3 p-3 bg-primary/10 rounded-full w-fit">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
                  <p className="text-sm text-gray-600">Your information is encrypted and never shared with third parties</p>
                </div>
                <div className="p-6">
                  <div className="mx-auto mb-3 p-3 bg-accent/10 rounded-full w-fit">
                    <Calculator className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Algorithm</h3>
                  <p className="text-sm text-gray-600">Advanced recommendation engine based on industry best practices</p>
                </div>
                <div className="p-6">
                  <div className="mx-auto mb-3 p-3 bg-blue-100 rounded-full w-fit">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Educational</h3>
                  <p className="text-sm text-gray-600">Learn about life insurance while getting your recommendation</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="results" className="mt-8">
            {recommendation && (
              <RecommendationDisplay 
                recommendation={recommendation} 
                onStartOver={handleStartOver}
              />
            )}
          </TabsContent>

          <TabsContent value="learn" className="mt-8">
            <EducationalContent />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6" />
              <span className="text-xl font-bold">LifeGuard Pro</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Professional life insurance recommendations powered by smart technology
            </p>
            <p className="text-xs text-gray-500">
              This tool provides educational recommendations only. Please consult with a licensed insurance professional 
              for personalized advice and actual policy quotes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
