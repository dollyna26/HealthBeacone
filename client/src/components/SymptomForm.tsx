import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface SymptomFormProps {
  onAnalyze?: (symptoms: string) => void;
  isLoading?: boolean;
}

export default function SymptomForm({ onAnalyze, isLoading = false }: SymptomFormProps) {
  const [symptoms, setSymptoms] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symptoms.trim()) {
      console.log("Analyzing symptoms:", symptoms);
      onAnalyze?.(symptoms);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Describe Your Symptoms</CardTitle>
        <CardDescription>
          Tell us about any symptoms you're experiencing. Be as detailed as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="symptoms">Symptoms</Label>
            <Textarea
              id="symptoms"
              data-testid="input-symptoms"
              placeholder="Example: I have a headache, mild fever, and feeling tired for the past 2 days..."
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              className="min-h-32"
              required
            />
          </div>
          <Button
            type="submit"
            data-testid="button-analyze"
            className="w-full"
            disabled={isLoading || !symptoms.trim()}
          >
            {isLoading ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Analyze Symptoms
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
