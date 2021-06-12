import axios from "axios";
import queryString from "query-string";
import type { ConInfo, ConItem, DetailResult } from "../models";
import { IsFavoriteCon } from "./storage";

export const Detail = async (id: string): Promise<DetailResult> => {
  try {
    const res = await axios.post(
      "https://proxy-dc.gangjun.dev/dccon/package_detail",
      queryString.stringify({ code: id }),
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    const result: DetailResult = {
      info: {
        id: res.data.info.package_idx,
        title: res.data.info.title,
        description: res.data.info.description,
        imageUrl:
          "//dcimg5.dcinside.com/dccon.php?no=" + res.data.info.main_img_path,
        author: res.data.info.seller_name,
        regDate: res.data.info.reg_date,
        detailID: res.data.info.main_img_path,
      },
      list: res.data.detail.map((item) => ({
        id: item.idx,
        title: item.title,
        ext: item.ext,
        path: item.path,
      })),
      tag: res.data.tags.map((item) => item.tag),
      like: IsFavoriteCon(res.data.info.package_idx),
    };
    return result;
  } catch (e) {
    throw e;
  }
};
