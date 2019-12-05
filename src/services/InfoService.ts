import {getConfig} from "../api/config";

export const getInfo = () => {
    return getConfig();
};