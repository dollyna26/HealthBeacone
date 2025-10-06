import DashboardHeader from '../DashboardHeader';

export default function DashboardHeaderExample() {
  return <DashboardHeader username="Admin" onLogout={() => console.log('Logout clicked')} />;
}
