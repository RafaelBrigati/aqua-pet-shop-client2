import axios from "axios";
 
const api = axios.create({
  baseURL: "http://localhost:5005"
});

const signUp = ({ username, password, email }) => {
    return api.post("/auth/signup", {username, password, email})
                   .then(response => response.data)
                   .catch(err => console.error(err))
}

const logIn = ({username, password}) => {
    return api.post("/auth/login", {username, password})
                .then(response => response.data)
                .catch(err => console.error(err))
}

const verifyToken = (storedToken) => {
    return api.get("/auth/verify", { headers: { Authorization: `Bearer ${storedToken}`} })
              .then(response => response.data)
              .catch(err => console.error(err))
}

const uploadPhoto = (uploadData) => {
    return api.post("/api/upload", uploadData)
                .then(response => response.data)
                .catch(err => console.error(err))
}

const getCurrentUser = () => {
    const storedToken = localStorage.getItem('authToken')
    return api.get("/api/users", { headers: { Authorization: `Bearer ${storedToken}`} })
    .then(response => response.data)
    .catch(err => console.error(err))
}

const editUser = ({username, campus, course, image }) => {
    return api.put("/api/users", {username, campus, course, image})
}

const authMethods = {
    signUp,
    logIn,
    verifyToken,
    uploadPhoto,
    getCurrentUser,
    editUser
}

export default authMethods;