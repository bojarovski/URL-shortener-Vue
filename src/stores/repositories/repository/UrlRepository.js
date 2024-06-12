import _axios from "@/plugins/axios";

export default {
  async getUrls() {
    try {
      const response = await _axios.get("api/urls");
      return response.data;
    } catch (error) {
      console.error("An error occurred while fetching URLs:", error);
      throw error;
    }
  },

  async getUrl(id) {
    try {
      const response = await _axios.get(`api/${id}`);
      return response.data.original_url;
    } catch (error) {
      console.error(
        `An error occurred while fetching the URL with id ${id}:`,
        error
      );
      throw error;
    }
  },

  async storeUrl(body) {
    try {
      const response = await _axios.post(`api/shorten`, body);
      console.log(response.data);
      return response.data.original_url;
    } catch (error) {
      console.error("An error occurred while storing the URL:", error);
      throw error;
    }
  },
};
