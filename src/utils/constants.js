export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 

export const profileURL = "https://i.pinimg.com/474x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDk1ZGRhZTJhNGNlZGZlNDI1M2FmZmU4YzZlZWMxOSIsInN1YiI6IjY1ODNkZWI1ZTI5NWI0M2MwMDY4YzRlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PBgau8RqVRSKEpKh8aASAnHBjdgpoHouVD1rPhFsyXY"
    }
};
  
export const IMG_CON_URL = "https://image.tmdb.org/t/p/w500";

export const BgURl = "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" }
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY