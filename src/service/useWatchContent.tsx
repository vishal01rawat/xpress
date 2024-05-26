/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import axios from "axios";

import { useQuery } from "react-query";
import { ENV } from "../environment";


export default function useRoomsList(defaultValue?: any) {
    const fetch = async (defaultValue: any) => {
        const payload = {
            Active : defaultValue
        };

        const token = localStorage.getItem("token");

        const response = await axios.post(
            `${ENV.BASE_URL}/Rooms/GetAllRooms`,
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token && `Bearer ${JSON.parse(token)}`,
                },
            }
        );
        console.log(response.data)
        if (response.status === 200) {
            const list = response.data.map((item: any, index: number) => {
                return {

                    FLOOR: item?.floor,
                    ROOMTYPE: item?.roomTypeId,
                    ROOMNUMBER: item?.roomNumber,
                    ROOMNAME: item?.roomName,

                };
            });
            
            return { isSuccess: true, roomsList: list };
        }
    };

    const response = useQuery({
        queryKey: ["employee", defaultValue],
        queryFn: () => fetch(defaultValue),
        refetchOnWindowFocus: false,
    });

    return response;
}
