import { File, PlusCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { Dashboard } from "@/components/Dashboard";
import PropertiesGrid from "./properties-grid";
import PropertiesList from "./properties-list";
import ThemeChanger from "@/components/ThemeChanger";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Dashboard /> */}
      {/* <ThemeChanger /> */}
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <TabsList className="grid w-full sm:w-auto grid-cols-2">
              <TabsTrigger value="grid" className="text-sm font-medium">
                Grid View
              </TabsTrigger>
              <TabsTrigger value="list" className="text-sm font-medium">
                List View
              </TabsTrigger>
            </TabsList>
            {/* <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Export
                </span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Product
                </span>
              </Button>
            </div> */}
          </div>

          <TabsContent value="grid" className="mt-0">
            <div className="space-y-6">
              <PropertiesGrid />
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="space-y-6">
              <PropertiesList />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
