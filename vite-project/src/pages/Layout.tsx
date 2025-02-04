import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gradient-to-t dark:from-slate-700 dark:to-slate-900">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
