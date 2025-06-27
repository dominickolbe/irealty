import { useMemo } from "react";

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

export function usePropertySearch(data: Property[], searchQuery: string) {
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) {
      return data;
    }

    const query = searchQuery.toLowerCase().trim();

    return data.filter((property) => {
      // Search in title
      if (property.title.toLowerCase().includes(query)) {
        return true;
      }

      // Search in description
      if (property.description.toLowerCase().includes(query)) {
        return true;
      }

      // Search for location in title (extract city/location)
      const locationMatch = property.title.match(/en\s+([^-]+)/i);
      if (locationMatch && locationMatch[1].toLowerCase().includes(query)) {
        return true;
      }

      // Search for common Spanish cities and locations
      const spanishCities = [
        "madrid",
        "barcelona",
        "valencia",
        "sevilla",
        "málaga",
        "bilbao",
        "zaragoza",
        "marbella",
        "estepona",
        "benahavís",
        "torremolinos",
        "fuengirola",
        "mijas",
        "alhaurín",
        "torre del mar",
        "nerja",
        "torrox",
        "costa del sol",
        "costa brava",
        "chamberí",
        "valdemoro",
        "vallecas",
        "ciudad lineal",
        "salamanca",
        "córdoba",
        "granada",
        "cádiz",
        "almería",
        "jaén",
        "huelva",
        "tocina",
        "torreblanca",
        "bellavista",
        "mairena",
        "cazalla de la sierra",
        "huercal-overa",
        "elviria",
        "lorcrimar",
        "nueva andalucia",
        "lomas del marqués",
        "almagro",
        "villavieja de lozoya",
        "parque de las acacias",
        "puente de vallecas",
      ];

      if (spanishCities.some((city) => city.includes(query))) {
        return true;
      }

      return false;
    });
  }, [data, searchQuery]);

  return filteredData;
}
