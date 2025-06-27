import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { PageSizeSelector } from "@/components/page-size-selector";
import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  onPageSizeChange?: (pageSize: number) => void;
  showPageSizeSelector?: boolean;
}

export function PaginationControls({
  currentPage,
  totalPages,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
  itemsPerPage,
  onPageSizeChange,
  showPageSizeSelector = false,
}: PaginationControlsProps) {
  const getVisiblePages = () => {
    const delta = 2; // Number of pages to show on each side of current page
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="border-t border-border bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4">
        {/* Left side - Items count and page size selector */}
        <div className="flex flex-col sm:flex-row items-center gap-4 order-2 sm:order-1">
          <div className="text-sm text-muted-foreground font-medium">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {startIndex + 1}
            </span>{" "}
            to <span className="font-semibold text-foreground">{endIndex}</span>{" "}
            of{" "}
            <span className="font-semibold text-foreground">
              {totalItems.toLocaleString()}
            </span>{" "}
            properties
          </div>
          {showPageSizeSelector && onPageSizeChange && (
            <div className="flex items-center">
              <PageSizeSelector
                currentPageSize={itemsPerPage}
                onPageSizeChange={onPageSizeChange}
              />
            </div>
          )}
        </div>

        {/* Right side - Pagination */}
        <div className="order-1 sm:order-2">
          <Pagination className="mx-auto sm:mx-0">
            <PaginationContent className="gap-1">
              {/* Previous button */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) {
                      onPageChange(currentPage - 1);
                    }
                  }}
                  className={`transition-all duration-200 ${
                    currentPage <= 1
                      ? "pointer-events-none opacity-50 cursor-not-allowed"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                />
              </PaginationItem>

              {/* Page numbers */}
              {visiblePages.map((page, index) => (
                <PaginationItem key={index}>
                  {page === "..." ? (
                    <PaginationEllipsis className="px-3 py-2" />
                  ) : (
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        onPageChange(page as number);
                      }}
                      isActive={currentPage === page}
                      className={`transition-all duration-200 min-w-[2.5rem] ${
                        currentPage === page
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "hover:bg-accent hover:text-accent-foreground"
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              {/* Next button */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) {
                      onPageChange(currentPage + 1);
                    }
                  }}
                  className={`transition-all duration-200 ${
                    currentPage >= totalPages
                      ? "pointer-events-none opacity-50 cursor-not-allowed"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
