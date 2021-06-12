import type { ConInfo } from "../models";

const favoriteCon = "DC_CONE_HELPER/FAVORITE_CON";

export const GetFavoriteCon = (): ConInfo[] =>
  JSON.parse(localStorage.getItem(favoriteCon)) || [];

export const IsFavoriteCon = (id: string) =>
  GetFavoriteCon().filter((item) => item.id === id).length > 0;

export const ToggleFavoritedCon = (item: ConInfo) => {
  let con = GetFavoriteCon();
  if (IsFavoriteCon(item.id)) {
    const index = con.findIndex((e) => e.id === item.id);
    con = con.slice(0, index).concat(con.slice(index + 1, con.length));
    localStorage.setItem(favoriteCon, JSON.stringify(con));
  } else {
    localStorage.setItem(favoriteCon, JSON.stringify([...con, item]));
  }
};
