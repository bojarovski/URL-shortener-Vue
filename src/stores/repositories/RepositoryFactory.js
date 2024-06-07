import AuthenticationRepository from "../repositories/v1/AuthenticationRepository";

const repositories = {
  authentication: AuthenticationRepository,
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
