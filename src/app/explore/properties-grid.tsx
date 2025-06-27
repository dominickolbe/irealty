"use client";

import { BathIcon, BedIcon } from "@/components/icons";

import { FilterState } from "@/components/property-filters";
import Link from "next/link";
import { PaginationControls } from "@/components/pagination-controls";
import PropertiesData from "@/data/propertyData.json";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";
import { usePagination } from "@/hooks/use-pagination";
import { usePropertyFilters } from "@/hooks/use-property-filters";

interface PropertiesGridProps {
  filters: FilterState;
}

export default function PropertiesGrid({ filters }: PropertiesGridProps) {
  // Apply filters to the data
  const filteredData = usePropertyFilters(PropertiesData, filters);

  const {
    currentData: properties,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    startIndex,
    endIndex,
    goToPage,
    setItemsPerPage,
  } = usePagination({
    data: filteredData,
    itemsPerPage: 12, // 3 rows of 4 items each
  });

  return (
    <div className="space-y-6">
      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-200 hover:shadow-md hover:border-border/60"
          >
            <Link href="#" className="block" prefetch={false}>
              <img
                src="/placeholder.svg"
                alt="Property Image"
                width={400}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-200 hover:scale-105"
              />
            </Link>
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold line-clamp-1">
                  <Link
                    href="#"
                    className="hover:text-primary transition-colors"
                    prefetch={false}
                  >
                    123 Main St, Anytown USA
                  </Link>
                </h3>
                <div className="text-primary font-bold text-lg">
                  {formatCurrency(property.price)}
                </div>
              </div>
              <div className="flex items-center text-muted-foreground text-sm gap-3">
                <div className="flex items-center gap-1">
                  <BedIcon className="w-4 h-4" />
                  <span>{property.rooms}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center gap-1">
                  <BathIcon className="w-4 h-4" />
                  <span>{property.bathrooms}</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <span>{property.size}m²</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        startIndex={startIndex}
        endIndex={endIndex}
        onPageChange={goToPage}
        itemsPerPage={itemsPerPage}
        onPageSizeChange={setItemsPerPage}
        showPageSizeSelector={true}
      />
    </div>
  );
}
