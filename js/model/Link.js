class Link {
    constructor(_url, _versao){
        Object.assign(this, {_url, _versao});
        Object.freeze(this);
    }

    get url() {
        return this._url;
    }

    get versao() {
        return this._versao;
    }
}