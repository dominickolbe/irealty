"use client";

import { File, PlusCircle } from "lucide-react";
import { FilterState, PropertyFilters } from "@/components/property-filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dashboard } from "@/components/Dashboard";
import PropertiesData from "@/data/propertyData.json";
import PropertiesGrid from "./properties-grid";
import PropertiesList from "./properties-list";
import ThemeChanger from "@/components/ThemeChanger";
import { TooltipProvider } from "@/components/ui/tooltip";
import { usePropertySearch } from "@/hooks/use-property-search";
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  const [filters, setFilters] = useState<FilterState>({
    rooms: [],
    priceRange: { min: null, max: null },
  });

  // Apply search to the data
  const searchedData = usePropertySearch(PropertiesData, searchQuery);

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

            {/* Search Results Info */}
            {searchQuery && (
              <div className="text-sm text-muted-foreground">
                {searchedData.length} propiedades encontradas para "
                {searchQuery}"
              </div>
            )}

            {/* Filters */}
            <div className="flex items-center gap-2">
              <PropertyFilters filters={filters} onFiltersChange={setFilters} />
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
          </div>

          <TabsContent value="grid" className="mt-0">
            <div className="space-y-6">
              <PropertiesGrid filters={filters} data={searchedData} />
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="space-y-6">
              <PropertiesList filters={filters} data={searchedData} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
