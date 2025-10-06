import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface HealthRecord {
  id: string;
  date: Date;
  symptoms: string;
  severity: "low" | "moderate" | "severe";
  assessment: string;
}

interface HealthHistoryTableProps {
  records?: HealthRecord[];
}

const severityConfig = {
  low: {
    icon: CheckCircle,
    color: "text-chart-2 bg-chart-2/10",
    label: "Low",
  },
  moderate: {
    icon: AlertTriangle,
    color: "text-chart-3 bg-chart-3/10",
    label: "Moderate",
  },
  severe: {
    icon: AlertCircle,
    color: "text-chart-4 bg-chart-4/10",
    label: "High",
  },
};

export default function HealthHistoryTable({ records = [] }: HealthHistoryTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health History</CardTitle>
        <CardDescription>Your previous health assessments and symptom checks</CardDescription>
      </CardHeader>
      <CardContent>
        {records.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No health assessments yet</p>
            <p className="text-sm mt-1">Start by analyzing your symptoms above</p>
          </div>
        ) : (
          <div className="space-y-3">
            {records.map((record) => {
              const config = severityConfig[record.severity];
              const Icon = config.icon;
              
              return (
                <div
                  key={record.id}
                  data-testid={`record-${record.id}`}
                  className="p-4 rounded-lg border hover-elevate active-elevate-2"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate" data-testid={`text-symptoms-${record.id}`}>
                        {record.symptoms}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {formatDistanceToNow(record.date, { addSuffix: true })}
                      </p>
                    </div>
                    <Badge className={`${config.color} border-0 flex-shrink-0`}>
                      <Icon className="mr-1 h-3 w-3" />
                      {config.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {record.assessment}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
