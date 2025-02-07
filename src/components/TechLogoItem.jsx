import React from 'react';

import { ReactComponent as TechBG} from '../assets/tech-icon-bg.svg'; 
import { TechLogo } from './TechLogo';

const TechLogoItem = ({ icon, name }) => {
    return (
        <div className="tech-stack-item center-items relative">
            <TechBG className="pr-3" />
            <div className="flex flex-col items-center absolute-center">
                <TechLogo name={icon} />
                {name}
            </div>
        </div>
    );
};

export default TechLogoItem;