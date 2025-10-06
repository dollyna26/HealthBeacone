import { useState } from "react";
import { useLocation } from "wouter";
import DashboardHeader from "@/components/DashboardHeader";
import StatsCard from "@/components/StatsCard";
import SymptomForm from "@/components/SymptomForm";
import AssessmentResult from "@/components/AssessmentResult";
import HealthHistoryTable from "@/components/HealthHistoryTable";
import { Activity, Calendar, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const [, setLocation] = useLocation();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [currentAssessment, setCurrentAssessment] = useState<any>(null);
  
  const username = localStorage.getItem("username") || "Admin";

  const handleLogout = () => {
    localStorage.removeItem("username");
    setLocation("/");
  };

  const handleAnalyze = (symptoms: string) => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const mockAssessment = {
        symptoms,
        assessment: `Based on your symptoms, you may be experiencing a mild viral infection or common cold. The combination of headache, low-grade fever, and fatigue are typical signs of a viral illness.

Recommendations:
• Get plenty of rest and stay hydrated
• Take over-the-counter pain relievers for headache and fever
• Monitor your temperature regularly
• If symptoms persist beyond 5-7 days or worsen, consult a healthcare provider`,
        severity: "low" as const,
      };
      setCurrentAssessment(mockAssessment);
      setIsAnalyzing(false);
    }, 2000);
  };

  const mockRecords = [
    {
      id: '1',
      date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      symptoms: 'Headache, mild fever, feeling tired',
      severity: 'low' as const,
      assessment: 'Based on your symptoms, you may be experiencing a mild viral infection.'
    },
    {
      id: '2',
      date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      symptoms: 'Persistent cough, chest tightness',
      severity: 'moderate' as const,
      assessment: 'Your symptoms suggest a respiratory condition that may require medical attention.'
    },
    {
      id: '3',
      date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
      symptoms: 'Minor stomach discomfort',
      severity: 'low' as const,
      assessment: 'Likely related to dietary factors. Monitor and adjust diet as needed.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader username={username} onLogout={handleLogout} />
      
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <StatsCard
            title="Total Assessments"
            value="12"
            icon={Activity}
            description="All time"
          />
          <StatsCard
            title="Last Check"
            value="2 days ago"
            icon={Calendar}
            description="Recent activity"
          />
          <StatsCard
            title="Health Score"
            value="Good"
            icon={TrendingUp}
            description="Based on history"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <SymptomForm onAnalyze={handleAnalyze} isLoading={isAnalyzing} />
            {currentAssessment && (
              <AssessmentResult
                symptoms={currentAssessment.symptoms}
                assessment={currentAssessment.assessment}
                severity={currentAssessment.severity}
              />
            )}
          </div>
          
          <div>
            <HealthHistoryTable records={mockRecords} />
          </div>
        </div>
      </main>
    </div>
  );
}
