export const BG_IMG = "https://wallpaper.dog/large/20526896.jpg";

export const AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnyF4T_FASWcTrtTSfJoK-MNLAVa5rNsBZyA&usqp=CAU";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_IMG_GPT_PAGE =
  "https://external-preview.redd.it/the-netflix-geeked-week-playlist-has-shadow-and-bone-above-v0-YxpBQkOb3InuUx_HdlnscvsJ_4ykpjFLtvJ7ePWhJSU.jpg?auto=webp&s=a90ff43156bc84bfcceb54401d0dc93feed209bc";

export const SUPPORTED_LANGUAGE = [
  { identifier: "english", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "tamil", name: "Tamil" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPENAI_KEY;
