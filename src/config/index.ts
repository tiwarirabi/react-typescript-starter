import {EndPoints, IEndPoints} from "./endpoints";

interface Config {
    endpoints: IEndPoints;
}

const config: Config = {
    endpoints: EndPoints
};

export default config;