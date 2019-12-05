import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

/**
 * This util is currently just a implementation so that when we 
 * scale this app, we have a control over the requests that this 
 * app makes through this util function.
 */

//Put the request options like headers here
const options: AxiosRequestConfig = {
    headers: {}
};

/**
 * 
 * @param url:string The url to get the resource froms
 * @param params:any The params that should be passed through the url
 * 
 * @returns Promise of the get request
 */
export const get = (url: string) : Promise<AxiosResponse<any>> => { 
    return axios.get(url);
}

/**
 * 
 * @param url:string The url to post the resource from
 * @param body:any The body that should be passed with the url
 * 
 * @returns Promise of the post request
 */
export const post = (url: string, body: any) : Promise<AxiosResponse<any>> => axios.post(url, body, options);

/**
 * 
 * @param url:string The url to put the resource from
 * @param body:any The body that should be passed with the url
 * 
 * @returns Promise of the put request
 */
export const put = (url: string, body: any) : Promise<AxiosResponse<any>> => axios.put(url, body, options);