export const adaptFilmToServer = (data) => {
  return {
    "id": data.id,
    "preview_image": data.preview.src,
    "name": data.preview.title,
    "background_image": data.moreInfo.backgroundSrc,
    "background_color": data.moreInfo.backgroundColor,
    "poster_image": data.moreInfo.posterSrc,
    "genre": data.moreInfo.genre,
    "released": data.moreInfo.releaseDate,
    "preview_video_link": data.moreInfo.playPreviewSrc,
    "video_link": data.moreInfo.playVideoSrc,
    "is_favorite": data.moreInfo.isAddToMyList,
    "description": data.overview.description,
    "rating": data.overview.rating,
    "scores_count": data.overview.ratingCount,
    "director": data.overview.director,
    "starring": data.overview.actorsList,
    "run_time": data.details.runtime
  };
};
