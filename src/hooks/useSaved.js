import {useContext} from "react";
import {SavedContext} from "../utils/SavedContext";

export const useSaved = () => {
  const context = useContext(SavedContext);
  return context;
};
