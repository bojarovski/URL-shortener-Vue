import UrlRepository from "../repositories/repository/UrlRepository";

const repositories = {
  url: UrlRepository,
};

export default {
  get: (name) => {
    if (repositories[name]) {
      return repositories[name];
    } else {
      throw new Error("Invalid Repository Type");
    }
  },
};
