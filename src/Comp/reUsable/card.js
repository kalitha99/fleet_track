import React from 'react';
import { Button } from 'antd';
import "./style.css"

const CustomCard = (props) => {
    return (
        <div>
            <Button className="card" type="primary" {...props} >
                <p>{props.btnname}</p>
            </Button>
        </div>
    );
};

export default CustomCard;
