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
        try {
            const response = await axios.post(
                `${ENV.BASE_URL}/Learning/GetAll`,
                {}, // empty object for the request body
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);

            if (response.status === 200) {
                const list = response.data.map((item: any, index: number) => ({
                    CLASSID:item?.classId,
                    CLASS: item?.class1,
                    TOPIC: item?.topic,
                    DESCRIPTION: item?.roomName,
                    ACTIVE: item?.classId,
                }));

                return { isSuccess: true, contentList: list };
            }
        } catch (error) {
            console.error("Error fetching content:", error);
        }

        return { isSuccess: false, contentList: [] }; // return a default value in case of failure
    };

    const response = useQuery({
        queryKey: ["classId"],
        queryFn: fetch, // removed the function wrapper here
        refetchOnWindowFocus: false,
    });

    return response;
}
