// app/hooks/useLogout.js
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import axios from "axios"; // Import Axios
import useStore from "@/store/useStore";

const useLogout = () => {
    const { logout } = useStore();
    const router = useRouter();

    const mutation = useMutation({
        mutationFn: async () => {
            const response = await axios.post("/api/user/logout",{},
                {
                    withCredentials: true, // Include cookies with the request
                }
            );
            return response.data; // Return the response data if needed
        },
        onSuccess: (data) => {
            console.log(data);
            
            logout(); // Update Zustand store to reflect logout
            router.push("/"); // Redirect to the home page or sign-in page
        },
        onError: (error) => {
            console.error("Logout error:", error.message); // Handle errors
        },
    });

    const logoutHandler = () => {
        mutation.mutate(); // Trigger the logout mutation
    };

    return { logoutHandler, isLoading: mutation.isLoading, error: mutation.error };
};

export default useLogout;
