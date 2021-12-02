import PropTypes from 'prop-types';
import { useYoutubeRequest } from "../../hooks/request-hook";
import VideoDisplay from "../video-display/video-display";

const VideoRequest = (props)=>{

    const video = props.video?.trim() ?? '';
    
    const [isLoding, error, data] = useYoutubeRequest(video);


    return(
        <div>
            {isLoding ? (
                <p>Chargement...</p>
            ): error ? (
                <p>{error}</p>
            ): data ? (
                <VideoDisplay video={data}/>
            ): (
                <p>Aucune data</p>
            )}

        </div>
    );
}


VideoRequest.propTypes = {
    video: PropTypes.string.isRequired
}
export default VideoRequest; 