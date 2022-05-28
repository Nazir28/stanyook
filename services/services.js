import axios from "axios"

const urlApiEmloyees = 'https://rinh-api.kovalev.team/employee'

 class Services{
    getEmployees() {
        return axios.get(urlApiEmloyees)
                .then(res=> res.data)
    }
};
export default new Services