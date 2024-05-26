/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { createColumnHelper } from "@tanstack/react-table";

import type { Watch } from "../../utils/Types/Types";


// import { EditEmployee } from "../Other-Modal/editEmoloyee"

// import Edit button

const watchHelper = createColumnHelper<Watch>();



export const WatchColumn = [


    watchHelper.accessor("PHONE", {
    header: "Floor",
  }),
  watchHelper.accessor("EMAIL", {
    header: "RoomType",
  }),



//   watchHelper.accessor("ACTION", {
//     header: "Action",
//     cell: (info) => EditRooms(info),
//   }),
];
