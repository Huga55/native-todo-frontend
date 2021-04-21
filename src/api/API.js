export const userAPI = {
    login: async (email, password) => {
        try {
            console.log(123);
            const responseJSON = await fetch("https://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password})
            });
            console.log("responseJSON", responseJSON)
            const response = await responseJSON.json();
            console.log("response", response);
        } catch(e) {
            console.log("error", e);
        }
    },
}