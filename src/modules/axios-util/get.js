import axios from 'axios'

//跨域问题
axios.defaults.crossDomain = true //是否允许跨域
axios.defaults.withCredentials  = true//默认形式可以进行跨域，并且可以对cookie做一些设置

const Get = ( {url,data} ) => {
    return axios.get( url , {
        params: {
            data
        }
    })
}

export default Get


