class VersaoView extends View {
    template(model) {
        return `<div class="container sipni-bannerWrapper">
        <div class="sipni-banner">
            <h2>Sipni repositório</h2>
            <h3>Ultimas atualizações</h3>
            <ul id='vs-sistema'>
                <li><a href="${model.urlApp}">Aplicação: ${model.app}</a></li>
                <li><a href="${model.urlDb}">Banco de dados: ${model.db}</a></li>
                <li><a href="${model.urlInst}">Instâncias: ${model.inst}</a></li>
            </ul>
        </div>
    </div>`;
    }
}