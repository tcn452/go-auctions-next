// Enum for Vehicle Categories
export enum VehicleCategory {
    LightCommercial = "Light Commercial Vehicle",
    LightPassenger = "Light Passenger Vehicle",
    Motorcycle = "Motorcycle",
    HailDamage = "Hail Damage",
    HeavyCommercial300k = "Heavy Commercial > 4 tons > 300k",
    HeavyCommercial750k = "Heavy Commercial > 4 tons > 750k",
    ImportedVehicle = "Imported Vehicle",
  }
  
  // Function to Map Keys to Human-Readable Labels
  export const formatVehicleCategory = (key: string): string => {
    const categoryMap: { [key: string]: VehicleCategory } = {
      light_commercial: VehicleCategory.LightCommercial,
      light_passenger: VehicleCategory.LightPassenger,
      motorcycle: VehicleCategory.Motorcycle,
      hail: VehicleCategory.HailDamage,
      "300k": VehicleCategory.HeavyCommercial300k,
      "750k": VehicleCategory.HeavyCommercial750k,
      imported: VehicleCategory.ImportedVehicle,
    };
  
    return categoryMap[key] || key; // Return the formatted value or the key if not found
  };
  
