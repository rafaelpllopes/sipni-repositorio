class LinksService {
    constructor() {
        this._http = new HttpService();
    }

    importeLinksWin32() {
        return this._importeLinks('http://localhost/sipni-repositorio/server/lista.php?pasta=win32');
    }

    importeLinksWin64() {
        return this._importeLinks('http://localhost/sipni-repositorio/server/lista.php?pasta=win64');
    }

    importeLinksLnx64() {
        return this._importeLinks('http://localhost/sipni-repositorio/server/lista.php?pasta=lnx64');
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