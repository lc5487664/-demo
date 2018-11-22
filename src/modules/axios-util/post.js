import axios from 'axios'
import qs from 'querystring'

axios.defaults.crossDomain = true //是否允许跨域
axios.defaults.withCredentials  = true//默认形式可以进行跨域，并且可以对cookie做一些设置

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}
const Post = ( {url,data} ) => {
    return axios.post( url,qs.stringify(data),config)
}
export default Post


