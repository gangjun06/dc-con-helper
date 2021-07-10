// const imgToCanvas = (imgTagID: string): HTMLCanvasElement => {
//   const canvas = document.createElement("canvas");
//   const ctx = canvas.getContext("2d");

//   const imageEl = document.getElementById(imgTagID) as HTMLImageElement;
//   imageEl.crossOrigin = "anonymous";

//   const { width, height } = imageEl;

//   canvas.width = width;
//   canvas.height = height;
//   ctx.drawImage(imageEl, 0, 0, width, height);
//   return canvas;
// };

export const GetImageBlob = async (imgSrc: string, ext: string): Promise<Blob> => {
  const res = await fetch(
    `https://proxy-dc-img.gangjun.dev/dccon.php?no=${imgSrc}`
  );
  
  const blob = await res.blob();

  const blobWithType = new Blob([blob], { type: `image/${ext}` });
  return blobWithType;
};
