import React from 'react';
import {useParams} from "react-router-dom";
import IconTools from "./IconTools/IconTools";

const ToolInfo = () => {
    const params = useParams();
    const {group,option} = params
    switch (group) {
        case "icontools":{
            switch (option) {
                case "iconcomponent" :{
                    return <>
                        <IconTools/>
                    </>
                }
            }
        }
    }
    return (
        <div>

        </div>
    );
};

export default ToolInfo;
