import { useState } from "react";
import PageHeader from "./assets/layouts/PageHeader";
import Sidebar from "./assets/layouts/Sidebar";
import Category from "./components/Category";
import Video from "./components/Video";
import { categories } from "./data/categories";
import { videos } from "./data/videos";

function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className="h-screen">
      <PageHeader showSideBar={setShowSideBar} />
      <div className="grid grid-cols-[auto,1fr]">
        <div className="overflow-y-hidden hover:overflow-y-auto">
          <Sidebar show={showSideBar} />
        </div>
        <div className="overflow-x-hidden">
          <div>
            <Category categories={categories} />
          </div>
          <div className="mx-2 mt-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
            {videos.map((video) => (
              <Video video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
