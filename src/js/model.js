import { API } from "./cofig.js";
import { AJAX } from "./helper.js";

export  const artState = {
    art : [],
};

const artObject = function(art) {
    return {
        artistName : art.artist.name,
        artistPicture : art.artist.image,
        paintSource : art.source,
        paintName : art.name,
        paintYear : art.year,
        paintDescription : art.description,
        paintThumbnailImg : art.images.thumbnail,
        paintSmallImg : art.images.hero.small,
        paintLargeImg : art.images.hero.large,
        paintGalleryImg : art.images.gallery,
    }
}

const dataPaints = function(arr) {
    return arr.map(art => {
        return artObject(art)
    })
}

export const loadAllPaints = async function() {
    try {
        const data = await AJAX(API);
        artState.art = dataPaints(data);
        console.log(artState);
    } catch (err) {
        throw err;
    }
}