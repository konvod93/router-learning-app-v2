import { useContext } from "react";
import { RouterContext } from "./../providers/RouterProvider";

export const useRouter = () => useContext(RouterContext);