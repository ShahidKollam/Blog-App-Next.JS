import SearchBox from "@/components/AdminComponents/SearchBox";
import BlogListTable from "@/components/AdminComponents/BlogListTable";

export default function Page() {
    
    return (
        <div className="w-5/6">
            <SearchBox headerText={"List Blogs"} />
            {/* table */}
            <div className="">
                <BlogListTable />
            </div>
        </div>
    );
}
