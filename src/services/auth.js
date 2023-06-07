import { baseApi } from "@/plugins/axios";

const api = "/auth";

const login = (body) => baseApi.post(`${api}/login`, body);
const register = (body) => baseApi.post(`${api}/register`, body);
const logout = () => baseApi.get(`${api}/logout`);

export { login, register, logout };
