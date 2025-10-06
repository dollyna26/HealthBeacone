import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, AlertTriangle, Info } from "lucide-react";

interface AssessmentResultProps {
  symptoms: string;
  assessment: string;
  severity: "low" | "moderate" | "severe";
}

const severityConfig = {
  low: {
    icon: CheckCircle,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    label: "Low Risk",
    variant: "default" as const,
  },
  moderate: {
    icon: AlertTriangle,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    label: "Moderate Risk",
    variant: "default" as const,
  },
  severe: {
    icon: AlertCircle,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    label: "High Risk",
    variant: "destructive" as const,
  },
};

export default function AssessmentResult({ symptoms, assessment, severity }: AssessmentResultProps) {
  const config = severityConfig[severity];
  const Icon = config.icon;

  return (
    <Card className="border-2">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <CardTitle>AI Health Assessment</CardTitle>
            <CardDescription className="mt-1">Based on your reported symptoms</CardDescription>
          </div>
          <Badge variant={config.variant} className={`${config.color} ${config.bgColor} border-0`} data-testid="badge-severity">
            <Icon className="mr-1 h-3 w-3" />
            {config.label}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Your Symptoms:</h4>
          <p className="text-sm text-muted-foreground" data-testid="text-symptoms">{symptoms}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">AI Analysis:</h4>
          <div className="text-sm space-y-2" data-testid="text-assessment">
            {assessment.split('\n').map((line, i) => (
              <p key={i} className={line.trim() ? "" : "hidden"}>{line}</p>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <p>
              This assessment is for informational purposes only and does not replace professional medical advice. 
              Please consult a healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
