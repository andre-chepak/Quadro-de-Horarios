function montarQuadroHorarios(csvText) {
    const linhas = csvText.split("\n").slice(1); // ignora cabeçalho

    linhas.forEach(linha => {
        if (!linha.trim()) return;

        const [dia, turma, disciplina, inicio, fim] = linha.split(";");

        const intervalo = `${inicio}-${fim}`;

        const tr = document.querySelector(`tr[data-intervalo="${intervalo}"]`);
        if (!tr) return;

        const td = tr.querySelector(`td[data-dia="${dia}"]`);
        if (!td) return;

        td.innerHTML = `
            <div class="disciplina">${disciplina}</div>
            <div class="turma">Turma: ${turma}</div>
        `;
    });
}
