import { useQuery } from "react-query";
import { getVideos } from "./video.api";

const keys = {
  getVideos: ["videos"],
};

export const useVideos = () => {
  return useQuery({
    queryKey: keys.getVideos,
    queryFn: getVideos,
  });
};
