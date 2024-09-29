"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import usePreviewImg from "@/hooks/usePreviewImage";

const CreateBlogForm = () => {
    const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();
    const queryClient = useQueryClient();

    const { toast } = useToast();  
    // Define Zod schema for validation
    const schema = z.object({
        //blogImage: z.any(),
        blogTitle: z.string().min(1, "Title required: MAX - 35 words").max(35),
        publishingDate: z.string().min(1, "Date is required"),
        category: z.string().min(1, "Category is required"),
        authorName: z.string().min(1, "Author name is required"),
        paragraphTitle: z.string().min(1, "Paragraph title is required"),
        description: z.string().min(1, "Description is required"),
    });


    // Set up useForm with zodResolver
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    // post req api
    const mutation = useMutation({
        mutationFn: async (formData) => {
            const response = await axios.post("/api/admin/createBlog", formData);
            return response.data;
        },
        onSuccess: (data) => {
            toast({
                title: "Success",
                description: "Blog created successfully!",
                status: "success",
                duration: 9000,
            });
            queryClient.invalidateQueries({ queryKey: ['blogs'] })
            console.log("invalidateQueries");
            
            reset();
            setImgUrl("")
            console.log("Blog Creation successful:", data);
            // Handle success (e.g., redirect, show message, etc.)
        },
        onError: (error) => {
            console.error("Blog creation error:", error);

            toast({
                title: "Error",
                description: error.response?.data?.error || "Blog creation failed",
                status: "error",
                duration: 9000,
            });
        },
    }); 

    // On form submit
    const onSubmit = (data) => {
        const payload = {
            ...data, 
            blogImage: imgUrl,
        };
        console.log(payload);
        
            mutation.mutate(payload);
    };
        

    return (
        <div className="bg-zinc-900 rounded h-max  m-5">
            <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                {/* Image input */}
                <div className="space-y-3">
                    <label>Blog Image</label>
                    <Input
                        type="file"
                        accept="image/*"
                        // ref={imageRef}
                        // onClick={() => imageRef.current.click()}

                        onChange={handleImageChange}
                        className="w-1/4 h-24 border-yellow-300 border-dashed"
                        // {...register("blogImage")}
                    />
                    {/* {errors.blogImage && <span className="text-red-500">Blog image is required</span>} */}
                </div>

                {/* Two inputs in one line - First Row */}
                <div className="grid grid-cols-2 pt-10 gap-10">
                    <div className="space-y-3">
                        <label>Blog Title</label>
                        <Input
                            type="text"
                            placeholder="Enter"
                            className="w-full h-14 bg-zinc-800 border-transparent"
                            {...register("blogTitle")}
                        />
                        {errors.blogTitle && <span className="text-red-500">{errors.blogTitle.message}</span>}
                    </div>

                    <div className="space-y-3">
                        <label>Publishing Date</label>
                        <Input
                            type="date"
                            placeholder="Enter"
                            className="w-full h-14 bg-zinc-800 border-transparent"
                            {...register("publishingDate")}
                        />
                        {errors.publishingDate && <span className="text-red-500">{errors.publishingDate.message}</span>}
                    </div>
                </div>

                {/* Two inputs in one line - Second Row */}
                <div className="grid grid-cols-2 pt-4 gap-10">
                    <div className="space-y-3">
                        <label>Category</label>
                        <select
                            className="w-full h-14 bg-zinc-800 border-transparent text-white px-3 rounded-md"
                            {...register("category")}
                            defaultValue=""
                        >
                            <option value="" disabled>
                                Select category
                            </option>
                            <option value="Technology">Technology</option>
                            <option value="Health">Health</option>
                            <option value="Education">Education</option>
                            <option value="Business">Business</option>
                        </select>
                        {errors.category && <span className="text-red-500">{errors.category.message}</span>}
                    </div>

                    <div className="space-y-3">
                        <label>Author Name</label>
                        <Input
                            type="text"
                            placeholder="Enter"
                            className="w-full h-14 bg-zinc-800 border-transparent"
                            {...register("authorName")}
                        />
                        {errors.authorName && <span className="text-red-500">{errors.authorName.message}</span>}
                    </div>
                </div>

                <div className="grid grid-cols-2 pt-4 gap-10">
                    <div className="space-y-3">
                        <label>Paragraph Title</label>
                        <Input
                            type="text"
                            placeholder="Enter"
                            className="w-full h-14 bg-zinc-800 border-transparent"
                            {...register("paragraphTitle")}
                        />
                        {errors.paragraphTitle && <span className="text-red-500">{errors.paragraphTitle.message}</span>}
                    </div>
                </div>

                {/* Large description input */}
                <div className="grid grid-cols-1 pt-4 gap-5">
                    <label>Description</label>
                    <textarea
                        className="w-full h-32 px-4 py-2 bg-zinc-800  rounded-md"
                        placeholder="Enter description"
                        {...register("description")}
                    />
                    {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                </div>

                {/* Submit button */}
                <div className="mt-10 flex justify-center">
                    <button
                        type="submit"
                        className="w-1/6 bg-yellow-400 text-black py-4 px-4 rounded-sm hover:bg-yellow-500"
                        disabled={mutation.isPending}
                    >
                        {mutation.isPending ? "Loading..." : "Create Blog"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateBlogForm;
