import { useLayoutEffect } from "react";
import { styles } from "./styles";

export function useStyles() {
  useLayoutEffect(() => {
    styles();
  }, []);
}
