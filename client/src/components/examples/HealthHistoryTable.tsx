import HealthHistoryTable from '../HealthHistoryTable';

export default function HealthHistoryTableExample() {
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

  return <HealthHistoryTable records={mockRecords} />;
}
