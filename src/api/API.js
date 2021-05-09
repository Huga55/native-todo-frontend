const getObjectData = (endpoint, method, needToken, data = null, headers = {}) => {
    return {
        endpoint,
        method,
        needToken,
        data,
        headers
    }
}

export const userAPI = {
    login: (email, password) => {
        return getObjectData("auth/login", "POST", false, {email, password});
    },

    register: (email, password) => {
        return getObjectData("auth/register", "POST", false, {email, password});
    },

    check: () => {
        return getObjectData("auth/check", "GET", true);
    },

    logout: () => {
        return getObjectData("auth/logout", "PUT", true);
    }
}

export const sectionAPI = {
    getAll: () => {
        return getObjectData("section", "GET", true);
    },

    getOne: (type, id) => {
        return getObjectData(`section/${type}/${id}`, "GET", true);
    },

    delete: (type, id) => {
        return getObjectData(`section/${type}/${id}`, "DELETE", true);
    },

    create: (type, {name, description}) => {
        return getObjectData(`section/${type}`, "POST", true, {name, description});
    },

    change: (type, {id, name, description}) => {
        return getObjectData(`section/${type}`, "PUT", true, {id, name, description});
    }
}