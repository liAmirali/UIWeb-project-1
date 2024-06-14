import { API_SERVER_ADDR } from "@/constants/urls";
import classNames from "@/utils/classNames";

import { FC, useState } from "react";

interface Props {
  className?: string;
  media: MediaT[];
}

const ProductImages: FC<Props> = ({ className, media }) => {
  const [selectedMedia, setSelectedMedia] = useState(media[0]);

  return (
    <div className={classNames("flex flex-col gap-y-4", className)}>
      <div className="flex items-center justify-center p-4 bg-gray-500 bg-opacity-5">
        {selectedMedia.type === "image" ? (
          <img
            src={API_SERVER_ADDR + selectedMedia.file}
            alt={selectedMedia.alt}
            width="346"
            height="420"
          />
        ) : selectedMedia.type === "video" ? (
          <video
            controls
            autoPlay
            src={API_SERVER_ADDR + selectedMedia.file}
            title={selectedMedia.alt}
            width="346"
            height="420"
          />
        ) : (
          <></>
        )}
      </div>
      <div className="flex gap-x-4">
        {media.map((m, i) => (
          <div
            key={i}
            className={`flex items-center justify-center size-28 p-4 bg-gray-500 bg-opacity-5 ${
              m.id === selectedMedia.id ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setSelectedMedia(m)}
          >
            {m.type === "image" ? (
              <img src={API_SERVER_ADDR + m.file} alt={m.alt} width="71" height="86" />
            ) : m.type === "video" ? (
              <video width="400" height="300">
                <source src={API_SERVER_ADDR + m.file} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
