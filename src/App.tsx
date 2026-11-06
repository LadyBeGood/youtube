import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router"

// These routes are not lazy loaded because their sizes are minuscule
// compared to initial load size. Lazy loading them makes the navigation
// even more sluggish.
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Profile from "./routes/Profile";
import Subscriptions from "./routes/Subscriptions";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import Search from "./routes/Search";
import Notifications from "./routes/Notifications";
import Video from "./routes/Video";
import Channel from "./routes/Channel/Channel";
import Shorts from "./routes/Shorts";
import BottomOnlyLayout from "./components/Layouts/BottomOnlyLayout";
import Settings from "./routes/Settings";
import Playlist from "./routes/Playlist";
import Results from "./routes/Results";


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

