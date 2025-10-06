import LoginCard from '../LoginCard';

export default function LoginCardExample() {
  return <LoginCard onLogin={(username, password) => console.log('Login:', username, password)} />;
}
