// // // import axios from "axios"

// // // export const apiClient = axios.create({
// // //     baseURL: "http://10.90.34.38:8000/api",
// // // })










// import axios from "axios";

// export const apiClient = axios.create({
//     baseURL: "http://wsnq.prod/situationalcenter-1/chief", // Güncellenmiş baseURL
// });

// // Yeni bir fonksiyon ekleyerek API'den veriyi çekin
// export const fetchData = async () => {
//     try {
//         const response = await apiClient.get("/conflicts?max=10&offset=3&all=false"); // API parametreleri
//         return response.data.data.entities; // data.entities döndürülüyor
//     } catch (error) {
//         console.error("API'den veri çekme hatası:", error);
//         throw error; // Hata fırlatılıyor
//     }
// };

// // Add this function to fetch conflict details by ID
// export const fetchConflictDetails = async (id: string) => {
//     try {
//         const response = await apiClient.get(`/conflicts/${id}`); // Fetch conflict details using the ID
//         return response.data.data; // Return the data
//     } catch (error) {
//         console.error("Error fetching conflict details:", error);
//         throw error; // Rethrow the error
//     }
// };
















// // import axios from "axios"

// // export const apiClient = axios.create({
// //     baseURL: "http://10.90.34.38:8000/api",
// // })

































import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://wsnq.prod/situationalcenter-1/chief", // Güncellenmiş baseURL
});

// Yeni bir fonksiyon ekleyerek API'den veriyi çekin
export const fetchData = async (max: number = 10, offset: number = 0) => {
  try {
      const response = await apiClient.get(`/conflicts?max=${max}&offset=${offset}&all=false`); // API parameters
      return {
          entities: response.data.data.entities, // Return data.entities
          total: response.data.total, // Assuming the total count is returned in the response
      };
  } catch (error) {
      console.error("API'den veri çekme hatası:", error);
      throw error; // Rethrow the error
  }
};

// Add this function to fetch conflict details by ID
export const fetchConflictDetails = async (id: string) => {
  try {
    const response = await apiClient.get(`/conflicts/${id}`); // Fetch conflict details using the ID
    return response.data.data; // Return the data
  } catch (error) {
    console.error("Error fetching conflict details:", error);
    throw error; // Rethrow the error
  }
};
