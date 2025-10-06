import { useState } from "react";
import { useLocation } from "wouter";
import LoginCard from "@/components/LoginCard";

export default function LoginPage() {
  const [, setLocation] = useLocation();

  const handleLogin = (username: string, password: string) => {
    console.log("Login:", { username, password });
    localStorage.setItem("username", username);
    setLocation("/dashboard");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-gradient-to-br from-background via-background to-primary/5">
      <LoginCard onLogin={handleLogin} />
    </div>
  );
}
