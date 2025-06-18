import { Option } from "@/types/core/option";

export interface PackageModel {
  id: number;
  name: string;
  description: string;
  price: number;
  classType: Option;
  availableMonths: number | undefined;
  classesPerPackage: number | undefined;
}
