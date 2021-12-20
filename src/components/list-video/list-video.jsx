import ItemVideo from "./item-video";


const ListVideo = (props) => {
    const {data,selectVideo} = props;
    const videosJSX = data.map(
        v =><ItemVideo key={v.id.videoId} data={v} selectVideo={selectVideo}/>
    );
    return(
        <ul>
            {videosJSX}
        </ul>
    )
}


ListVideo.defaultProps = {
    data: [],
    selectVideo: () => {}
}



export default ListVideo;