"use client";

import {
  BathIcon,
  BedIcon,
  BuildingIcon,
  EuroIcon,
  HeartIcon,
  MapPinIcon,
  SquareMeterIcon,
  StarIcon,
  TerrainIcon,
  VillaIcon,
} from "@/components/icons";

import { Badge } from "@/components/ui/badge";
import { FilterState } from "@/components/property-filters";
import Image from "next/image";
import Link from "next/link";
import { PaginationControls } from "@/components/pagination-controls";
import { Separator } from "@/components/ui/separator";
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

interface PropertiesGridProps {
  filters: FilterState;
  data: Property[];
}

export default function PropertiesGrid({ filters, data }: PropertiesGridProps) {
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
    itemsPerPage: 12, // 3 rows of 4 items each
  });

  // Helper function to get property type icon
  const getPropertyTypeIcon = (rooms: number) => {
    if (rooms === 0) return <TerrainIcon className="w-4 h-4" />;
    if (rooms >= 4) return <VillaIcon className="w-4 h-4" />;
    if (rooms >= 2) return <BuildingIcon className="w-4 h-4" />;
    return <BuildingIcon className="w-4 h-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-card rounded-lg overflow-hidden shadow-sm border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 group"
          >
            <Link href="#" className="block relative" prefetch={false}>
              <Image
                src="/placeholder.svg"
                alt="Property Image"
                width={400}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Price overlay on image */}
              <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
                <EuroIcon className="w-3 h-3" />
                {formatCurrency(property.price)}
              </div>

              {/* Favorite button */}
              <button className="absolute top-3 left-3 bg-white/90 hover:bg-white text-gray-700 hover:text-red-500 p-2 rounded-full transition-colors">
                <HeartIcon className="w-4 h-4" />
              </button>
            </Link>
            <div className="p-4">
              <div className="space-y-3">
                {/* Title and Property Type */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold leading-tight">
                    <Link
                      href="#"
                      className="hover:text-primary transition-colors line-clamp-2"
                      prefetch={false}
                    >
                      {property.title ||
                        `${property.rooms} hab. ${
                          property.size
                        }m² - ${formatCurrency(property.price)}`}
                    </Link>
                  </h3>

                  {/* Property Type Badge with Icon */}
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="text-xs flex items-center gap-1"
                    >
                      {getPropertyTypeIcon(property.rooms)}
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
                  </div>
                </div>

                {/* Property Stats with Better Icons */}
                <div className="grid grid-cols-3 gap-2 text-muted-foreground text-sm pt-2 border-t border-border/50">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-md bg-muted/30">
                    <div className="flex items-center gap-1">
                      <BedIcon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">
                        {property.rooms}
                      </span>
                    </div>
                    <span className="text-xs text-center">Habitaciones</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-md bg-muted/30">
                    <div className="flex items-center gap-1">
                      <BathIcon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">
                        {property.bathrooms}
                      </span>
                    </div>
                    <span className="text-xs text-center">Baños</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-md bg-muted/30">
                    <div className="flex items-center gap-1">
                      <SquareMeterIcon className="w-4 h-4 text-primary" />
                      <span className="font-semibold text-sm">
                        {property.size}
                      </span>
                      <span className="text-xs">m²</span>
                    </div>
                    <span className="text-xs text-center">Superficie</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href="#"
                    className="w-full inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-primary border border-primary/20 rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                    prefetch={false}
                  >
                    Ver Detalles
                  </Link>
                </div>
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
