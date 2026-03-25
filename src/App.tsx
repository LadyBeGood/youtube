import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import Subscriptions from "./pages/Subscriptions"
import Layout from "./components/Layout"
import Search from "./pages/Search"
import Notifications from "./pages/Notifications"
import Video from "./pages/Video"



export function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/subscriptions" element={<Subscriptions />}></Route>
                    <Route path="/notifications" element={<Notifications />}></Route>
                </Route>

                <Route path="/search" element={<Search />}></Route>
                <Route path="/video" element={<Video />}></Route>

                {/* 404 */}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}




const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error(
        "Root element with id 'root' not found in index.html.\n" +
        "Make sure your index.html contains: <div id=\"root\"></div>"
    );
}
createRoot(rootElement).render(<App />);

