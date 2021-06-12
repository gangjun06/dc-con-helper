import axios from "axios";
import queryString from "query-string";
import type { ConInfo} from '../models'

export const Search = async (keyword: string): Promise<ConInfo[]> => {
  try {
    const res = await axios.post(
      "https://proxy-dc.gangjun.dev/dccon/search",
      queryString.stringify({
        type: "title",
        keyword,
      }),
      {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      }
    );

    const result: ConInfo[] = res.data.data.list.map((item) => ({
      id: item.idx,
      title: item.title,
      author: item.nick_name,
      description: item.description,
      imageUrl: item.main_img_url,
      regDate: item.reg_date,
      detailID: item.main_img_url.split("?no=")[1]
    }));
    console.log(result);
    return result;
  } catch (e) {
    throw e;
  }
};
