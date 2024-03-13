import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import type { ApiRequestOptions } from "./ApiRequestOptions";
import { CancelablePromise } from "./CancelablePromise";
import type { OpenAPIConfig } from "./OpenAPI";

const axiosInstance = axios.create({
  // Your custom Axios instance config
});

export const request = <T>(config: OpenAPIConfig, options: ApiRequestOptions): CancelablePromise<T> => {
  return new CancelablePromise((resolve, reject, onCancel) => {
    const generateUrl = (url: string, pathParams: Record<string, any> | undefined) => {
      let newUrl = url;

      if (pathParams) {
        Object.entries(pathParams).forEach(([key, value]) => {
          newUrl = newUrl.replace(`{${key}}`, value);
        });
      }

      return newUrl;
    };

    const url = generateUrl(`${config.BASE}${options.url}`, options.path);

    axiosInstance
      .request({
        url,
        data: options.body,
        method: options.method,
        params: options.query,
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
