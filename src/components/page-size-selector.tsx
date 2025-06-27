import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import React from "react";

interface PageSizeSelectorProps {
  currentPageSize: number;
  onPageSizeChange: (pageSize: number) => void;
  options?: number[];
}

export function PageSizeSelector({
  currentPageSize,
  onPageSizeChange,
  options = [8, 12, 16, 24, 32],
}: PageSizeSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground font-medium">Show:</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-16 px-2 font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <span className="flex-1 text-center">{currentPageSize}</span>
            <ChevronDown className="ml-1 h-3 w-3 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-16">
          {options.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => onPageSizeChange(option)}
              className={`text-center justify-center transition-colors ${
                currentPageSize === option
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <span className="text-sm text-muted-foreground font-medium">
        per page
      </span>
    </div>
  );
}
