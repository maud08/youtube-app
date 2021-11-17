import style from './youtube-app.module.scss'
import { useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SearchBar from "../components/search-bar/search-bar";
import { useYoutubeRequest } from '../hooks/request-hook';

const YoutubeApp = () => {

    const [isLoading, error, data] = useYoutubeRequest();
    const [video, setVideo] = useState('');
    const [listVideo, setListeVideo] = useState([]);
    console.log(data)
    return(
        <>
            <Header />
            <main className={style.main}>
                <SearchBar onSearch={(v) => setVideo(v)}/>
            </main>
            <Footer/>
        </>
    );
}

export default YoutubeApp;

//TODO je récupére mes data il me reste a faire la liste et l'affichage de la vidéo