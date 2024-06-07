import _axios from "@/plugins/axios";

export default {
  async getUrls() {
    const response = await _axios.get("api/urls");

    return response.data;
  },
};
