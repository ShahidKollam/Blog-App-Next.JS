import SearchBox from "@/components/AdminComponents/SearchBox";
import CreateBlogForm from "@/components/AdminComponents/CreateBlogForm";

const page = () => {
    return (
        <div className="w-5/6">
            <SearchBox headerText={"Create a Blog"} />
            <CreateBlogForm />
        </div>
    );
};

export default page;
