import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 72 72" {...props}>
      <svg width="36" height="72" viewBox="0 0 36 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M36 67C27.7783 67 19.8933 63.7339 14.0797 57.9203C8.26607 52.1067 5 44.2217 5 36C5 27.7783 8.26605 19.8933 14.0797 14.0797C19.8933 8.26608 27.7783 5.00001 36 5"
          stroke="#FF3D00"
          strokeWidth="10"
          strokeLinejoin="round"
        />
      </svg>
    </Svg>
  );
};

export default Icon;
