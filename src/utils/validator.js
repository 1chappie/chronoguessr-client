export let validate = {
    email(email) {
        if (email.length < 3 || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return 0;
        }
        return 1;
    },
    username(username) {
        if (username.length < 3 || username.length > 20 || !/^[a-zA-Z0-9]+$/.test(username) ) {
            return 0;
        }
        return 1;
    },
    password(password) {
        if (password.length < 6 || password.length > 50){
            return 0;
        }
        return 1;
    },
    confirmPassword(password, confirmPassword) {
        if (password !== confirmPassword) {
            return 0;
        }
        return 1;
    },
    region(region) {
        if (!["NA", "SA", "EU", "AS", "AF", "OC"].includes(region)) {
            return 0;
        }
        return 1;
    }
}