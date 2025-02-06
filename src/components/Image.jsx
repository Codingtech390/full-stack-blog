import React from "react";
import { IKImage } from "imagekitio-react";

const Image = ({ src, className, width, height, alt }) => {
  return (
    <IKImage
      alt={alt}
      width={width}
      height={height}
      path={src}
      className={className}
      loading="lazy"
      lgip={{ active: true, quality: 20 }}
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
    />
  );
};

export default Image;
