class Versao {
    constructor(){
        this._app = '5.2.0';
        this._db = '5.5.1';
        this._inst = '7.1.0';
        this._urlApp = 'http://189.44.213.211:8083/sipni/atualizacao/aplicacao//SIPNIInstWin32(5.2.0).zip';
        this._urlDb = 'http://189.44.213.211:8083/sipni/atualizacao/tabelas//tabelas_5.5.1.update';
        this._urlInst = 'http://189.44.213.211:8083/sipni/atualizacao/instancia//instancias_7.1.0.update';
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