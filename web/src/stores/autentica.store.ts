import { makeObservable, observable, action } from "mobx";

interface IUsuario {
    email: string,
    token: string
}

class AutenticaStore {
    estaAutenticado = false;
    usuario: IUsuario = {email: "", token: ""};

    constructor() {
        makeObservable(this, {
            estaAutenticado: observable,
            usuario: observable,
            login: action,
            logout: action
        })
    }

    login({email, token} : IUsuario) {
        this.usuario = {email, token};
        this.estaAutenticado = true;
        
    }

    logout() {
        this.estaAutenticado = false;
        this.usuario = {email: "", token: ""}
        localStorage.clear()
    }
}

const autenticaStore = new AutenticaStore();

export default autenticaStore;