const imgToCanvas = (imgTagID: string): HTMLCanvasElement => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const imageEl = document.getElementById(imgTagID) as HTMLImageElement;
  imageEl.crossOrigin = "anonymous";

  const { width, height } = imageEl;

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(imageEl, 0, 0, width, height);
  return canvas;
};

export const GetImageBlob = async (imgTagID: string): Promise<Blob> => {
  return new Promise((resolve) => {
    const canvas = imgToCanvas(imgTagID);
    canvas.toBlob(resolve);
  });
};
