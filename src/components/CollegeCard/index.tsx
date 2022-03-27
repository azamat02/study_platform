import React from 'react';
import {RightOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

interface CollegeCardProps {
    id: number,
    name: string,
    imgURL: string,
    email: string,
    address: string,
    phone: string
}

function CollegeCard({id, name, imgURL, email, address, phone}: CollegeCardProps) {
    const navigate = useNavigate()

    return (
        <div className={"college_card"}>
            <img src={imgURL} alt="college image" width={"100%"}/>
            <div>
                <p className="title">
                    {name}
                </p>
                <span className={"options"}>
                    - {email}
                </span>
                <span className={"options"}>
                    - {address}
                </span>
                <span className={"options"}>
                    - {phone}
                </span>

                <button onClick={()=>{navigate(`/college/${id}`)}} style={{position: "absolute", bottom: "20px", right: "20px"}} className={"button_primary"}>
                    Перейти
                    <RightOutlined />
                </button>
            </div>
        </div>
    );
}

export default CollegeCard;