// Array para armazenar as tarefas
let tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa(descricao) {
    if (descricao) {
        tarefas.push({ descricao, concluida: false });
        console.log("Tarefa adicionada com sucesso!");
    } else {
        console.log("Erro: A descrição da tarefa não pode estar vazia.");
    }
}

// Função para listar todas as tarefas cadastradas
function listarTarefas() {
    console.log("Tarefas cadastradas:");
    tarefas.forEach((tarefa, index) => {
        const status = tarefa.concluida ? "Concluída" : "Pendente";
        console.log(`${index + 1}. ${tarefa.descricao} - ${status}`);
    });
}

// Função para remover uma tarefa específica
function removerTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas.splice(indice, 1);
        console.log("Tarefa removida com sucesso!");
    } else {
        console.log("Erro: Índice inválido.");
    }
}

// Função para marcar uma tarefa como concluída
function concluirTarefa(indice) {
    if (indice >= 0 && indice < tarefas.length) {
        tarefas[indice].concluida = true;
        console.log("Tarefa concluída com sucesso!");
    } else {
        console.log("Erro: Índice inválido.");
    }
}

// Exemplo de uso das funções
adicionarTarefa("Estudar JavaScript");
adicionarTarefa("Fazer compras");
listarTarefas();
concluirTarefa(0);
listarTarefas();
removerTarefa(1);
listarTarefas();
