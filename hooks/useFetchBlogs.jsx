import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchBlogs = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const response = await axios.get(`/api/blog/BlogList`);
            return response.data;
        },
        // Optional: add staleTime and cacheTime as needed
        staleTime: 10000, // 10 seconds
        cacheTime: 60000, // 60 seconds
    });
};

export default useFetchBlogs;
