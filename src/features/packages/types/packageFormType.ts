import { Option } from "@/types/core";

export interface PackageFormType {
  name: string;
  description: string;
  price: number;
  classType: Option | null;
  availableMonths: number;
  classesPerPackage: number;
}
