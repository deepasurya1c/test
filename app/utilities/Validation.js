//class for validation methods
export default class Validation {

    /*validate email*/
    static validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    /*validate password*/
    static validatePassword = (password) => {
        var reg = /^[a-zA-Z0-9]{8,}$/;
        return reg.test(password)
    }


}