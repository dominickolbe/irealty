"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, X } from "lucide-react";
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PropertyFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  filters: FilterState;
}

export interface FilterState {
  rooms: number[];
  priceRange: {
    min: number | null;
    max: number | null;
  };
}

const ROOM_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8];
const PRICE_RANGES = [
  { label: "Under €100k", min: 0, max: 100000 },
  { label: "€100k - €200k", min: 100000, max: 200000 },
  { label: "€200k - €300k", min: 200000, max: 300000 },
  { label: "€300k - €500k", min: 300000, max: 500000 },
  { label: "€500k - €750k", min: 500000, max: 750000 },
  { label: "€750k - €1M", min: 750000, max: 1000000 },
  { label: "Over €1M", min: 1000000, max: null },
];

export function PropertyFilters({
  onFiltersChange,
  filters,
}: PropertyFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRoom = (room: number) => {
    const newRooms = filters.rooms.includes(room)
      ? filters.rooms.filter((r) => r !== room)
      : [...filters.rooms, room].sort();

    onFiltersChange({
      ...filters,
      rooms: newRooms,
    });
  };

  const setPriceRange = (min: number | null, max: number | null) => {
    onFiltersChange({
      ...filters,
      priceRange: { min, max },
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      rooms: [],
      priceRange: { min: null, max: null },
    });
  };

  const hasActiveFilters =
    filters.rooms.length > 0 ||
    filters.priceRange.min !== null ||
    filters.priceRange.max !== null;

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.rooms.length > 0) count += 1;
    if (filters.priceRange.min !== null || filters.priceRange.max !== null)
      count += 1;
    return count;
  };

  const formatPriceRange = () => {
    if (filters.priceRange.min === null && filters.priceRange.max === null)
      return null;

    if (filters.priceRange.min !== null && filters.priceRange.max !== null) {
      return `€${(filters.priceRange.min / 1000).toFixed(0)}k - €${(
        filters.priceRange.max / 1000
      ).toFixed(0)}k`;
    } else if (filters.priceRange.min !== null) {
      return `€${(filters.priceRange.min / 1000).toFixed(0)}k+`;
    } else if (filters.priceRange.max !== null) {
      return `Up to €${(filters.priceRange.max / 1000).toFixed(0)}k`;
    }
    return null;
  };

  return (
    <div className="flex items-center gap-2">
      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 mr-2">
          {filters.rooms.length > 0 && (
            <Badge variant="secondary" className="text-xs">
              {filters.rooms.length} room{filters.rooms.length > 1 ? "s" : ""}
            </Badge>
          )}
          {formatPriceRange() && (
            <Badge variant="secondary" className="text-xs">
              {formatPriceRange()}
            </Badge>
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="h-6 w-6 p-0 hover:bg-destructive hover:text-destructive-foreground"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}

      {/* Filter Dropdown */}
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className={`h-8 gap-2 ${
              hasActiveFilters ? "border-primary text-primary" : ""
            }`}
          >
            <Filter className="h-3 w-3" />
            Filters
            {getActiveFiltersCount() > 0 && (
              <Badge variant="secondary" className="ml-1 h-4 w-4 p-0 text-xs">
                {getActiveFiltersCount()}
              </Badge>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-80 p-4">
          <div className="space-y-4">
            {/* Rooms Filter */}
            <div>
              <h4 className="font-medium text-sm mb-3">Number of Rooms</h4>
              <div className="flex flex-wrap gap-2">
                {ROOM_OPTIONS.map((room) => (
                  <Button
                    key={room}
                    variant={
                      filters.rooms.includes(room) ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => toggleRoom(room)}
                    className="h-8 px-3 text-xs"
                  >
                    {room}+
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Price Range Filter */}
            <div>
              <h4 className="font-medium text-sm mb-3">Price Range</h4>
              <div className="space-y-2">
                {PRICE_RANGES.map((range) => (
                  <Button
                    key={range.label}
                    variant={
                      filters.priceRange.min === range.min &&
                      filters.priceRange.max === range.max
                        ? "default"
                        : "outline"
                    }
                    size="sm"
                    onClick={() => setPriceRange(range.min, range.max)}
                    className="w-full justify-start h-8 text-xs"
                  >
                    {range.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Clear All Button */}
            {hasActiveFilters && (
              <>
                <Separator />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="w-full text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  Clear all filters
                </Button>
              </>
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
