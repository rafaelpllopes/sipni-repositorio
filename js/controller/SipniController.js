class SipniController {
    constructor() {
        this._versao = new Versao(
            '5.2.0',
            '5.5.1',
            '7.1.0',
            'http://189.44.213.211:8083/sipni/atualizacao/aplicacao//SIPNIInstWin32(5.2.0).zip',
            'http://189.44.213.211:8083/sipni/atualizacao/tabelas//tabelas_5.5.1.update',
            'http://189.44.213.211:8083/sipni/atualizacao/instancia//instancias_7.1.0.update'
        );
        this._listaLinks = new ListaLinks();
        this._listaLinks.adicionar(new Link('http', '1'));
        this._listaLinks.adicionar(new Link('http', '2'));
        this._listaLinks.adicionar(new Link('http', '3'));
        this._listaLinks.adicionar(new Link('http', '4'));
        this._versaoView = new VersaoView('#home');
        this._versaoView.update(this._versao);
        console.log(this._listaLinks.links());
    }
}