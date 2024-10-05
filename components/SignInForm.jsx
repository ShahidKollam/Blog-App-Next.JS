import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import useStore from "@/store/useStore";
import { Loader } from "lucide-react";

const SignInForm = () => {
    const router = useRouter();
    const setUser = useStore((state) => state.setUser);
    const setAuthentication = useStore((state) => state.setAuthentication);

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(4).max(10),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const loginMutation = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post("/api/user/logIn", formData);
            return response.data;
        },
        onSuccess: (data) => {
            console.log("Login successful:", data);
            setUser(data);
            setAuthentication(true);
            console.log("Is authenticated:", useStore.getState().authenticated); // This will show 'true'

            try {
                router.push("/");
                console.log("Router push to /admin was successful!"); // Debug log
            } catch (error) {
                console.error("Failed to push to /admin:", error); // Debug log on error
            }
        },

        onError: (error) => {
            console.error("Error logging in:", error);
            // Handle error (e.g., show error message)
        },
    });

    const onSubmit = async (data) => {
        loginMutation.mutate(data);
        console.log(data);
    };

    return (
        <div className="flex px-3 md:pt-20 md:pl-44 pb-36">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-7 w-full md:w-2/4">
                <label>Email Address</label>
                
                <input
                    type="text"
                    {...register("email")}
                    placeholder="Enter Your Email Address"
                    className="bg-zinc-900 p-3 rounded border border-zinc-700"
                />
                {errors.email && <span>{errors.email.message}</span>}

                <label>Password</label>
                <input
                    type="password"
                    {...register("password")}
                    placeholder="Enter Your Password"
                    className="bg-zinc-900 p-3 rounded border border-zinc-700"
                />
                {errors.password && <span>{errors.password.message}</span>}

                <div className="flex space-x-4">
                    <input type="checkbox" />
                    <label>I Agree with Terms of Use and Privacy Policy</label>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <input
                        type="submit"
                        className="bg-yellow-400 text-black w-full p-2 md:w-1/3 md:p-3 font-bold rounded-xl"
                        value={loginMutation.isPending ? 'Loading...' : 'Log In'}
                    />
                    <p>or</p>
                    <p>
                        Dont have an acccount yet?{" "}
                        <Link href="/sign-up" className="text-yellow-400">
                            Register Here
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
