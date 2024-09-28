"use client";
import { FaEdit, FaTrash } from "react-icons/fa";
import Loader from "../Loader";
import useFetchBlogs from "@/hooks/useFetchBlogs";
import { formatDate } from "@/utils/formateDate";
export default function BlogTable() {
    // Fetch blogs using the custom hook
    const { isError, isLoading, error, data } = useFetchBlogs();
    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <p>Error fetching blogs: {error.message}</p>;
    }

    return (
        <div className="overflow-x-auto p-5">
            <table className=" bg-zinc-900 text-gray-300 w-full">
                <thead>
                    <tr className="bg-zinc-800 text-zinc-400">
                        <th className="py-3 px-6 text-left">Author</th>
                        <th className="py-3 px-6 text-left">Category</th>
                        <th className="py-3 px-6 text-left">Title</th>
                        <th className="py-3 px-6 text-left">Date Published</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id} className="border-b border-zinc-800">
                            <td className="py-3 px-6">{item.authorName}</td>
                            <td className="py-3 px-6">{item.category}</td>
                            <td className="py-3 px-6">{item.blogTitle}</td>
                            <td className="py-3 px-6">{formatDate(item.publishingDate)}</td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex justify-center items-center space-x-4">
                                    <button className="text-blue-200 hover:text-blue-700">
                                        <FaEdit />
                                    </button>
                                    <button className="text-red-200 hover:text-red-700">
                                        <FaTrash />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
