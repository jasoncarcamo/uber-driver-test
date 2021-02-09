const DriverToken = {
    getToken(){
        return window.localStorage.getItem("driver-token");
    },
    hasToken(){
        return this.getToken();
    },
    setToken(token){
        return window.localStorage.setItem("driver-token", token);
    },
    updateToken(token){
        return this.setToken(token);
    },
    deleteToken(){
        return window.localStorage.removeItem("driver-token");
    }
};

module.exports = DriverToken;