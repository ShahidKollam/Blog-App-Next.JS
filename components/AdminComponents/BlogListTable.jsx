import { FaEdit, FaTrash } from "react-icons/fa";

export default function BlogTable() {
    const blogData = [
        { author: "Tiger Nixon", category: "Travel Diaries", title: "The Best Kept Secrets", date: "22/5/2009" },
        { author: "Garrett Winters", category: "Cultural Insights", title: "A Guide for Travelers", date: "22/5/2011" },
        { author: "Ashton Cox", category: "Adventure & Exploration", title: "Try Dishes", date: "25/5/2011" },
        { author: "Tiger Nixon", category: "Travel Diaries", title: "The Best Kept Secrets", date: "22/5/2009" },
        { author: "Garrett Winters", category: "Cultural Insights", title: "A Guide for Travelers", date: "22/5/2011" },
    ];

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
                    {blogData.map((item, index) => (
                        <tr key={index} className="border-b border-zinc-800">
                            <td className="py-3 px-6">{item.author}</td>
                            <td className="py-3 px-6">{item.category}</td>
                            <td className="py-3 px-6">{item.title}</td>
                            <td className="py-3 px-6">{item.date}</td>
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
