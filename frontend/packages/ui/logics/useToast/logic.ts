import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import IToastProps, { AlertType } from "./types";

export default function useToast(param: IToastProps) {
  if (param.type === AlertType.SUCCESS) {
    toast.success(param.title, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  } else if (param.type === AlertType.ERROR) {
    toast.error(param.title, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }
}
