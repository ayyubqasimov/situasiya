import { apiClient } from "../client";

export const getVideos = async () => {
    const {data} = await apiClient.get("/videos");
    return data.data;
}