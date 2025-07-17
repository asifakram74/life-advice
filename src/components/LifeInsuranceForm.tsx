
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Shield, Users, DollarSign, Calendar } from 'lucide-react';

interface FormData {
  age: string;
  income: string;
  dependents: string;
  riskTolerance: string;
}

interface LifeInsuranceFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

const LifeInsuranceForm: React.FC<LifeInsuranceFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<FormData>({
    age: '',
    income: '',
    dependents: '',
    riskTolerance: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.age || parseInt(formData.age) < 18 || parseInt(formData.age) > 100) {
      newErrors.age = 'Please enter a valid age between 18 and 100';
    }

    if (!formData.income || parseInt(formData.income.replace(/,/g, '')) < 0) {
      newErrors.income = 'Please enter a valid annual income';
    }

    if (!formData.dependents || parseInt(formData.dependents) < 0 || parseInt(formData.dependents) > 20) {
      newErrors.dependents = 'Please enter a valid number of dependents (0-20)';
    }

    if (!formData.riskTolerance) {
      newErrors.riskTolerance = 'Please select your risk tolerance';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const API_BASE_URL = 'http://localhost:3001/api';

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateForm()) return;

  try {
    const response = await fetch(`${API_BASE_URL}/recommendation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to get recommendation');
    }

    const result = await response.json(); // Assuming you expect a JSON response
    console.log('API response:', result);

    onSubmit(formData); // Or use result if needed: onSubmit(result)
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};


  const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/\D/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setFormData({ ...formData, income: formatted });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-fade-in">
      <CardHeader className="text-center pb-6">
        <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
          <Shield className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold text-gray-900">
          Life Insurance Recommendation
        </CardTitle>
        <CardDescription className="text-lg text-gray-600">
          Get a personalized life insurance recommendation based on your profile
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Age Input */}
          <div className="space-y-2">
            <Label htmlFor="age" className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className={errors.age ? 'border-destructive' : ''}
              min="18"
              max="100"
            />
            {errors.age && <p className="text-sm text-destructive">{errors.age}</p>}
          </div>

          {/* Income Input */}
          <div className="space-y-2">
            <Label htmlFor="income" className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Annual Income
            </Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <Input
                id="income"
                type="text"
                placeholder="75,000"
                value={formData.income}
                onChange={handleIncomeChange}
                className={`pl-8 ${errors.income ? 'border-destructive' : ''}`}
              />
            </div>
            {errors.income && <p className="text-sm text-destructive">{errors.income}</p>}
          </div>

          {/* Dependents Input */}
          <div className="space-y-2">
            <Label htmlFor="dependents" className="text-sm font-medium flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              Number of Dependents
            </Label>
            <Select
              value={formData.dependents}
              onValueChange={(value) => setFormData({ ...formData, dependents: value })}
            >
              <SelectTrigger className={errors.dependents ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select number of dependents" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 11 }, (_, i) => (
                  <SelectItem key={i} value={i.toString()}>
                    {i === 0 ? 'No dependents' : `${i} dependent${i > 1 ? 's' : ''}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.dependents && <p className="text-sm text-destructive">{errors.dependents}</p>}
          </div>

          {/* Risk Tolerance */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Risk Tolerance</Label>
            <RadioGroup
              value={formData.riskTolerance}
              onValueChange={(value) => setFormData({ ...formData, riskTolerance: value })}
              className="grid grid-cols-1 gap-3"
            >
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low" className="flex-1 cursor-pointer">
                  <div className="font-medium">Low Risk</div>
                  <div className="text-sm text-gray-600">I prefer stable, predictable returns</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium" className="flex-1 cursor-pointer">
                  <div className="font-medium">Medium Risk</div>
                  <div className="text-sm text-gray-600">I'm comfortable with some risk for better returns</div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high" className="flex-1 cursor-pointer">
                  <div className="font-medium">High Risk</div>
                  <div className="text-sm text-gray-600">I'm willing to take risks for potentially higher returns</div>
                </Label>
              </div>
            </RadioGroup>
            {errors.riskTolerance && <p className="text-sm text-destructive">{errors.riskTolerance}</p>}
          </div>

          <Button
            type="submit"
            className="w-full py-6 text-lg font-semibold"
            disabled={isLoading}
          >
            {isLoading ? 'Calculating Recommendation...' : 'Get My Recommendation'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default LifeInsuranceForm;
