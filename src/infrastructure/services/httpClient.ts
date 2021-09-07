import axios, { AxiosError, AxiosPromise, AxiosResponse } from 'axios';

const on = <RES = AxiosResponse, ERR = AxiosError>(
  promise: AxiosPromise
): Promise<{ data: RES | null; error: ERR | null }> =>
  promise
    .then(({ data }): { data: RES; error: ERR | null } => ({
      data: data.data,
      error: null,
    }))
    .catch((error): { data: RES | null; error: ERR } => ({
      data: null,
      error,
    }));

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

const httpClient = {
  get: <ResponseDataType>(...args: Parameters<typeof axiosInstance.get>) =>
    on<ResponseDataType>(axiosInstance.get<ResponseDataType>(...args)),
  post: <ResponseDataType>(...args: Parameters<typeof axiosInstance.post>) =>
    on<ResponseDataType>(axiosInstance.post<ResponseDataType>(...args)),
  patch: <ResponseDataType>(...args: Parameters<typeof axiosInstance.patch>) =>
    on<ResponseDataType>(axiosInstance.patch<ResponseDataType>(...args)),
};

export default httpClient;
