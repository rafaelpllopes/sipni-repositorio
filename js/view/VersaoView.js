class VersaoView extends View {
    template(model) {
        return `<li><a href="#">Aplicação: ${model.app}</a></li>
        <li><a href="#">Banco de dados: ${model.db}</a></li>
        <li><a href="#">Instâncias: ${model.inst}</a></li>`;
    }
}