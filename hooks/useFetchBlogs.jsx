import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchBlogs = () => {
    console.log("fetch blogs");
    
    return useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const response = await axios.get(`/api/blog/BlogList`);
            return response.data;
        },
        staleTime: 1000,
        refetchType: 'all'
    });
};

export default useFetchBlogs;
