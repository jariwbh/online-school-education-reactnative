import appConfig from "./appConfig";

function axiosConfig(token) {
    if (token) {
        appConfig.defaults.headers.common["authkey"] = token;
    } else {
        delete appConfig.defaults.headers.common["authkey"];
    }
}

export default axiosConfig;
