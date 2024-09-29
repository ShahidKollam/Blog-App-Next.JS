import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchBlogs = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const response = await axios.get(`/api/blog/BlogList`);
            return response.data;
        },
        staleTime: Infinity
    });
};

export default useFetchBlogs;
