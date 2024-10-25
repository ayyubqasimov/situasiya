// import axios from "axios"

// export const apiClient = axios.create({
//     baseURL: "http://10.90.34.38:8000/api",
// })










import axios from "axios";

export const apiClient = axios.create({
    baseURL: "http://wsnq.prod/situationalcenter-1/chief", // Güncellenmiş baseURL
});

// Yeni bir fonksiyon ekleyerek API'den veriyi çekin
export const fetchData = async () => {
    try {
        const response = await apiClient.get("/conflicts?max=10&offset=0&all=false"); // API parametreleri
        return response.data.data.entities; // data.entities döndürülüyor
    } catch (error) {
        console.error("API'den veri çekme hatası:", error);
        throw error; // Hata fırlatılıyor
    }
};