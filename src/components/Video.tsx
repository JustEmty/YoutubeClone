type VideoType = {
  title: string;
  thumbnailUrl: string;
  channel: {
    name: string;
    profileUrl: string;
  };
  views: number;
};

type VideoProp = {
  video: VideoType;
};

function Video({ video }: VideoProp) {
  return (
    <div>
      <div className="block">
        <img className="rounded-lg" src={video.thumbnailUrl} alt="thumbnail" />
      </div>
      <div className="mt-2 flex flex-row gap-3">
        <img
          className="h-10 rounded-full"
          src={video.channel.profileUrl}
          alt=""
        />
        <div>
          <div className="font-bold">{video.title}</div>
          <div className="text-neutral-700">{video.channel.name}</div>
          <div className="text-neutral-700">{video.views}</div>
        </div>
      </div>
    </div>
  );
}

export default Video;
