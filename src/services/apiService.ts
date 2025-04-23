import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

class ApiService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
        });

        // Request Interceptor
        this.axiosInstance.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                // Add headers or modify config here
                console.log('Request:', config);
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        // Response Interceptor
        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                console.log('Response:', response);
                return response;
            },
            (error) => {
                console.error('Error Response:', error.response);
                return Promise.reject(error);
            }
        );
    }

    // Generic GET method
    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.axiosInstance.get<T>(url, config);
        return response.data;
    }

    // Generic POST method
    public async post<T>(
        url: string,
        data?: unknown,
        config?: AxiosRequestConfig
    ): Promise<T> {
        const response = await this.axiosInstance.post<T>(url, data, config);
        return response.data;
    }
}

export default ApiService;