import SearchBox from "@/components/AdminComponents/SearchBox";
import BlogListTable from "@/components/AdminComponents/BlogListTable";

export default function Page() {
    return (
        <div>
            <div className="flex items-center gap-32 m-5">
                <h1 className="text-2xl text-yellow-400">List Blogs</h1>
                <SearchBox />
            </div>
            {/* table */}
            <div>
                <BlogListTable />
            </div>
        </div>
    );
}
