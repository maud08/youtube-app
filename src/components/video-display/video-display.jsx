import YouTube from "react-youtube";
import PropTypes, { array } from "prop-types";

const VideoDisplay = (data) => {
    console.log("diplsay props",data)
    return(
        <>
            {/* {id ? (
                <p>Chargement</p>
            ): (
                <YouTube videoId={id.videoId}/>
            )} */}
        </>
    );
}

VideoDisplay.propTypes = {
    data : array.isRequired
}

export default VideoDisplay;