import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"

// These routes are not lazy loaded because their size is minuscule
// compared to initial load size. Lazy loading them makes navigation
// sluggish.
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Profile from "./pages/Profile"
import Subscriptions from "./pages/Subscriptions"
import DefaultLayout from "./components/Layouts/DefaultLayout"
import Search from "./pages/Search"
import Notifications from "./pages/Notifications"
import Video from "./pages/Video"
import Channel from "./pages/Channel/Channel"
import Shorts from "./pages/Shorts"
import BottomOnlyLayout from "./components/Layouts/BottomOnlyLayout"
import Settings from "./pages/Settings"
import Playlist from "./pages/Playlist"
import Results from "./pages/Results"


export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/channel" element={<Channel />} />
                </Route>

                <Route element={<BottomOnlyLayout />}>
                    <Route path="/shorts" element={<Shorts />} />
                    <Route path="/results" element={<Results />} />
                </Route>


                <Route path="/search" element={<Search />} />
                <Route path="/video" element={<Video />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/settings" element={<Settings />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}




const rootElement = document.getElementById("root");
if (rootElement === null) {
    throw new Error("Expected a DOM element with id \"root\", but none was found.");
}
createRoot(rootElement).render(<App />);

