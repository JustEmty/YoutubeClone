import React from "react";
import {
  gamingIcon,
  helpIcon,
  historyIcon,
  homeIcon,
  likedVideosIcon,
  musicIcon,
  newsIcon,
  playlistIcon,
  reportHistoryIcon,
  sendFeedbackIcon,
  settingIcon,
  shortsIcon,
  showMoreIcon,
  sportIcon,
  subscriptionsIcon,
  trendingIcon,
  watchLaterIcon,
  youIcon,
  yourVideosIcon,
} from "../../data/icons";
import { subscriptions } from "../../data/subscriptions";
import youtubeIcon from "../youtube_logo.png";

type SidebarProps = {
  show: boolean;
};

function Sidebar({ show }: SidebarProps) {
  return (
    <div className="mr-2 h-screen pt-2">
      <div
        className={`flex-col overflow-y-auto ${show ? "md:flex" : "hidden"}`}
      >
        <SidebarItemSmall icon={homeIcon} label="Home" />
        <SidebarItemSmall icon={shortsIcon} label="Shorts" />
        <SidebarItemSmall icon={subscriptionsIcon} label="Subscriptions" />
        <SidebarItemSmall icon={youIcon} label="You" />
      </div>
      <div
        className={`max-h-max flex-col overflow-y-auto px-2 ${show ? "hidden" : "md:flex"}`}
      >
        <div className="pb-2">
          <SidebarItemLarge icon={homeIcon} label="Home" />
          <SidebarItemLarge icon={shortsIcon} label="Shorts" />
          <SidebarItemLarge icon={subscriptionsIcon} label="Subscriptions" />
        </div>
        <hr />
        <div className="py-2">
          <div className="mx-1 flex w-[240px] flex-row items-center gap-1 rounded-lg px-3 py-2 hover:bg-neutral-200">
            <p className="font-medium">You</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
          <SidebarItemLarge icon={historyIcon} label="History" />
          <SidebarItemLarge icon={playlistIcon} label="Playlists" />
          <SidebarItemLarge icon={yourVideosIcon} label="Your videos" />
          <SidebarItemLarge icon={watchLaterIcon} label="Watch Later" />
          <SidebarItemLarge icon={likedVideosIcon} label="Liked videos" />
        </div>
        <hr />
        <div className="pb-2 pt-4">
          <p className="mx-2 mb-2 font-medium">Subscriptions</p>
          {subscriptions.map((subscription) => (
            <SidebarItemLarge
              icon={subscription.imgUrl}
              label={subscription.channelName}
            />
          ))}
          <SidebarItemLarge icon={showMoreIcon} label="Show more" />
        </div>
        <hr />
        <div className="pb-2 pt-4">
          <p className="mx-2 mb-2 font-medium">Explore</p>
          <SidebarItemLarge icon={trendingIcon} label="Trending" />
          <SidebarItemLarge icon={musicIcon} label="Music" />
          <SidebarItemLarge icon={gamingIcon} label="Gaming" />
          <SidebarItemLarge icon={newsIcon} label="News" />
          <SidebarItemLarge icon={sportIcon} label="Sports" />
        </div>
        <hr />
        <div className="pb-2 pt-4">
          <p className="mx-2 mb-2 font-medium">More from YouTube</p>
          <SidebarItemLarge icon={youtubeIcon} label="YouTube Premium" />
          <SidebarItemLarge icon={youtubeIcon} label="YouTube Studio" />
          <SidebarItemLarge icon={youtubeIcon} label="YouTube Music" />
          <SidebarItemLarge icon={youtubeIcon} label="YouTube Kids" />
        </div>
        <hr />
        <div className="pb-2 pt-4">
          <SidebarItemLarge icon={settingIcon} label="Settings" />
          <SidebarItemLarge icon={reportHistoryIcon} label="Report history" />
          <SidebarItemLarge icon={helpIcon} label="Help" />
          <SidebarItemLarge icon={sendFeedbackIcon} label="Send feedback" />
        </div>
        <hr />
        <div>© 2024 Duong Nguyen Minh Thong</div>
      </div>
    </div>
  );
}

type SidebarItemProps = {
  icon: React.ReactNode | string;
  label: string;
};

function SidebarItemSmall({ icon, label }: SidebarItemProps) {
  return (
    <div className="mx-1 flex flex-col items-center gap-2 rounded-lg px-1 py-3 hover:bg-neutral-200">
      {icon}
      <p className="text-xs">{label}</p>
    </div>
  );
}

function SidebarItemLarge({ icon, label }: SidebarItemProps) {
  return (
    <div className="mx-1 flex w-[240px] flex-row items-center gap-4 rounded-lg px-2 py-2 hover:bg-neutral-200">
      {typeof icon === "string" ? (
        <img className="w-6 rounded-full" src={icon} />
      ) : (
        icon
      )}
      <p className="">{label}</p>
    </div>
  );
}

export default Sidebar;
