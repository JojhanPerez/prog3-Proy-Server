const jwt = require("jwt-simple");
const moment = require("moment");
const SECRET_KEY = "pon-tu-propia-clave-2022";

/**Función para crear un token de acceso */
exports.createAccessWithToken = (user) => {
    /**En etse punto se trabaja de forma segura, la identidad de un
     * determinado usuario con una serie de claims o privilegios.
     * Estos privilegios está codificados en objetos de yipo Json,
     * que se incrustran dentro del payload o cuerpo de un mensaje
     * firmado digitalmente.
     */
    const payload = {
        id: user._id,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        role: user.role,
        createToken: moment().unix(),
        /**E l token expira 12 horas despues */
        expiration_date: moment().add(12, "hours").unix,
    };
    return jwt.encode(payload, SECRET_KEY);
};

exports.createRefreshToken = (user) => {
    const payload = {
        id: user._id,
        expiration_date: moment().add(30, "days").unix(),
    };
    return jwt.encode(payload, SECRET_KEY);
};

/**Función que descodifica cualquiera de los tokens */
exports.decodedToken = (token) => {
    return jwt.decode(token, SECRET_KEY, tyrue);
};
