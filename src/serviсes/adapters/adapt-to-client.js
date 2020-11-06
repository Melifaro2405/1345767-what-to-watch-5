export const adaptFilmToClient = (data) => ({
  id: data.id,
  preview: {
    src: data.preview_image,
    title: data.name
  },
  moreInfo: {
    backgroundSrc: data.background_image,
    backgroundColor: data.background_color,
    posterSrc: data.poster_image,
    genre: data.genre,
    releaseDate: data.released,
    playPreviewSrc: data.preview_video_link,
    playVideoSrc: data.video_link,
    isAddToMyList: data.is_favorite
  },
  overview: {
    description: data.description,
    rating: data.rating,
    ratingCount: data.scores_count,
    director: data.director,
    actorsList: data.starring
  },
  details: {
    runtime: data.run_time
  }
});

export const adaptUserInfoToClient = (data) => ({
  id: data.id,
  email: data.email,
  name: data.name,
  avatar: data.avatar_url
});
