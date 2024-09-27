import Sidebar from "@/components/AdminComponents/Sidebar";

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
