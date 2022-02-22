import type { ConInfo, DetailResult } from "../models";

const favoriteCon = "DC_CONE_HELPER/FAVORITE_CON";
const conData = "DC_CONE_HELPER/DETAIL/";

export const GetFavoriteCon = (): ConInfo[] =>
  JSON.parse(localStorage.getItem(favoriteCon)) || [];

export const IsFavoriteCon = (id: string) =>
  GetFavoriteCon().filter((item) => item.id === id).length > 0;

export const ToggleFavoritedCon = (data: DetailResult) => {
  let con = GetFavoriteCon();
  if (IsFavoriteCon(data.info.id)) {
    const index = con.findIndex((e) => e.id === data.info.id);
    con = con.slice(0, index).concat(con.slice(index + 1, con.length));
    localStorage.setItem(favoriteCon, JSON.stringify(con));
    localStorage.removeItem(conData + data.info.detailID);
  } else {
    localStorage.setItem(favoriteCon, JSON.stringify([...con, data.info]));
    localStorage.setItem(conData + data.info.detailID, JSON.stringify(data));
  }
};

export const GetConDetail = (id: string) => {
  try {
    const result = JSON.parse(
      localStorage.getItem(conData + id)
    ) as DetailResult;
    return result;
  } catch (e) {
    return null;
  }
};
