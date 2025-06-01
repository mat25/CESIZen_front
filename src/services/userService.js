import api from '@/services/axiosClient';
import { useAuth } from '@/composables/useAuth'

const API_URL = import.meta.env.VITE_API_URL

const userService = {
  
  async login(username, password) {
    const response = await api.post(`${API_URL}/auth/login`, { username, password });
    
    localStorage.setItem('token', response.data.token);

    const userResponse = await this.getMe();

    return userResponse.data;
  },
  
  register({ username, email, password }) {
    return api.post('/auth/register', {
      username,
      email,
      password
    });
  },

  async registerAndLogin({ username, email, password }) {
    
    await this.register({ username, email, password })

    const userResponse = await this.login(username, password)

    return userResponse
  },

  getMe() {
  return api.get('/users/me');
  },

  logout() {
    const { clearUser } = useAuth()

    localStorage.removeItem('token')
    clearUser()

    if (!window.location.pathname.includes('/login')) {
      window.location.href = '/login'
    }

    console.warn('Déconnexion effectuée.')
  },

  deleteAccount() {
    return api.delete('/users/me');
  },

  getPersonalData() {
    return api.get('/users/me/data');
  },

  deletePersonalData() {
    return api.delete('/users/me/data');
  },
}
  
export default userService