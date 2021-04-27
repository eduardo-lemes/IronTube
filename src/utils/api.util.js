import axios from "axios";

class Api {
  constructor() {
    // criando instância do axios
    this.api = axios.create({
      baseURL: "https://rest-api-irontube.herokuapp.com/",
    });
  }

  login = async (payload) => {
    console.log(payload);
    try {
      const { data } = await this.api.post("/auth/login", payload);
      const { token } = data;
      localStorage.setItem("token", token);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
  signup = async (payload) => {
    try {
      await this.api.post("/auth/signup", payload);
      return;
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };
}

export default new Api();
