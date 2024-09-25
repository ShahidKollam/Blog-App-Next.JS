import Sidebar from "@/components/AdminComponents/Sidebar";
import Header from "@/components/Header";

export default function Layout({ children }) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                {children}
            </div>
        </>
    );
}
