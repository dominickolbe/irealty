"use client";

import {
  BathIcon,
  BedIcon,
  BuildingIcon,
  CalendarIcon,
  EuroIcon,
  EyeIcon,
  MapPinIcon,
  PhoneIcon,
  SquareMeterIcon,
  StarIcon,
  TerrainIcon,
  VillaIcon,
} from "@/components/icons";
import { Card, CardContent } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { FilterState } from "@/components/property-filters";
import Image from "next/image";
import Link from "next/link";
import { PaginationControls } from "@/components/pagination-controls";
import { formatCurrency } from "@/utils/format";
import { usePagination } from "@/hooks/use-pagination";
import { usePropertyFilters } from "@/hooks/use-property-filters";

interface Property {
  id: string;
  rooms: number;
  price: number;
  bathrooms: number;
  size: number;
  description: string;
  title: string;
  created_at: string;
  updated_at: string;
  latitude: string;
  longitude: string;
  imported_id: string;
}

interface PropertiesListProps {
  filters: FilterState;
  data: Property[];
}

export default function PropertiesList({ filters, data }: PropertiesListProps) {
  // Apply filters to the data
  const filteredData = usePropertyFilters(data, filters);

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
            <CardContent className="p-4">
              <div className="flex gap-4">
                {/* Property Image */}
                <div className="flex-shrink-0">
                  <Link href="#" className="block" prefetch={false}>
                    <Image
                      src="/placeholder.svg"
                      alt="Property Image"
                      width={200}
                      height={150}
                      className="w-40 h-28 object-cover rounded-lg transition-transform duration-200 hover:scale-105"
                    />
                  </Link>
                </div>

                {/* Property Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold truncate mb-1">
                            <Link
                              href="#"
                              className="hover:text-primary transition-colors"
                              prefetch={false}
                            >
                              {property.title ||
                                `${property.rooms} hab. ${
                                  property.size
                                }m² - ${formatCurrency(property.price)}`}
                            </Link>
                          </h3>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center text-muted-foreground text-sm">
                                <MapPinIcon className="w-4 h-4 mr-1" />
                                <span>
                                  {property.title.includes("en ")
                                    ? property.title
                                        .split("en ")[1]
                                        .split(" -")[0]
                                    : `Location: ${property.latitude}, ${property.longitude}`}
                                </span>
                              </div>
                              {/* Property Stats */}
                              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                                <div className="flex items-center gap-1 bg-muted/30 px-2 py-1 rounded text-xs">
                                  <BedIcon className="w-3 h-3 text-primary" />
                                  <span className="font-medium">
                                    {property.rooms}
                                  </span>
                                  <span>hab</span>
                                </div>
                                <div className="flex items-center gap-1 bg-muted/30 px-2 py-1 rounded text-xs">
                                  <BathIcon className="w-3 h-3 text-primary" />
                                  <span className="font-medium">
                                    {property.bathrooms}
                                  </span>
                                  <span>baños</span>
                                </div>
                                <div className="flex items-center gap-1 bg-muted/30 px-2 py-1 rounded text-xs">
                                  <SquareMeterIcon className="w-3 h-3 text-primary" />
                                  <span className="font-medium">
                                    {property.size}
                                  </span>
                                  <span>m²</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Property Description */}
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                            {property.description.length > 120
                              ? `${property.description.substring(0, 120)}...`
                              : property.description}
                          </p>

                          {/* Property Tags */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {/* Property Type Badge */}
                            <Badge
                              variant="secondary"
                              className="text-xs flex items-center gap-1"
                            >
                              {property.rooms === 0 ? (
                                <TerrainIcon className="w-3 h-3" />
                              ) : property.rooms >= 4 ? (
                                <VillaIcon className="w-3 h-3" />
                              ) : (
                                <BuildingIcon className="w-3 h-3" />
                              )}
                              {property.rooms === 0
                                ? "Terreno"
                                : property.rooms >= 4
                                ? "Villa"
                                : property.rooms >= 2
                                ? "Piso"
                                : "Estudio"}
                            </Badge>
                            {property.size > 200 && (
                              <Badge
                                variant="outline"
                                className="text-xs flex items-center gap-1"
                              >
                                <StarIcon className="w-3 h-3" />
                                Espacioso
                              </Badge>
                            )}
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
                            {property.bathrooms >= 3 && (
                              <Badge variant="outline" className="text-xs">
                                Luxury Bathrooms
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className="text-primary font-bold text-2xl ml-4">
                          {formatCurrency(property.price)}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons - Higher Up */}
                    <div className="flex justify-end gap-2 mt-4">
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-primary border border-primary/20 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                        prefetch={false}
                      >
                        <EyeIcon className="w-4 h-4 mr-2" />
                        Ver Detalles
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-muted-foreground border border-border rounded-md hover:bg-muted transition-colors"
                        prefetch={false}
                      >
                        <PhoneIcon className="w-4 h-4 mr-2" />
                        Contactar
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
