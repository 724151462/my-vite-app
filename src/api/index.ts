import axios from "axios";
import { Toast } from "vant";
import request from "../config/api";

export const get = function (url: string, data?: any, header?: any) {
  return axios.get(request.baseUrl + url, {
    data,
    headers: header || {},
    timeout: request.timeout,
  });
};
export const post = function (url: string, data?: any, header?: any) {
  return axios.post(request.baseUrl + url, {
    data,
    headers: header || {},
    timeout: request.timeout,
  });
};
