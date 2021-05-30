import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="-1150 -1100 1300 1300" {...props}>
      <path transform="rotate(180)" d="M261.714 446.286c-24 52.571-42.286 122.286-42.286 212h-146.286v-54.857c0-56 76-133.714 188.571-157.143zM877.714 603.428v54.857h-146.286c0-89.714-18.286-159.429-42.286-212 112.571 23.429 188.571 101.143 188.571 157.143zM950.857 676.571v-73.143c0-108.571-131.429-228.571-309.714-237.143-22.857-29.143-44-46.286-54.286-54.286-30.286-27.429-38.286-56-38.286-92.571s18.286-73.143 73.143-73.143 109.714-36.571 109.714-91.429v-36.571c0-10.286-8-18.286-18.286-18.286h-475.429c-10.286 0-18.286 8-18.286 18.286v36.571c0 54.857 54.857 91.429 109.714 91.429s73.143 36.571 73.143 73.143-8 65.143-38.286 92.571c-10.286 8-31.429 25.143-54.286 54.286-178.286 8.571-309.714 128.571-309.714 237.143v73.143c0 30.286 24.571 54.857 54.857 54.857h164.571v54.857c0 50.286 41.143 91.429 91.429 91.429h329.143c50.286 0 91.429-41.143 91.429-91.429v-54.857h164.571c30.286 0 54.857-24.571 54.857-54.857z" />
    </Svg>
  );
};

export default Icon;
