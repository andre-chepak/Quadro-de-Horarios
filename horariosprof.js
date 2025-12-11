function montarQuadroHorarios(csvText) {
  const linhas = csvText.split('\n').filter(linha => linha.trim() !== '');
  
  linhas.forEach(linha => {
    const [dia, turma, disciplina, inicio, fim] = linha.split(';');
    if (!dia || !inicio || !fim) return;

    const intervalo = `${inicio}-${fim}`;
    const tr = document.querySelector(`tr[data-intervalo="${intervalo}"]`);
    if (!tr) return;

    const td = tr.querySelector(`td[data-dia="${dia}"]`);
    if (!td) return;

    td.textContent = `${disciplina} (${turma})`;
  });
}
