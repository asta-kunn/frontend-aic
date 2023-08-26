import http from "../http-common";

export const setAuthTokenToAxios = (token: string) => {
  if (token) {
    http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete http.defaults.headers.common["Authorization"];
  }
};

export const removeAuthTokenToAxios = () => {
  delete http.defaults.headers.common["Authorization"];
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  removeAuthTokenToAxios();
};