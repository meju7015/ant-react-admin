import axios from "axios";

axios.create({
    baseURL: process.env.API_URL
})

class AuthenticationService {

    /**
     * 로그인
     *
     * @param email
     * @param password
     * @returns {Promise<AxiosResponse<any>>}
     */
    postJwtAuthentication(email, password) {
        console.log(process.env.API_URL);
        return axios.post('/v1/signin', {
            email: email,
            password: password
        });
    }

    registerSuccessFullLoginForJwt(email, token) {
        localStorage.setItem('token', token);
        localStorage.setItem('authenticatedUser', email);
        this.setupAxiosInterceptors();
    }

    createJWTToken(token) {
        return token;
    }

    setupAxiosInterceptors() {
        axios.interceptors.request.use(
            config => {
                const token = localStorage.getItem('token');
                if (token) {
                    config.headers['X-AUTH-TOKEN'] = localStorage.getItem('token');
                }
                return config;
            },
            error => {
                Promise.reject(error);
            });
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('authenticatedUser');
    }

    isUserLoggedIn() {
        const token = localStorage.getItem('token');

        if (token) {
            return true;
        }

        return false;
    }
}

export default AuthenticationService;

