/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { usePackages } from "../api/tanstack/usePackages";

import {
  Button,
  EmptyState,
  LinkButton,
  Loading,
  SortIcon,
} from "@/components/core";
import { PackageModel } from "../types/packageModel";
import { StateInputText } from "@/components/form";
import { clsx } from "clsx";
import { useDeletePackage } from "../api/tanstack/useDeletePackage";

const DECIMALS = 2;
const columnHelper = createColumnHelper<PackageModel>();

export const PackagesTable = () => {
  const { data, isPending, isSuccess } = usePackages();
  const { mutate } = useDeletePackage();

  const packages = useMemo(() => data ?? [], [data]);

  const isEmpty = isSuccess && packages.length === 0;

  const columns = useMemo(
    () => [
      columnHelper.accessor("name", {
        header: "Name",
        sortingFn: "text",
      }),
      columnHelper.accessor("description", {
        header: "Description",
        sortingFn: "text",
      }),
      columnHelper.accessor("price", {
        header: "Price",
        cell: (props) => `$${props.getValue().toFixed(DECIMALS)}`,
      }),
      columnHelper.accessor("classType.label", {
        header: "Class Type",
        sortingFn: "text",
        cell: (props) => props.getValue() || "—",
      }),
      columnHelper.accessor("availableMonths", {
        header: "Available Months",
        cell: (props) => props.getValue() || "—",
      }),
      columnHelper.accessor("classesPerPackage", {
        header: "Classes Per Package",
        cell: (props) => props.getValue() || "—",
      }),
      columnHelper.display({
        header: "Actions",
        cell: (props) => (
          <div className="flex items-center gap-2">
            <LinkButton to={`/packages/${props.row.original.id}/edit`}>
              Edit
            </LinkButton>
            <Button
              variant="danger"
              onClick={() => mutate(props.row.original.id)}>
              Delete
            </Button>
          </div>
        ),
      }),
    ],
    [mutate],
  );

  const table = useReactTable<PackageModel>({
    columns,
    data: packages,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    globalFilterFn: "includesString",
    enableSortingRemoval: false,
    maxMultiSortColCount: 3,
    initialState: { sorting: [{ id: "name", desc: false }] },
  });

  return (
    <div>
      <div className="w-1/2 p-0.5 pb-2">
        <StateInputText
          role="search"
          placeholder="Search..."
          value={table.getState().globalFilter ?? ""}
          onChange={(e) => table.setGlobalFilter(String(e.target.value))}
        />
      </div>
      <div className="flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full p-0.5 align-middle">
            <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-black/5">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {table.getFlatHeaders().map((header, index) => (
                      <th
                        scope="col"
                        key={header.id}
                        className={clsx(
                          "text-left text-sm font-semibold whitespace-nowrap text-gray-900",
                          index === 0 ? "pr-3 pl-4" : "px-2 py-3",
                          (
                            header.column.columnDef.meta as {
                              className?: string;
                            }
                          )?.className,
                        )}>
                        <div
                          className={clsx(
                            header.column.getCanSort() &&
                              "flex cursor-pointer items-center select-none",
                          )}
                          onClick={header.column.getToggleSortingHandler()}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}

                          <SortIcon
                            sortDirection={header.column.getIsSorted()}
                            canSort={header.column.getCanSort()}
                          />
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white tabular-nums">
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell, index) => (
                        <td
                          key={cell.id}
                          className={clsx(
                            "text-sm whitespace-nowrap text-gray-500",
                            index === 0 ? "pr-3 pl-4" : "px-3 py-2",
                            (
                              cell.column.columnDef.meta as {
                                className?: string;
                              }
                            )?.className,
                          )}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {isEmpty && (
                    <tr>
                      <th colSpan={columns.length}>
                        <EmptyState />
                      </th>
                    </tr>
                  )}
                  {isPending && (
                    <tr>
                      <th colSpan={columns.length}>
                        <div className="py-10">
                          <Loading sizeStyles="size-10" className="mx-auto" />
                        </div>
                      </th>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
