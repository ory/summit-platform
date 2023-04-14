import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = () => {
  // Specify the YouTube video ID
  const videoId = "JEYxNA3jebo";

  // YouTube player configuration options
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      // You can add additional YouTube player parameters here
      autoplay: 0, // Set to 1 for autoplay
    },
  };

  return (
    <div>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
