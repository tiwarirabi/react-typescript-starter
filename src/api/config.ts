import { AxiosResponse } from "axios";
import * as http from "../utils/http";
import config from "../config";
import Config from "../types/Config";
import PhilResponse from "../types/PhilResponse";

const configUrl = `${config.endpoints.baseApiEndPoint}/config`;

/**
 * Fetches config resource from api.
 * 
 * @returns Promise with a AxiosResponse
 */
export const getConfig = () : Promise<AxiosResponse<PhilResponse<Config>>> => http.get(configUrl);