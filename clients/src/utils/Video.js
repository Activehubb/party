import React from "react";
import { Player } from "video-react";

export default ({ link }) => {
  return <Player playsInline poster={link} src={link} />;
};
