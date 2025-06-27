"use client";

import {
  BathIcon,
  BedIcon,
  CalendarIcon,
  EyeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { FilterState } from "@/components/property-filters";
import Link from "next/link";
import { PaginationControls } from "@/components/pagination-controls";
import PropertiesData from "@/data/propertyData.json";
import { Separator } from "@/components/ui/separator";
import { formatCurrency } from "@/utils/format";
import { usePagination } from "@/hooks/use-pagination";
import { usePropertyFilters } from "@/hooks/use-property-filters";

interface PropertiesListProps {
  filters: FilterState;
}

export default function PropertiesList({ filters }: PropertiesListProps) {
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
    itemsPerPage: 8, // Show 8 properties per page in list view
  });

  return (
    <div className="space-y-6">
      {/* Properties List */}
      <div className="space-y-4">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="hover:shadow-md transition-all duration-200 border-border/60"
          >
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Property Image */}
                <div className="flex-shrink-0">
                  <Link href="#" className="block" prefetch={false}>
                    <img
                      src="/placeholder.svg"
                      alt="Property Image"
                      width={200}
                      height={150}
                      className="w-48 h-32 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Property Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-semibold truncate mb-2">
                            <Link
                              href="#"
                              className="hover:text-primary transition-colors"
                              prefetch={false}
                            >
                              {property.description
                                .split(" ")
                                .slice(0, 8)
                                .join(" ")}
                              ...
                            </Link>
                          </h3>
                          <div className="flex items-center text-muted-foreground text-sm mb-3">
                            <MapPinIcon className="w-4 h-4 mr-1" />
                            <span>
                              Location: {property.latitude},{" "}
                              {property.longitude}
                            </span>
                          </div>
                        </div>
                        <div className="text-primary font-bold text-xl ml-4">
                          {formatCurrency(property.price)}
                        </div>
                      </div>

                      {/* Property Stats */}
                      <div className="flex items-center gap-6 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <BedIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {property.rooms} Beds
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BathIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            {property.bathrooms} Baths
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-medium">
                            {property.size}m²
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            Listed:{" "}
                            {new Date(property.created_at).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Property Description */}
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {property.description.length > 150
                          ? `${property.description.substring(0, 150)}...`
                          : property.description}
                      </p>

                      {/* Property Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="secondary" className="text-xs">
                          ID: {property.id}
                        </Badge>
                        {property.rooms >= 4 && (
                          <Badge variant="outline" className="text-xs">
                            Large Property
                          </Badge>
                        )}
                        {property.price > 500000 && (
                          <Badge variant="outline" className="text-xs">
                            Premium
                          </Badge>
                        )}
                        {property.size > 200 && (
                          <Badge variant="outline" className="text-xs">
                            Spacious
                          </Badge>
                        )}
                        {property.bathrooms >= 3 && (
                          <Badge variant="outline" className="text-xs">
                            Luxury Bathrooms
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-2 lg:flex-shrink-0">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary border border-primary rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                        prefetch={false}
                      >
                        <EyeIcon className="w-4 h-4 mr-2" />
                        View Details
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground border border-border rounded-md hover:bg-muted transition-colors"
                        prefetch={false}
                      >
                        <PhoneIcon className="w-4 h-4 mr-2" />
                        Contact Agent
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
