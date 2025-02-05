import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen dark:bg-gradient-to-t dark:from-slate-700 dark:to-slate-900">
            <Header />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
