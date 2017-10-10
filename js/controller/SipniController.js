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
        this._listaLinksWin32 = new ListaLinks();
        this._listaLinksWin64 = new ListaLinks();
        this._listaLinksLnx64 = new ListaLinks();
        this._versaoView = new VersaoView('#home');
        this._linksWin32View = new LinksViewApp('#win32');
        this._linksWin64View = new LinksViewApp('#win64');
        this._linksLnx64View = new LinksViewApp('#lnx64');
        this._versaoView.update(this._versao);
    }

    importaLinks(){
        this._listaLinksWin32.adicionar(new Link('http://189.44.213.211:8083/sipni/atualizacao/aplicacao//SIPNIInstWin32(5.2.0).zip', '5.2.0'));
        this._listaLinksWin32.adicionar(new Link('#', 'Teste1'));
        this._listaLinksWin32.adicionar(new Link('#', 'Teste2'));
        this._listaLinksWin32.adicionar(new Link('#', 'Teste3'));
        this._linksWin32View.update(this._listaLinksWin32, 'Windows 32 Bits');
        this._listaLinksWin64.adicionar(new Link('http://189.44.213.211:8083/sipni/atualizacao/aplicacao//SIPNIInstWin64(5.2.0).zip', '5.2.0'));
        this._listaLinksWin64.adicionar(new Link('#', 'Teste1'));
        this._listaLinksWin64.adicionar(new Link('#', 'Teste2'));
        this._listaLinksWin64.adicionar(new Link('#', 'Teste3'));
        this._linksWin64View.update(this._listaLinksWin64, 'Windows 64 Bits');
        this._listaLinksLnx64.adicionar(new Link('http://189.44.213.211:8083/sipni/atualizacao/aplicacao//SIPNIInstLnx64(5.2.0).jar', '5.2.0'));
        this._listaLinksLnx64.adicionar(new Link('#', 'Teste1'));
        this._listaLinksLnx64.adicionar(new Link('#', 'Teste2'));
        this._listaLinksLnx64.adicionar(new Link('#', 'Teste3'));
        this._linksLnx64View.update(this._listaLinksLnx64, 'Linux 64 Bits');
    }
}