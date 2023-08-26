class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}madhvi`
    }

    set password(value){
        this._password = value
    }
}

const madhvi = new User("m@madhvi.ai", "abc")
console.log(madhvi.email);