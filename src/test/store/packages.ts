import { PackageModel } from "@/features/packages/types/packageModel";
import { classTypes } from "@/utils";

export const dummyPackages: PackageModel[] = [
  {
    id: 1,
    name: "Starter Package",
    description:
      "Perfect for beginners looking to get into fitness with limited sessions.",
    price: 49,
    classType: classTypes[0],
    availableMonths: undefined,
    classesPerPackage: 8,
  },
  {
    id: 2,
    name: "Monthly Unlimited",
    description:
      "Unlimited access to classes for a full month. Best value for regular attendees.",
    price: 99,
    classType: classTypes[0],
    availableMonths: 1,
    classesPerPackage: undefined,
  },
  {
    id: 3,
    name: "Quarterly Commitment",
    description: "Lock in savings with our 3-month unlimited access package.",
    price: 25,
    classType: classTypes[1],
    availableMonths: 3,
    classesPerPackage: undefined,
  },
  {
    id: 4,
    name: "Premium 20",
    description:
      "20 classes to use at your own pace. Perfect for busy schedules.",
    price: 89,
    classType: classTypes[1],
    availableMonths: undefined,
    classesPerPackage: 20,
  },
  {
    id: 5,
    name: "Annual Elite",
    description:
      "Our best value package with 12 months of unlimited access plus premium perks.",
    price: 250,
    classType: classTypes[0],
    availableMonths: 12,
    classesPerPackage: undefined,
  },
  {
    id: 6,
    name: "Summer Special",
    description:
      "Limited time summer package with 30 classes to be used within 3 months.",
    price: 90,
    classType: classTypes[1],
    availableMonths: undefined,
    classesPerPackage: 30,
  },
  {
    id: 7,
    name: "5-Class Trial",
    description: "Try our classes with this affordable introductory package.",
    price: 39,
    classType: classTypes[0],
    availableMonths: undefined,
    classesPerPackage: 5,
  },
  {
    id: 8,
    name: "Weekend Warrior",
    description: "10 weekend-only classes. Perfect for busy professionals.",
    price: 80,
    classType: classTypes[1],
    availableMonths: undefined,
    classesPerPackage: 10,
  },
];
