import { AxiosResponse } from "axios";
import * as http from "../utils/http";
import config from "../config";
import Config from "../types/Config";
import ApiResponse from "../types/ApiResponse";

const configUrl = `${config.endpoints.baseApiEndPoint}/config`;

/**
 * Fetches config resource from api.
 * 
 * @returns Promise with a AxiosResponse
 */
export const getConfig = () : Promise<AxiosResponse<ApiResponse<Config>>> => http.get(configUrl);
