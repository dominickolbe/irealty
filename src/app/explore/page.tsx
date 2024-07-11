import { Dashboard } from "@/components/Dashboard";
import { TooltipProvider } from "@/components/ui/tooltip";
import ThemeChanger from "@/components/ThemeChanger";

export default function DashboardPage() {
  return (
    <>
      <Dashboard />
      <ThemeChanger />
    </>
  );
}
