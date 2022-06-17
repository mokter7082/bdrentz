import React from "react";
import { SvgUri } from "react-native-svg";
export const LogoSVG = ({ width = 100, ...rest }) => {
  return (
    <SvgUri
      width="100%"
      height="100%"
      uri="http://128.199.168.249/healthms/backend/images/logo.svg"
    />
  );
};

export default LogoSVG;
