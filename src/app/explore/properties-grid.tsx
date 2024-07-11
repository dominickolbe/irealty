import { BathIcon, BedIcon } from "@/components/icons";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import PropertiesData from "@/data/propertyData.json";
import { formatCurrency } from "@/utils/format";

export default function PropertiesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-4">
      {PropertiesData.map((property) => (
        <div className="bg-background rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg">
          <Link href="#" className="block" prefetch={false}>
            <img
              src="/placeholder.svg"
              alt="Property Image"
              width={400}
              height={200}
              className="w-full h-50 object-cover"
            />
          </Link>
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold">
                <Link
                  href="#"
                  className="hover:text-primary transition-colors"
                  prefetch={false}
                >
                  123 Main St, Anytown USA
                </Link>
              </h3>
              <div className="text-primary font-semibold">
                {formatCurrency(property.price)}
              </div>
            </div>
            <div className="flex items-center text-muted-foreground text-sm">
              <BedIcon className="w-4 h-4 mr-1" />
              <span>{property.rooms} Beds</span>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <BathIcon className="w-4 h-4 mr-1" />
              <span>{property.bathrooms} Baths</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
