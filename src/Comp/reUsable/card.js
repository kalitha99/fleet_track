import React from 'react';
import {Button} from 'antd';
import "./style.css"

const CustomCard = (props) => {
    return (

        <div className="col-md-3">

                <Button className="card" type="primary" {...props} >
                    <p>{props.btnname}</p>
                </Button>

        </div>
    );
};

export default CustomCard;
