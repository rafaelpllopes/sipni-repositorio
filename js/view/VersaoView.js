class VersaoView extends View {
    template(model) {
        return `<div class="container sipni-bannerWrapper">
        <div class="sipni-banner">
            <h2>Ultimas Atualizações</h2>
            <ul id='vs-sistema'>
            <li><a href="#">Aplicação: ${model.app}</a></li>
            <li><a href="#">Banco de dados: ${model.db}</a></li>
            <li><a href="#">Instâncias: ${model.inst}</a></li>
            </ul>
        </div>
    </div>`;
    }
}