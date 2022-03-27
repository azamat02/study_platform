import React from 'react';
import Navbar from "../../components/Navbar";
import HeaderCard from "../../components/HeaderCard";
import {CaretDownOutlined} from "@ant-design/icons";
import InfoCard from "../../components/InfoCard";
import CollegesSection from "../../components/CollegesSection";

function MainPage() {

    return (
        <div>
            <Navbar/>

            <HeaderCard/>

            <div style={{display: "flex", justifyContent: "center", marginBottom: '70px'}} >
                <CaretDownOutlined style={{fontSize: "50px", color: "#6c757d"}}/>
            </div>

            <InfoCard/>

            <CollegesSection/>
        </div>
    );
}

export default MainPage;