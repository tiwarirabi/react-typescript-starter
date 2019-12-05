import React from "react";
import Config from "../../types/Config";

export interface HomeViewProps {
    config: Config;
}

const HomeView: React.FC<HomeViewProps>  = (props:any) => {
    const config: Config = props.config;

    return (
        <div>
            {config.globalPromo}
        </div>
    );
};

export default HomeView;