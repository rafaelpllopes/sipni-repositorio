class ListaLinks {
    constructor(){
        this._links = [];
        Object.freeze(this);
    }

    adicionar(links) {
        this._links.push(links);
    }

    links() {
        return [].concat(this._links);
    }
}