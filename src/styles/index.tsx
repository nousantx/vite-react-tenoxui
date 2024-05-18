import React, { ReactNode } from "react";
import { useStyles } from "./lib/useStyles";

interface StylerProps {
  children: ReactNode;
}

export const Styler: React.FC<StylerProps> = ({ children }) => {
  useStyles();
  return <>{children}</>;
};
