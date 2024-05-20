import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://api.homologation.cliqdrive.com.br',
    headers: {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
    },
});

// Configura os interceptors
api.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            alert('As credenciais inseridas não são válidas. Tente novamente.')
            window.localStorage.removeItem('authToken');
            window.location.href = '/SignIn';
        }
        return Promise.reject(error);
    }
);

export const login = (email: string, password: string): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await api.post('/auth/login/', {
                email,
                password,
            });
            window.localStorage.setItem('authToken', JSON.stringify(response.data));
            resolve(response.data);
        } catch (error) {
            reject(error);
        }
    });
};

export const getProfile = async () => {
    try {
        const response = await api.get('/auth/profile/');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default api;