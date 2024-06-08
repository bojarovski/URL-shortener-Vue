import _axios from "@/plugins/axios";

export default {
  async getUrls() {
    const response = await _axios.get("api/urls");

    return response.data;
  },

  async getUrl(id) {
    const response = await _axios.get(`api/${id}`);

    return response.data.original_url;
  },
  async storeUrl(body) {
    const response = await _axios.post(`api/shorten`, body);
    return response.data.original_url ?? response.data;
  },
};
