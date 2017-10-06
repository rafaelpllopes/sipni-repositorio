class VersaoView extends View {
    template(model) {
        return `<li>Aplicação: ${model.app}</li>
        <li>Banco de dados: ${model.db}</li>
        <li>Instâncias: ${model.inst}</li>`;
    }
}