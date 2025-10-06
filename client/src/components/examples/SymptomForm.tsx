import SymptomForm from '../SymptomForm';

export default function SymptomFormExample() {
  return <SymptomForm onAnalyze={(symptoms) => console.log('Analyzing:', symptoms)} isLoading={false} />;
}
