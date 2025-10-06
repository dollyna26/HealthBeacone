import StatsCard from '../StatsCard';
import { Activity } from 'lucide-react';

export default function StatsCardExample() {
  return <StatsCard title="Total Assessments" value="12" icon={Activity} description="Last 30 days" />;
}
