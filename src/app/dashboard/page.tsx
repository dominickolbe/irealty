import { Dashboard } from "@/components/Dashboard";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardPage() {
  return (
    <>
      <TooltipProvider>
        <Dashboard />
      </TooltipProvider>
    </>
  );
}
