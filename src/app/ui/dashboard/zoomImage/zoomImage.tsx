"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ZoomImageProps = {
  image: string;
  title: string;
};

export default function ZoomImage({ image, title }: ZoomImageProps) {
  return (
    <Zoom>
      <div
        aria-label={title}
        role="img"
        style={{
          backgroundColor: "#fff",
          backgroundImage: `url(${image})`,
          backgroundPosition: "50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "58px",
          paddingBottom: "100%",
          width: "58px",
          borderRadius: "2px",
        }}
      />
    </Zoom>
  );
}
