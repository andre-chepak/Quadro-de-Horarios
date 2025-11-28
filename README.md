<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <title>Quadro de Horário</title>
        <!-- CSS externo -->
        <link rel="stylesheet" href="../styles/style_horario.css">
    </head>
    <body>
        <h1>Quadro de Horários do Professor Domenico</h1>
        <table id="quadro-horarios">
            <thead>
            <tr>
                <th>Horário</th>
                <th>Segunda</th>
                <th>Terça</th>
                <th>Quarta</th>
                <th>Quinta</th>
                <th>Sexta</th>
                <th>Sábado</th>
            </tr>
            </thead>
            <tbody>
                <!-- Cada linha representa um intervalo fixo -->
                <tr data-intervalo="10:00-12:00">
                        <th class="hora">
                        07h30 - 09h30<br>
                        <span class="rotulo">Turma:</span><br>
                        <span class="rotulo">Sala:</span>
                        </th>
                        <td data-dia="Segunda-feira"></td>
                        <td data-dia="Terça-feira"></td>
                        <td data-dia="Quarta-feira"></td>
                        <td data-dia="Quinta-feira"></td>
                        <td data-dia="Sexta-feira"></td>
                        <td data-dia="Sábado"></td>
                </tr>

                <tr data-intervalo="10:00-12:00">
                        <th class="hora">
                        10h00 - 12h00<br>
                        <span class="rotulo">Turma:</span><br>
                        <span class="rotulo">Sala:</span>
                        </th>
                        <td data-dia="Segunda-feira"></td>
                        <td data-dia="Terça-feira"></td>
                        <td data-dia="Quarta-feira"></td>
                        <td data-dia="Quinta-feira"></td>
                        <td data-dia="Sexta-feira"></td>
                        <td data-dia="Sábado"></td>
                </tr>

                <tr data-intervalo="10:00-12:00">
                        <th class="hora">
                        10h00 - 12h00<br>
                        <span class="rotulo">Turma:</span><br>
                        <span class="rotulo">Sala:</span>
                        </th>
                        <td data-dia="Segunda-feira"></td>
                        <td data-dia="Terça-feira"></td>
                        <td data-dia="Quarta-feira"></td>
                        <td data-dia="Quinta-feira"></td>
                        <td data-dia="Sexta-feira"></td>
                        <td data-dia="Sábado"></td>
                </tr>

                <tr data-intervalo="10:00-12:00">
                        <th class="hora">
                        10h00 - 12h00<br>
                        <span class="rotulo">Turma:</span><br>
                        <span class="rotulo">Sala:</span>
                        </th>
                        <td data-dia="Segunda-feira"></td>
                        <td data-dia="Terça-feira"></td>
                        <td data-dia="Quarta-feira"></td>
                        <td data-dia="Quinta-feira"></td>
                        <td data-dia="Sexta-feira"></td>
                        <td data-dia="Sábado"></td>
                </tr>

                <tr data-intervalo="10:00-12:00">
                        <th class="hora">
                        10h00 - 12h00<br>
                        <span class="rotulo">Turma:</span><br>
                        <span class="rotulo">Sala:</span>
                        </th>
                        <td data-dia="Segunda-feira"></td>
                        <td data-dia="Terça-feira"></td>
                        <td data-dia="Quarta-feira"></td>
                        <td data-dia="Quinta-feira"></td>
                        <td data-dia="Sexta-feira"></td>
                        <td data-dia="Sábado"></td>
                </tr>

                <tr data-intervalo="10:00-12:00">
                        <th class="hora">
                        10h00 - 12h00<br>
                        <span class="rotulo">Turma:</span><br>
                        <span class="rotulo">Sala:</span>
                        </th>
                        <td data-dia="Segunda-feira"></td>
                        <td data-dia="Terça-feira"></td>
                        <td data-dia="Quarta-feira"></td>
                        <td data-dia="Quinta-feira"></td>
                        <td data-dia="Sexta-feira"></td>
                        <td data-dia="Sábado"></td>
                </tr>
            </tbody>
        </table>
        <script src="../scripts/horario_prof.js"></script>
    </body>
</html>