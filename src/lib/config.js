

export const API_ENDPOINT = "https://bkgwind.renfraenergy.com/";
export const IMG_ENDPOINT = "https://bkgwind.renfraenergy.com/";

export const API_TOKEN = "Ks8Lp2Qw91Hd@(Za3MnBv7TyKu5pf";

export const capitalizeText = (text) => {
  if (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  } else {
    // Handle the case when text is undefined or null
    return "";
  }
};
