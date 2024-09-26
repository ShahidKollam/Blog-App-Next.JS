import Header from "@/components/Header";

const layout = ({ children }) => {
    
    return (
        <main>
            <Header />
            {children}
        </main>
    );
};

export default layout;
