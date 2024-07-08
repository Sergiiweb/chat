const baseURL = process.env.REACT_APP_API;

const login = '/login';
const register = '/register';
const chat = '/chat';

const urls = {
    chat,
    auth: {
        login,
        register
    }
}

export {
    baseURL,
    urls
}
