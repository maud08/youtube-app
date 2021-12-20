import style from './youtube-app.module.scss'
import { useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SearchBar from "../components/search-bar/search-bar";
import VideoRequest from '../components/video-request/video-request';

const YoutubeApp = () => {

    
    const [video, setVideo] = useState('');

    return(
        <>
            <Header />
            <main className={style.main}>
                <SearchBar onSearch={(v) => setVideo(v)}/>
                {!video ?(
                    <p>Pas de vidéos trouvées</p>
                ):(
                   
                    <div>
                        <VideoRequest video={video}/>
                    </div>
                )}
            </main>
            <Footer/>
        </>
    );
}

export default YoutubeApp;
