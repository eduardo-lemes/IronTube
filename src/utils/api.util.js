import axios from "axios";

class Api {
  constructor() {
    // criando instância do axios
    this.api = axios.create({
      baseURL: "https://rest-api-irontube.herokuapp.com/",
    });

    //Pegar requests verificar se tem token, colocar como header e retonar ele

    this.api.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers = {
            authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
      (error) => console.log(error)
    );
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
  getAllVideos = async () => {
    try {
      const { data } = await this.api.get("/videos/");
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  getVideoDetail = async (videoDetail) => {
    try {
      const { data } = await this.api.get(`/videos/view/${videoDetail}`);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  getVideoComments = async (videoId) => {
    try {
      const { data } = await this.api.get(`/comments/list/${videoId}`);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
  createComment = async (payload) => {
    try {
      const { data } = await this.api.post("/saveComment", payload);
      return data;
    } catch (error) {
      throw new Error(error);
    }
  };
}

export default new Api();
