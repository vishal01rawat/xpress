/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

/** @format */

import { createColumnHelper } from "@tanstack/react-table";

import type { Watch } from "../../utils/Types/Types";
import { watchContentButton } from "./WatchDataButton";



const watchHelper = createColumnHelper<Watch>();



export const WatchColumn = [


    watchHelper.accessor("CLASS", {
    header: "Class",
  }),
  watchHelper.accessor("TOPIC", {
    header: "Topic",
  }),
  watchHelper.accessor("DESCRIPTION", {
    header: "Desciption",
  }),



  watchHelper.accessor("ACTION", {
    header: "Action",
    cell: (info) => watchContentButton(info),
  }),
];

