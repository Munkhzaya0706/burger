import axios from "axios";


const instance = axios.create({
    baseURL: "https://burger-e64d2-default-rtdb.firebaseio.com/"
});

export default instance;