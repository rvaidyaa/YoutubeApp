import React from "react";
import './video_list_item.css';

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  // const video = props.video;
  // same as ({video}), has a prop video, grab and declare new var(video)
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      
        <div class="card horizontal">
          <div class="card-image">
            <img src={imageUrl} />
          </div>
          <div class="card-stacked">
            <div class="card-content">
              <p>
              {video.snippet.title}
              </p>
            </div>
            
          </div>
        </div>
      
    </li>
    
    
  );
  
};

export default VideoListItem;
