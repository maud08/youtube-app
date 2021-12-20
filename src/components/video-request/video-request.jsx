import style from './request.module.scss'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useYoutubeRequest } from "../../hooks/request-hook";
import ListVideo from '../list-video/list-video';
import VideoDisplay from "../video-display/video-display";

const VideoRequest = (props)=>{

    const video = props.video?.trim() ?? '';
    
    const [isLoding, error, data] = useYoutubeRequest(video);
    const [firstVideo, setFirstVideo] = useState();
    const [selectv, setSelectv] = useState();
    const [id, setId] = useState();


    useEffect(()=>{
        if(data){
                setFirstVideo(data.shift())//shift permet retirer premier élement du tableau
        }
    },[data]);

    useEffect(() => {
        if(id){
            setSelectv(data.find(v => v.id.videoId === id));
            setFirstVideo();
        }
        
    },[id])

    const handleVideo =(id) => {
        setId(id);      
    }    

    return(
        <>
            {isLoding ? (
                <p>Chargement...</p>
            ): error ? (
                <p>{error}</p>
            ): data ? (
                <div className={style.container}>
                    {firstVideo ? (
                        <VideoDisplay {...firstVideo}/>
                    ): (
                        <>
                            <VideoDisplay {...selectv}/>
                        </>
                    )}
                    <ListVideo data={data} selectVideo={handleVideo}/>
                </div>
            ):(
                <p>Aucune data</p>
            )}

        </>
    );
}

ListVideo.defaultProps = {
    data: [],
}
VideoRequest.propTypes = {
    video: PropTypes.string.isRequired
}
export default VideoRequest; 