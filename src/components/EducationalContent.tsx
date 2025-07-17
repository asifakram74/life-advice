
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Shield, TrendingUp, Clock, DollarSign, Users, Heart, BookOpen } from 'lucide-react';

const EducationalContent: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
          <BookOpen className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900">Understanding Life Insurance</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Learn about the different types of life insurance and how they can protect your family's financial future
        </p>
      </div>

      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basics">Basics</TabsTrigger>
          <TabsTrigger value="types">Types</TabsTrigger>
          <TabsTrigger value="calculation">Coverage</TabsTrigger>
          <TabsTrigger value="factors">Factors</TabsTrigger>
        </TabsList>

        <TabsContent value="basics" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  What is Life Insurance?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Life insurance is a contract between you and an insurance company. You pay premiums, 
                  and in exchange, the company pays a death benefit to your beneficiaries when you pass away.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm">Financial protection for your family</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-sm">Replace lost income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">Cover expenses and debts</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Why Do You Need It?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Life insurance ensures your loved ones can maintain their standard of living 
                  and meet financial obligations even after you're gone.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Replace your income for your family</li>
                  <li>• Pay off mortgage and other debts</li>
                  <li>• Fund children's education</li>
                  <li>• Cover final expenses and taxes</li>
                  <li>• Provide financial peace of mind</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="types" className="space-y-6">
          <div className="grid gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Term Life Insurance
                  </CardTitle>
                  <Badge variant="secondary">Most Popular</Badge>
                </div>
                <CardDescription>Temporary coverage for a specific period</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Lowest cost for maximum coverage</li>
                      <li>• Simple and easy to understand</li>
                      <li>• Ideal for temporary needs</li>
                      <li>• Often convertible to permanent</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Coverage expires</li>
                      <li>• No cash value</li>
                      <li>• Renewal can be expensive</li>
                      <li>• May become unaffordable with age</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                  <strong>Best for:</strong> Young families with mortgages, temporary income replacement needs, 
                  or those on a tight budget who need maximum coverage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Whole Life Insurance
                </CardTitle>
                <CardDescription>Permanent coverage with cash value component</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Permanent coverage</li>
                      <li>• Builds cash value</li>
                      <li>• Fixed premiums</li>
                      <li>• Potential dividends</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Much higher premiums</li>
                      <li>• Complex structure</li>
                      <li>• Lower investment returns</li>
                      <li>• Early surrender penalties</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                  <strong>Best for:</strong> High earners seeking permanent coverage, estate planning needs, 
                  or those who want forced savings with life insurance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-600" />
                  Universal Life Insurance
                </CardTitle>
                <CardDescription>Flexible permanent coverage with investment options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• Flexible premiums</li>
                      <li>• Adjustable death benefit</li>
                      <li>• Transparent fees</li>
                      <li>• Cash value growth potential</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• More expensive than term</li>
                      <li>• Investment risk</li>
                      <li>• Requires monitoring</li>
                      <li>• Complex fee structure</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                  <strong>Best for:</strong> Those seeking flexibility in premiums and death benefits, 
                  with moderate investment risk tolerance.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="calculation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>How Much Coverage Do You Need?</CardTitle>
              <CardDescription>Common methods to calculate your life insurance needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Income Replacement Method</h4>
                  <p className="text-sm text-gray-600">
                    Multiply your annual income by 7-10 times, adjusting for your family's needs and existing savings.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium">Example:</p>
                    <p className="text-sm text-gray-700">
                      $75,000 income × 8 = $600,000 coverage
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Needs-Based Analysis</h4>
                  <p className="text-sm text-gray-600">
                    Calculate specific financial obligations and subtract existing assets.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Mortgage balance:</span>
                      <span>$250,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Education costs:</span>
                      <span>$100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Income replacement:</span>
                      <span>$400,000</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 font-medium">
                      <span>Total need:</span>
                      <span>$750,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                <h4 className="font-semibold text-amber-800 mb-2">Factors to Consider</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Number and age of dependents</li>
                  <li>• Spouse's income and earning potential</li>
                  <li>• Existing savings and investments</li>
                  <li>• Outstanding debts and mortgages</li>
                  <li>• Future education costs</li>
                  <li>• Final expenses and taxes</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="factors" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">Factors That Lower Premiums</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Younger age when applying</li>
                  <li>• Good health and medical history</li>
                  <li>• Non-smoker status</li>
                  <li>• Healthy lifestyle choices</li>
                  <li>• Lower-risk occupation</li>
                  <li>• Female gender (typically)</li>
                  <li>• Term life vs. permanent coverage</li>
                  <li>• Good driving record</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Factors That Raise Premiums</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Older age at application</li>
                  <li>• Health conditions or family history</li>
                  <li>• Smoking or tobacco use</li>
                  <li>• Dangerous hobbies (skydiving, racing)</li>
                  <li>• High-risk occupations</li>
                  <li>• Higher coverage amounts</li>
                  <li>• Permanent vs. term coverage</li>
                  <li>• Poor driving or criminal record</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Tips for Getting the Best Rates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Before Applying</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Apply while young and healthy</li>
                    <li>• Quit smoking (12+ months before)</li>
                    <li>• Maintain good health</li>
                    <li>• Shop around with multiple insurers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">During the Process</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Be honest on your application</li>
                    <li>• Schedule medical exam when healthy</li>
                    <li>• Avoid caffeine before exam</li>
                    <li>• Work with an experienced agent</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EducationalContent;
