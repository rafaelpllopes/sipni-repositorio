class SipniController {
    constructor() {
        this._ultimaVersaoApp = '';
        this._ultimaVersaoAppUrl = '';
        this._ultimaVersaoDb = '';
        this._ultimaVersaoDbUrl = '';
        this._ultimaVersaoInst = '';
        this._ultimaVersaoInstUrl = '';
        this._versaoView = new VersaoView('#home');
        
        this._listaLinksWin32 = new ListaLinks();
        this._linksWin32View = new LinksViewApp('#win32');

        this._listaLinksWin64 = new ListaLinks();
        this._linksWin64View = new LinksViewApp('#win64');

        this._listaLinksLnx64 = new ListaLinks();
        this._linksLnx64View = new LinksViewApp('#lnx64');

        this._linksBd = new ListaLinks();
        this._linksBdView = new LinksView('#database');

        this._linksInst = new ListaLinks();
        this._linksInstView = new LinksView('#instancias');

        this._linksBairros = new ListaLinks();
        this._linksBairrosView = new LinksView('#bairros');
        
        this._linksUteis = new ListaLinks();
        this._linksUteisView = new LinksView('#uteis');

        this._linkService = new LinksService();
    }

    importaLinks(){   
        this._importa(this._linkService.importeLinksWin32(), this._listaLinksWin32, this._linksWin32View, 'Windows 32 Bits');
        this._importa(this._linkService.importeLinksWin64(), this._listaLinksWin64, this._linksWin64View, 'Windows 64 Bits');
        this._importa(this._linkService.importeLinksLnx64(), this._listaLinksLnx64, this._linksLnx64View, 'Linux 64 Bits');
        this._importa(this._linkService.importeDB(), this._linksBd, this._linksBdView, 'Banco de Dados');
        this._importa(this._linkService.importeInst(), this._linksInst, this._linksInstView, 'Instancias');
        this._importa(this._linkService.importeBairros(), this._linksBairros, this._linksBairrosView, 'Bairros');
        this._importa(this._linkService.importeUteis(), this._linksUteis, this._linksUteisView, 'Uteis');
    }

    _importa(service, lista, view, title=undefined) {
        service
        .then(links => { 
            links.forEach(link => lista.adicionar(new Link(link.url, link.versao)));
            if(title) {
                view.update(lista, title);
                if(title == 'Windows 32 Bits'){
                    this._ultimaVersaoApp = lista.links()[0].versao;
                    this._ultimaVersaoAppUrl = lista.links()[0].url;
                }

                if(title == 'Banco de Dados') {
                    this._ultimaVersaoDb = lista.links()[0].versao;;
                    this._ultimaVersaoDbUrl = lista.links()[0].url;
                }

                if(title == 'Instancias') {
                    this._ultimaVersaoInst = lista.links()[0].versao;;
                    this._ultimaVersaoInstUrl = lista.links()[0].url;
                    this._ultimasAtualizacoes();
                }

            } else {
                view.update(lista);
            }
        })
        .catch(err=> console.log(err));
    }

    _ultimasAtualizacoes() {
        setTimeout(() => {
            this._versao = new Versao(
                this._ultimaVersaoApp,
                this._ultimaVersaoDb,
                this._ultimaVersaoInst,
                this._ultimaVersaoAppUrl,
                this._ultimaVersaoDbUrl,
                this._ultimaVersaoInstUrl
            );
            this._versaoView.update(this._versao);
        }, 500);
    }
}