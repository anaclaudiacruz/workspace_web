function carregaInfoRelatorio() {
    var userStr = localStorage.getItem("userSF");
    if (!userStr) {
        window.location = "index.html";
    }

    fetch("http://localhost:8088/agencias")
        .then(res => res.json())
        .then(lista => preencheComboBox(lista))
}

function preencheComboBox(lista) {

    var txtCombo = `<select id="txtAgencia" class="form-control">`;
    txtCombo = txtCombo + `<option value="-1"> TODOS OS FERIADOS </option>`;
    for (i = 0; i < lista.length; i++) {
        var agencia = lista[i];

//        txtCombo = txtCombo + `<option value=${agencia.id}>${agencia.numero} - ${agencia.nome}</option>`;
        if (agencia.numero == 0) {
             txtCombo = txtCombo + `<option value=${agencia.id}>Feriados Nacionais</option>`;
        } else {
            txtCombo = txtCombo + `<option value=${agencia.id}>${agencia.numero} - ${agencia.nome}</option>`;
        }

    }
    txtCombo = txtCombo + `</select>`;
    document.getElementById("divAgencia").innerHTML = txtCombo;
}


function recuperarRelatorio() {
    var url = "http://localhost:8088/feriados";

    var idAgencia = document.getElementById("txtAgencia").value;
    if (idAgencia > 0) { // filtrei pelo id da agencia  - se for -1 eu recupero todos os feriados (já descrito na url)
        url = url + "/agencia/" + idAgencia;
    }

    fetch(url)
        .then(res => res.json())
        .then(lista => preencheRelatorio(lista));
}

function preencheRelatorio(lista) {

    if (lista.length == 0) {
        document.getElementById("relatorio").innerHTML = "Não existem feriados específicos desta agencia cadastrados";
        return;
    }

    var rel = "";
    var classe = "linhaPar"

    rel = rel + `<strong> <div class="row linhaCabecalho"> 
    <div class="col-2"> Data Início </div>
    <div class="col-2"> Data Fim </div>
    <div class="col-4"> Nome do Feriado </div>
    <div class="col-4"> Agência </div> 
    </div></strong>`;


    for (i = 0; i < lista.length; i++) {
        var feriado = lista[i];
        if (i % 2 == 0) {
            classe = "linhaPar";
        }
        else {
            classe = "linhaImpar";
        }

/*        
 //       console.log(feriado.agencia.numero);
*/
        if (feriado.agencia.numero == 0) {
            rel = rel + `<div class="row  ${classe}">
            <div class="col-2"> ${formataData(feriado.dataInicio)} </div>
            <div class="col-2"> ${formataData(feriado.dataFim)} </div>
            <div class="col-4"> ${feriado.nome} </div>
            <div class="col-4"> Feriado Nacional </div>
       </div>`;

        } else {
            rel = rel + `<div class="row  ${classe}">
            <div class="col-2"> ${formataData(feriado.dataInicio)} </div>
            <div class="col-2"> ${formataData(feriado.dataFim)} </div>
            <div class="col-4"> ${feriado.nome} </div>
            <div class="col-4"> ${feriado.agencia.numero} - ${feriado.agencia.nome} </div>
       </div>`;

        }
/*
        rel = rel + `<div class="row  ${classe}">
                             <div class="col-2"> ${formataData(feriado.dataInicio)} </div>
                             <div class="col-2"> ${formataData(feriado.dataFim)} </div>
                             <div class="col-4"> ${feriado.nome} </div>
                             <div class="col-4"> ${feriado.agencia.numero} - ${feriado.agencia.nome} </div>
                        </div>`;

*/
    }
    document.getElementById("relatorio").innerHTML = rel;



}

function formataData(dataOriginal) {
    var ano = dataOriginal.substr(0, 4);
    var mes = dataOriginal.substr(5, 2);
    var dia = dataOriginal.substr(8, 2);

    // console.log(dia+'/'+mes+'/'+ano);

    return dia + "/" + mes + "/" + ano;
}


function logoutrelatorio(){
    localStorage.removeItem("userSF");
    window.location = "index.html";
}