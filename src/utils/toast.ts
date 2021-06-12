import { toast as _toast } from "@zerodevx/svelte-toast";

export const Toast = (type: "success"|"error", message: string) => {
  if (type === "success") {
    _toast.push(message, {
      theme: {
        "--toastBackground": "#48BB78",
        "--toastProgressBackground": "#2F855A",
      },
    });
  } else if (type === "error") {
    _toast.push(message, {
      theme: {
        "--toastBackground": "#F56565",
        "--toastProgressBackground": "#C53030",
      },
    });
  }
};
