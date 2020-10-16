function carregainfocadastro(){
    var userStr = localStorage.getItem("userSF");
    if (!userStr){
        window.location = "index.html";
    }

    fetch("http://localhost:8088/agencias")
       .then(res => res.json())
       .then(lista => preencheComboBox(lista))
}

function preencheComboBox(lista){

    var txtCombo = `<select id="txtAgencia" class="form-control">`;

    for (i=0; i<lista.length; i++){
        var agencia = lista[i];
        txtCombo = txtCombo + `<option value=${agencia.id}>${agencia.numero} - ${agencia.nome}</option>`;
    }
    txtCombo = txtCombo + `</select>`;
    document.getElementById("divAgencia").innerHTML = txtCombo;
}

function cadastrarFeriado(){
    var txtAgencia = document.getElementById("txtAgencia").value;
    var txtNome    = document.getElementById("txtNome").value;
    var txtDataIni = document.getElementById("txtDataInicial").value;
    var txtDataFim = document.getElementById("txtDataFim").value;

    var msgBody = {
        nome : txtNome,
        dataInicio : txtDataIni,
        dataFim    : txtDataFim,
        agencia : {
            id : parseInt(txtAgencia)
        }
    };

    var cabecalho = {
        method : "POST",
        body   : JSON.stringify(msgBody),
        headers : {
            "content-type" : "application/json"
        }
    };

    fetch("http://localhost:8088/feriados/novo", cabecalho)
        .then(res => trataResultado(res));
}

function trataResultado(res){
    if (res.status == 201) {
        alert("Feriado Cadastrado com sucesso!");
    }
    else{
        alert("ERRO ao cadastrar Feriado!");
    }
}


function logoutcadastro(){
    localStorage.removeItem("userSF");
    window.location = "index.html";
}