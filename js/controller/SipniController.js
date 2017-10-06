class SipniController {
    constructor() {
        this._versao = new Versao();
        this._versaoView = new VersaoView('#vs-sistema');
        this._versaoView.update(this._versao);
    }
}