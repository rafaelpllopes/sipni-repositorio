class LinksViewApp extends View {
    template(model, title) {
        return `<div class="col-sm-4">
            <section class="jumbotron">
                <div class="container">
                    <h4>${title}</h4>
                    <ul>
                        ${model.links().map(link => 
                            `<li><a href="${link.url}">${link.versao}</a></li>`    
                        ).join('')}
                    </ul>
                </div>
            </section>
        </div>`;
    }

    update(model, title) {
        this._elemento.innerHTML = this.template(model, title);
    }
}