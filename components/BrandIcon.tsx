import React from "react";

export default function BrandIcon() {
  return (
    <>
      <style jsx>{`
        video {
          border-radius: 30%;
          overflow: hidden;
          display: block;
          margin: 0 auto;
        }
      `}</style>

      <video
        width="75"
        height="auto"
        autoPlay
        loop
        muted
      >
        <source src="https://gmabhishek.github.io/Image-hoster/assets/gm.mp4" type="video/mp4" />
      </video>
    </>
  );
}
