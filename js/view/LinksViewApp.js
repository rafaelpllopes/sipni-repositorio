class LinksViewApp extends View {
    template(model, title) {
        return `
        <div class="col-sm-4">
            <section class="jumbotron">
                <div class="container">
                    <h4>${title}</h4>
                    <ul>
                        ${model.links().map(link => `<li><a href="${link.urlApp}">${link.url}</a></li>`).join()}
                    </ul>
                </div>
            </section>
        </div>
        `;
    }
}