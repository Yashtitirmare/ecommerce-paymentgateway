import { useContext } from "react";
import TTmaContext from "./context";

export function useTma(){
    return useContext(TTmaContext)
}