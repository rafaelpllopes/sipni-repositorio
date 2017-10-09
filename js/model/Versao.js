class Versao {
    constructor(_app, _db, _inst, _urlApp, _urlDb, _urlInst){
        Object.assign(this, {_app, _db, _inst,
        _urlApp, _urlDb, _urlInst});
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
    get urlApp() {
        return this._urlApp;
    }

    get urlDb() {
        return this._urlDb;
    }

    get urlInst() {
        return this._urlInst;
    }
}