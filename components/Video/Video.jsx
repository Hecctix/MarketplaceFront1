import React from "react";
import Image from "next/image";

//INTERNALIMPORT
import Style from "./Video.module.css";
import images from "../img";

const Video = () => {
  return (
    <div className={Style.Video}>
      <div className={Style.Video_box}>
        <h1>
          <span>🎬</span> The Videos
        </h1>
        <p>
          Check out our  videos. View more and share more new
          perspectives. Everyones welcome.
        </p>

        <div className={Style.Video_box_frame}>
          <div className={Style.Video_box_frame_left}>
            <Image
              src={images.creatorbackground1}
              alt="Video image"
              width={1340}
              height={400}
              objectFit="cover"
              className={Style.Video_box_frame_left_img}
            />
          </div>

          <div className={Style.Video_box_frame_right}>Hey</div>
        </div>
      </div>
    </div>
  );
};

export default Video;