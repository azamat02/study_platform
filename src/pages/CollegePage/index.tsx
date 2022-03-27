import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Navbar from "../../components/Navbar";
import CollegeService from "../../services/collegeService";
import {Spin} from "antd";

interface College {
    id: number,
    name: string,
    email: string,
    imgURL: string,
    address: string,
    phone: string
}

interface Specs {
    id: number,
    collegeId: number,
    specId: string,
    name: string
}

function CollegePage() {
    const {id} = useParams()
    const [college, setCollege] = useState<College>()
    const [specs, setSpecs] = useState()
    const collegeService = new CollegeService()

    useEffect(() => {
        collegeService.getCollege(id).then(res => {
            setCollege(res)
        })
        collegeService.getSpecsOfCollege(id).then(res => {
            setSpecs(res)
        })
    }, [])

    if (!college || !specs) {
        return (
            <div style={{display: 'flex', justifyContent: 'center', margin: '200px'}}>
                <Spin size={"large"}/>
            </div>
        )
    }

    return (
        <div>
            <Navbar/>

            <div className="college_page">
                <p className="title">
                    {college.name}
                </p>

                <div className={"college_page_inner"}>
                    <img src={college.imgURL} alt="image"/>
                    <div className="options">
                        <div>
                            <p>Адрес:</p>
                            <p>{college.address ? college.address : 'не указан'}</p>
                        </div>
                        <div>
                            <p>Почта:</p>
                            <p>{college.email ? college.email : 'не указана'}</p>
                        </div>
                        <div>
                            <p>Телефон:</p>
                            <p>{college.phone ? college.phone : 'не указан'}</p>
                        </div>

                        <br/>
                        <button className="button_primary">
                            Подать документы
                        </button>
                    </div>
                </div>
            </div>

            <div className="specs">
                <p className="title">Специальности</p>

                <div className="spec">
                    {/*@ts-ignore*/}
                    {specs.map(item => {
                        return (
                            <p>{item.specId} - {item.name}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default CollegePage;