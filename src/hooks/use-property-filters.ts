import { FilterState } from "@/components/property-filters";
import { useMemo } from "react";

interface Property {
  id: string;
  rooms: number;
  price: number;
  bathrooms: number;
  size: number;
  description: string;
  created_at: string;
  updated_at: string;
  latitude: string;
  longitude: string;
  imported_id: string;
}

export function usePropertyFilters(data: Property[], filters: FilterState) {
  const filteredData = useMemo(() => {
    return data.filter((property) => {
      // Filter by rooms
      if (filters.rooms.length > 0) {
        const hasMatchingRooms = filters.rooms.some(
          (roomFilter) => property.rooms >= roomFilter
        );
        if (!hasMatchingRooms) return false;
      }

      // Filter by price range
      if (filters.priceRange.min !== null || filters.priceRange.max !== null) {
        const price = property.price;

        if (filters.priceRange.min !== null && price < filters.priceRange.min) {
          return false;
        }

        if (filters.priceRange.max !== null && price > filters.priceRange.max) {
          return false;
        }
      }

      return true;
    });
  }, [data, filters]);

  return filteredData;
}
