import { ColumnsPhotoAlbum } from "react-photo-album";

import "react-photo-album/columns.css";

import imageList from "../config/imageList";

function Gallery() {
    
    return(
        <ColumnsPhotoAlbum photos = {imageList} columns = {1}/>
    );
}

export default Gallery;