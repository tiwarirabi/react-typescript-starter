import React from "react";
import { AxiosResponse } from "axios";
import PhilResponse from "../../types/PhilResponse";

import {getInfo} from "../../services/InfoService";
import Config from "../../types/Config";
import HomeView from "./HomeView";

const HomeController = (props:any) => {
    let config: Config | null = null;

    getInfo().then( (data: AxiosResponse<PhilResponse<Config>>) => {
        config = data.data.data;
    });
    if(config) {
        return <HomeView config={config} />;
    }
    
    return <div>Loading</div>;
};

export default HomeController;