import AssessmentResult from '../AssessmentResult';

export default function AssessmentResultExample() {
  return (
    <AssessmentResult
      symptoms="Headache, mild fever (99.5°F), feeling tired and weak for the past 2 days"
      assessment="Based on your symptoms, you may be experiencing a mild viral infection or common cold. The combination of headache, low-grade fever, and fatigue are typical signs of a viral illness.

Recommendations:
• Get plenty of rest and stay hydrated
• Take over-the-counter pain relievers for headache and fever
• Monitor your temperature regularly
• If symptoms persist beyond 5-7 days or worsen, consult a healthcare provider"
      severity="low"
    />
  );
}
