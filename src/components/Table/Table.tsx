import React from 'react';
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

interface TableProps {
  column: any;
  data: any;
  COLOR?: string;
}

export const Table = ({ column, data }: TableProps) => {
  const table = useReactTable({
    data,
    columns: column,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 20,
      },
    },
  });

  console.log("ReportD data is", data);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className='w-full'>
          <thead className='w-full bg-gray-100 p-4'>
            {table.getHeaderGroups()?.map((headerGroup) => (
              <tr
                className='border border-gray-800 capitalize'
                key={headerGroup.id}
              >
                {headerGroup.headers?.map((header) => (
                  <th
                    key={header.id}
                    className='border text-sm min-w-[80px] max-w-[160px] text-[#111827] font-semibold text-left py-1 px-1 capitalize'
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className='w-full text-left items-center bg-white'>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className='border'>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className='border text-xs px-1 min-w-[80px] max-w-[160px] break-all text-left items-center justify-center'
                    style={{
                      backgroundColor: cell.row.original.COLOR || 'inherit',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='flex items-center justify-end gap-3 mt-2'>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
          className='border px-1 border-secondary text-sm rounded-sm outline-none'
        >
          {[10, 20, 30].map((pageSize) => (
            <option key={pageSize} value={pageSize} className='text-sm text-black'>
              Show {pageSize}
            </option>
          ))}
        </select>
        <span className='flex items-center text-sm gap-1'>
          <div>Page</div>
          <p>
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </p>
        </span>
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className='px-1 border border-secondary rounded-sm cursor-pointer'
        >
          <ChevronLeftIcon className='w-4 h-5 text-secondary' />
        </button>
        <button
          className='px-1 border border-secondary rounded-sm cursor-pointer'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRightIcon className='w-4 h-5 text-secondary' />
        </button>
      </div>
    </div>
  );
};
