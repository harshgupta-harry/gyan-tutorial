import axios from "axios";
import { apiBaseUrl, apiUrls } from "./apisUrls";

const loginApi = async(params) => {
    try {
        const {email, password, successCallBack} = params;
        const {data = {}} = await axios.post(apiBaseUrl + apiUrls.login, {
            email, password
        })
        console.log(data, 'login-success');
        if(successCallBack){
            successCallBack(data)
        }
    } catch(e) {
        console.log(e, 'login-fail');
    }
}

export {loginApi}