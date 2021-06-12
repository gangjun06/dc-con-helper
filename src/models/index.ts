export type ConInfo = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  detailID: string;
  author: string;
  regDate: string;
};

export type ConItem = {
  id: string;
  title: string;
  path: string;
  ext: string;
};

export type DetailResult = {
  like: boolean;
  info: ConInfo;
  list: ConItem[];
  tag: string[];
};
