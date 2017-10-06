class SipniController {
    constructor() {
        this._versao = new Versao();
        this._versaoView = new VersaoView('#home');
        this._versaoView.update(this._versao);
    }
}