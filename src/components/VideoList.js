import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = (props) => {  // props.videos and props.onVideoSelect
// lets destructure props so we don't have to write out props. everywhere
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem 
        key={video.id.videoId} 
        video={video} 
        onVideoSelect={onVideoSelect} 
      />
    ) // passing down onVideoSelect callback to VideoItem via props again
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;

};

export default VideoList;