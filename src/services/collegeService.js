import axios from "axios";

class CollegeService {
    constructor() {
        this.apiBase = "http://localhost:8000"
    }

    async getAllColleges() {
        const res = await axios.get(`${this.apiBase}/colleges`).then(res=>{
            return res.data;
        })
        return res
    }

    async getCollege(id) {
        const res = await axios.get(`${this.apiBase}/colleges/${id}`).then(res=>{
            return res.data;
        })
        return res
    }

    async getAllSpecs() {
        const res = await axios.get(`${this.apiBase}/specs`).then(res=>{
            return res.data;
        })
        return res
    }

    async getCollegesWithSpec(value) {
        const res = await axios.get(`${this.apiBase}/specs?name=${value}`).then(res=>{
            return res.data;
        })

        // return res.map(spec=>{
        //     return (
        //
        //     )
        // })
    }

    async getSpecsOfCollege(id) {
        const res = await axios.get(`${this.apiBase}/specs?collegeId=${id}`).then(res=>{
            return res.data;
        })

        return res
    }
}

export default CollegeService