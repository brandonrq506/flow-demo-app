import { HttpResponse, http } from "msw";
import { PACKAGES_ENDPOINT } from "@/libs/axios";
import { PackageModel } from "@/features/packages/types/packageModel";

import { dummyPackages as initialData } from "../store/packages";

const inMemoryData = initialData;
const ID_UPPER_LIMIT = 1_000_00;
const ID_LOWER_LIMIT = 10;

const API_URL = "http://localhost:3000/api";
const BASE_URL = `${API_URL}/v1${PACKAGES_ENDPOINT}`;

export const packageHandlers = [
  http.get(BASE_URL, () => {
    return HttpResponse.json(inMemoryData, { status: 200 });
  }),

  http.get(`${BASE_URL}/:packageId`, ({ params }) => {
    const { packageId } = params;
    const id = Number(packageId);

    const packageItem = inMemoryData.find((p) => p.id === id);

    if (!packageItem)
      return HttpResponse.json({ error: "Record not found" }, { status: 404 });

    return HttpResponse.json(packageItem, { status: 200 });
  }),

  http.post(BASE_URL, async ({ request }) => {
    const newPackageData = (await request.json()) as PackageModel;

    const newPackage: PackageModel = {
      ...newPackageData,
      id:
        Math.floor(Math.random() * (ID_UPPER_LIMIT - ID_LOWER_LIMIT + 1)) +
        ID_LOWER_LIMIT,
    };

    inMemoryData.push(newPackage);

    return HttpResponse.json(newPackage, { status: 201 });
  }),

  http.patch(`${BASE_URL}/:packageId`, async ({ params, request }) => {
    const { packageId } = params;
    const id = Number(packageId);
    const payload = await request.json();

    const packageIndex = inMemoryData.findIndex((p) => p.id === id);

    if (packageIndex === -1)
      return HttpResponse.json({ error: "Record not found" }, { status: 404 });

    const updatedPackage = {
      ...inMemoryData[packageIndex],
      ...(typeof payload === "object" ? payload : {}),
    };

    inMemoryData[packageIndex] = updatedPackage;

    return HttpResponse.json(updatedPackage, { status: 200 });
  }),

  http.delete(`${BASE_URL}/:packageId`, ({ params }) => {
    const { packageId } = params;
    const id = Number(packageId);

    const packageIndex = inMemoryData.findIndex((p) => p.id === id);

    if (packageIndex === -1)
      return HttpResponse.json({ error: "Record not found" }, { status: 404 });

    inMemoryData.splice(packageIndex, 1);

    return HttpResponse.json(null, { status: 204 });
  }),

  http.options(`${BASE_URL}/*`, () => {
    return HttpResponse.json(null, { status: 204 });
  }),
];
