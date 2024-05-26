/**
 * eslint-disable @typescript-eslint/no-explicit-any
 *
 * @format
 */

import axios from "axios";

import { useQuery } from "react-query";
import { ENV } from "../environment";


export default function useWatchContent() {
    const fetch = async () => {

        const response = await axios.post(
            `${ENV.BASE_URL}/Learning/GetAll`,

            {
                headers: {
                    "Content-Type": "application/json",

                },
            }
        );
        console.log(response.data)
        if (response.status === 200) {
            const list = response.data.map((item: any, index: number) => {
                return {

                    CLASSID: item?.classId,
                    CLASS: item?.class1,
                    TOPIC: item?.topic,
                    DESCRIPTION: item?.roomName,
                    ACTIVE: item?.classId,

                };
            });

            return { isSuccess: true, contentList:list };
        }
    };

    const response = useQuery({
        queryKey: ["employee"],
        queryFn: () => fetch,
        refetchOnWindowFocus: false,
    });

    return response;
}
