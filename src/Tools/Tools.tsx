import React from 'react';
import {useNavigate} from "react-router-dom";

const Tools = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="IconTools">
                IconTools
                <div className="options">
                    <div onClick={()=>navigate('/tools/icontools/iconcomponent')} className="option">
                        icon组件
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
