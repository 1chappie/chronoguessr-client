export let validate = {
    email(email) {
        return !(email.length < 3 || email.length > 320 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    },
    username(username) {
        return !(username.length < 3 || username.length > 20 || !/^[a-zA-Z0-9]+$/.test(username));
    },
    password(password) {
        return !(password.length < 6 || password.length > 50);
    },
    confirmPassword(password, confirmPassword) {
        return password === confirmPassword;
    },
    region(region) {
        return ["NA", "SA", "EU", "AS", "AF", "OC"].includes(region);
    }
}