class LinksView extends View {
    template(model, title) {
        return `<section class='col-sm-4'>
        <h3>${title}</h3>
        <section class="jumbotron">
            <div class="container">
                <ul>
                ${model.links().map(link => 
                    `<li><a href="${link.url}">${link.versao}</a></li>`    
                ).join('')}
                </ul>
            </div>
        </section>
    </section>`;
    }

    update(model, title) {
        this._elemento.innerHTML = this.template(model, title);
    }
}