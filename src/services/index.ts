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
            console.error('Token expirado ou não autorizado');
            window.localStorage.removeItem('authToken');
            window.location.href = '/SignIn';
        }
        return Promise.reject(error);
    }
);

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/login/', {
            email,
            password,
        });
        console.log(response.data)
        window.localStorage.setItem('authToken', JSON.stringify(response.data));
        console.log(window.localStorage.getItem('authToken'))
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const getProfile = async () => {
    try {
        const response = await api.get('/auth/profile/');
        console.log('Perfil do usuário:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile:', error);
        throw error;
    }
};

export default api;