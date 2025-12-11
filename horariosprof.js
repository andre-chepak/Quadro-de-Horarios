function montarQuadroHorarios(csvText) {
    const linhas = csvText.split("\n");

    linhas.forEach(linha => {
        if (!linha.trim()) return;

        const [dia, disciplina, inicio, fim] = linha.split(";");

        if (!dia || !inicio || !fim) return;

        const intervalo = `${inicio}-${fim}`;

        const linhaTabela = document.querySelector(`tr[data-intervalo="${intervalo}"]`);
        const celula = document.querySelector(`td[data-dia="${dia}"][data-intervalo="${intervalo}"]`)
            || (linhaTabela ? linhaTabela.querySelector(`td[data-dia="${dia}"]`) : null);

        if (linhaTabela && celula) {
            celula.innerHTML = `<strong>${disciplina}</strong><br>${turma}`;
        }
    });
}
