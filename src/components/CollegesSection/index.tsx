import React, {useEffect, useState} from 'react';
import Input from "antd/es/input/Input";
import CollegeCard from "../CollegeCard";
import CollegeService from "../../services/collegeService";
import {AutoComplete, Button, Select, SelectProps, Spin} from "antd";
import Search from "antd/es/input/Search";

function CollegesSection() {
    const [colleges, setColleges] = useState()
    const [searchValue, setSearchValue] = useState('')
    const [specs, setSpecs] = useState()
    const collegeService = new CollegeService();

    useEffect(()=>{
        collegeService.getAllSpecs().then(res => {
            console.log(res)
            setSpecs(res)
        })

        collegeService.getAllColleges().then((res) => {
            console.log(res)
            setColleges(res)
        })
    }, [])

    if (!colleges || !specs) {
        return (
            <div>
                <Spin/>
            </div>
        )
    }

    const handleSpec = (value: string) => {
        console.log(value)
    }

    // @ts-ignore
    let filteredColleges = colleges.filter(college => {
        if (college.name.toLowerCase().includes(searchValue.toLowerCase())) {
            return college
        }
    })

    // @ts-ignore
    let renderedColleges = filteredColleges.map(({id, name, imgURL, email, phone, address}: any) => {
        return (
            <CollegeCard key={"college_"+id} id={id} name={name} imgURL={imgURL} email={email} phone={phone} address={address}/>
        )
    })

    return (
        <div className={"colleges_section"}>
            <p className={"header_title"}>Колледжи</p>

            <Search placeholder="Введите название универа" onSearch={(value)=>{setSearchValue(value)}} enterButton size={"large"} style={{width: "50%"}}/>

            <Select size={"large"} placeholder={"Найти по специальностям"} style={{ marginLeft: 50 }} onChange={handleSpec}>
                {
                    // @ts-ignore
                    specs.map(spec=> {
                        return <Select.Option value={spec.id}> {spec.name}</Select.Option>
                    })
                }
            </Select>
            {renderedColleges}
        </div>
    );
}

export default CollegesSection;