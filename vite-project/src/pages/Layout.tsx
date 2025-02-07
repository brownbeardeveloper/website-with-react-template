import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout() {
    return (
        <>
            <Header />
            <main className="w-full max-w-screen-xl mx-auto pt-30">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
