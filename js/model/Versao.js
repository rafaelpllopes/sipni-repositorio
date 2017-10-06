class Versao {
    constructor(){
        this._app = '5.2.0';
        this._db = '5.5.1';
        this._inst = '7.1.0';
        Object.freeze(this);
    }

    get app() {
        return this._app;
    }

    get db() {
        return this._db;
    }

    get inst() {
        return this._inst;
    }
}