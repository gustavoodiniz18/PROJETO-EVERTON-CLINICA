// main.js 

// Lógica de login
function login() {
    const tipoUsuario = document.getElementById("tipo_usuario").value;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (tipoUsuario && usuario && senha) {
        // Exibir mensagem de sucesso e redirecionar
        document.getElementById("login-success").classList.remove("d-none");
        document.getElementById("login-fail").classList.add("d-none");

        // Redirecionar com base no tipo de usuário
        switch (tipoUsuario) {
            case 'admin':
                window.location.href = "admin.html";
                break;
            case 'funcionario':
                window.location.href = "funcionario.html";
                break;
            case 'medico':
                window.location.href = "medico.html";
                break;
        }
    } else {
        // Exibir mensagem de erro
        document.getElementById("login-fail").classList.remove("d-none");
        document.getElementById("login-success").classList.add("d-none");
    }
}

// Função para cadastrar um usuário
function cadastrarUsuario() {
    const tipoUsuario = document.getElementById("tipo_usuario_cadastro").value;
    const crm = document.getElementById("crm").value;
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("data_nascimento").value;
    const telefone = document.getElementById("telefone").value;

    if (tipoUsuario && nome && cpf && dataNascimento && telefone) {
        const usuario = { tipoUsuario, crm, nome, cpf, dataNascimento, telefone };

        // Salvar usuário no localStorage
        let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
        usuarios.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        // Exibir mensagem de sucesso e resetar o formulário
        document.getElementById("user-success").classList.remove("d-none");
        document.getElementById("cadastro-usuario").reset();
        atualizarListaUsuarios();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

// Função para atualizar a tabela de usuários
function atualizarListaUsuarios() {
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const listaUsuarios = document.getElementById("lista-usuarios");
    listaUsuarios.innerHTML = "";

    usuarios.forEach(usuario => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${usuario.tipoUsuario}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.tipoUsuario === 'medico' ? usuario.crm : 'N/A'}</td>
            <td>${usuario.cpf}</td>
            <td>${usuario.dataNascimento}</td>
            <td>${usuario.telefone}</td>
        `;
        listaUsuarios.appendChild(row);
    });
}

// Função para cadastrar paciente
function cadastrarPaciente() {
    const nome = document.getElementById("nome_paciente").value;
    const dataNascimento = document.getElementById("data_nascimento_paciente").value;
    const cpf = document.getElementById("cpf_paciente").value;

    if (nome && dataNascimento && cpf) {
        const paciente = { nome, dataNascimento, cpf };

        let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
        pacientes.push(paciente);
        localStorage.setItem("pacientes", JSON.stringify(pacientes));

        alert("Paciente cadastrado com sucesso!");
        document.getElementById("cadastro-paciente").reset();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

// Função para agendar consulta
function agendarConsulta() {
    const nomeMedico = document.getElementById("nome_medico").value;
    const nomeFuncionario = document.getElementById("nome_funcionario").value;
    const dataConsulta = document.getElementById("data_consulta").value;
    const horaConsulta = document.getElementById("hora_consulta").value;
    const tipoPagamento = document.getElementById("tipo_pagamento").value;
    const convenio = document.getElementById("convenio").value;

    if (nomeMedico && nomeFuncionario && dataConsulta && horaConsulta && tipoPagamento) {
        const consulta = { nomeMedico, nomeFuncionario, dataConsulta, horaConsulta, tipoPagamento, convenio };

        let consultas = JSON.parse(localStorage.getItem("consultas")) || [];
        consultas.push(consulta);
        localStorage.setItem("consultas", JSON.stringify(consultas));

        alert("Consulta agendada com sucesso!");
        document.getElementById("cadastro-consulta").reset();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

// Função para registrar consulta do médico
function registrarConsulta() {
    const nomePaciente = document.getElementById("nome_paciente_consulta").value;
    const idade = document.getElementById("idade_paciente_consulta").value;
    const descricaoProblema = document.getElementById("descricao_problema").value;

    if (nomePaciente && idade && descricaoProblema) {
        const consultaRegistro = { nomePaciente, idade, descricaoProblema };

        let registros = JSON.parse(localStorage.getItem("consultas_registradas")) || [];
        registros.push(consultaRegistro);
        localStorage.setItem("consultas_registradas", JSON.stringify(registros));

        alert("Consulta registrada com sucesso!");
        document.getElementById("registro-consulta").reset();
        atualizarListaConsultas();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}

// Função para mostrar o campo "Convênio" se o pagamento for por convênio
function mostrarCampoConvenio() {
    const tipoPagamento = document.getElementById("tipo_pagamento").value;
    const campoConvenio = document.getElementById("campo-convenio");

    if (tipoPagamento === "convenio") {
        campoConvenio.classList.remove("d-none");
    } else {
        campoConvenio.classList.add("d-none");
    }
}

// Função para atualizar lista de consultas registradas
function atualizarListaConsultas() {
    const registros = JSON.parse(localStorage.getItem("consultas_registradas")) || [];
    const listaConsultas = document.getElementById("lista-consultas");
    listaConsultas.innerHTML = "";

    registros.forEach(registro => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${registro.nomePaciente}</td>
            <td>${registro.idade}</td>
            <td>${registro.descricaoProblema}</td>
        `;
        listaConsultas.appendChild(row);
    });
}

// Executa atualizações de tabelas quando as páginas são carregadas
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("lista-usuarios")) {
        atualizarListaUsuarios();
    }
    if (document.getElementById("lista-consultas")) {
        atualizarListaConsultas();
    }
});
