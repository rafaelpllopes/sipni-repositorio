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
        this._linkService = new LinksService();
    }

    importaLinks(){   
        this._importa(this._linkService.importeLinksWin32(), this._listaLinksWin32, this._linksWin32View, 'Windows 32 Bits');
        this._importa(this._linkService.importeLinksWin64(), this._listaLinksWin64, this._linksWin64View, 'Windows 64 Bits');
        this._importa(this._linkService.importeLinksLnx64(), this._listaLinksLnx64, this._linksLnx64View, 'Linux 64 Bits');
    }

    _importa(service, lista, view, title=undefined) {
        service
        .then(links => { 
            links.forEach(link => lista.adicionar(new Link(link.url, link.versao)));
            if(title) {
                view.update(lista, title);
            } else {
                view.update(lista);
            }
        })
        .catch(err=> console.log(err));
    }
}