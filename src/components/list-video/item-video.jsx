
const ItemVideo = (props) => {
    const id = props.data.id.videoId;
    const selectVideo = props.selectVideo;
    const miniature = `https://i1.ytimg.com/vi/${id}/1.jpg`
  

    return(
        <li>
            <img src={miniature} alt="miniature" onClick={()=> selectVideo(id)}/>
        </li>
    )
}

export default ItemVideo;