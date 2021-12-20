import YouTube from "react-youtube";
import PropTypes from 'prop-types';

const VideoDisplay = (video) => {
    const videoId = video.id.videoId;
    return(

        <YouTube videoId={videoId} />
          
    );
}



VideoDisplay.defaultProps = {
    id: ""
}

VideoDisplay.propTypes = {
    videoId: PropTypes.string
}



export default VideoDisplay;