class LinksService {
    constructor() {
        this._http = new HttpService();
    }

    importeLinksWin32() {
        return this._importeLinks('');
    }

    importeLinksWin64() {
        return this._importeLinks('');
    }

    importeLinksLnx64() {
        return this._importeLinks('');
    }

    _importeLinks(url) {
        return this._http
            .get(url)
            .then(
                dados => {
                    const links = dados.map(objeto =>
                        new Link(objeto.url, objeto.versao));	
                    return  links;
                },
                err => {
                    throw new Error('')
                }
            );
    }
}