import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": `${process.env.REACT_APP_API_KEY}`
    }
});

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
                .then(response => response.data)
    },
    followUser(userId) {
        return instance.post(`follow/${userId}`)
                .then(response => response.data)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
                .then(response => response.data)
    },
    getProfile(userId) { // Зворотня сумісність
        console.warn('Old method');
        return profileAPI.getProfile(userId);
    }
}

export const authAPI = {
    me() { 
        return instance.get(`auth/me`)
                .then(response => response.data)
    },
    authorizeUser(email, password, rememberMe = false, captcha = null) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    unauthorizeUser() {
        return instance.delete('auth/login')
                //.then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
                .then(response => response.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status`, {status})
                .then(response => response.data)
    },
    savePhoto(photo) {
        let formData = new FormData();
        formData.append("image", photo);
        return instance.put('/profile/photo', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfileData(profile) {
        return instance.put('/profile', profile)
                .then(response => response.data)
    } 
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('/security/get-captcha-url')
                .then(response => response.data)
    }
}