// used as interceptors (for adding header in the request )

import axios from "axios"

const api =axios.create({
    baseURL : import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access")
        if (token){
            config.headers.authorization = `Bearer ${token}`
        }
        return config
    }
)

export default api