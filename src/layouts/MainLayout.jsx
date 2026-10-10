import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <div id='page-container' className='min-h-screen'>
                <a href="#content-wrap" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white">
                    Skip to content
                </a>
                <Navbar />
                <div className="lg:flex">
                    <Sidebar />
                    <div className="min-w-0 flex-1">
                        <main id='content-wrap'>
                            <Outlet />
                        </main>
                        <footer id='footer'>
                            <Footer />
                        </footer>
                    </div>
                </div>
            </div>
            <ScrollRestoration />
        </>
     );
}

export default MainLayout;
