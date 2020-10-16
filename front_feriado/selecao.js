function carregainfo(){
    var strUser = localStorage.getItem("userSF");
    if (!strUser){  // se as infos do usuário não existirem no LocalStorage, sinal que não foi logado, volta pro INDEX
        window.location = "index.html";
    }

    var user = JSON.parse(strUser); // só tô convertendo de STRING para OBJETO (pra facilitar)

    var imgUser  = `<img src="${user.linkFoto}" width="100%">`;
    var infoUser = `<h4>${user.nome}</h4>
                    <strong> Funcional: </strong> ${user.funcional} <br>
                    <strong> Email: </strong> ${user.email} <br>
                    <strong> Racf: </strong> ${user.racf}<br>`;

    document.getElementById("fotoUser").innerHTML = imgUser;
    document.getElementById("infoUser").innerHTML = infoUser;

}

function logout(){
    localStorage.removeItem("userSF");
    window.location = "index.html";
}