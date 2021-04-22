import useHttp from "./../hooks/useHttp";

export const userAPI = {
    login: (email, password) => {
        return useHttp("auth/login", "POST", false, {email, password});
    },

    register: (email, password) => {
        return useHttp("auth/register", "POST", false, {email, password});
    },

    check: () => {
        return useHttp("auth/check", "GET", true);
    },

    logout: () => {
        return useHttp("auth/logout", "PUT", true);
    }
}

export const sectionAPI = {
    getAll: () => {
        return useHttp("section", "GET", true);
    },

    getOne: (type, id) => {
        return useHttp(`section/${type}/${id}`, "GET", true);
    },

    delete: (type, id) => {
        return useHttp(`section/${type}/${id}`, "DELETE", true);
    },

    create: (type, name, description) => {
        return useHttp(`section/${type}`, "POST", true, {name, description});
    },

    change: (type, id, name, description) => {
        return useHttp(`section/${type}/${id}`, "PUT", true, {name, description});
    }
}