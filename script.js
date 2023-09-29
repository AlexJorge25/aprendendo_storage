var Banco = []
function Gravar() {
    var Nome = document.getElementById("Nome").value
    var Email = document.getElementById("Email").value
    var Senha = document.getElementById("Senha").value
    if (Nome !== "" && Email !== "" && Senha !== "") {
        var bancoDados = {
            nome: Nome,
            email: Email,
            senha: Senha
        };
        var dadosArmazenados = localStorage.getItem('user');
        if (dadosArmazenados) {
            Banco = JSON.parse(dadosArmazenados);
            Banco.push(bancoDados);
            document.getElementById("Nome").value = ""
            document.getElementById("Email").value = ""
            document.getElementById("Senha").value = ""
        } else {
            Banco = [bancoDados];
            document.getElementById("Nome").value = ""
            document.getElementById("Email").value = ""
            document.getElementById("Senha").value = ""
        }
        localStorage.setItem('user', JSON.stringify(Banco))
    }
    else {
        alert("Cadastro vazio")
    }
}
function Logar() {
    var Banco = localStorage.getItem('user')
    Banco = JSON.parse(Banco);
    var Nome = document.getElementById("NomeL").value
    var Email = document.getElementById("EmailL").value
    var Senha = document.getElementById("SenhaL").value
    if (Nome !== "" && Email !== "" && Senha !== "") {
        for (var x = 0; x < Banco.length; x++) {
            var objeto = Banco[x]
            console.log(Banco)
            if (objeto.nome == Nome && objeto.email == Email && objeto.senha == Senha) {
                alert("Voce Logou")
                document.getElementById("NomeL").value = ""
                document.getElementById("EmailL").value = ""
                document.getElementById("SenhaL").value = ""
            }
            else {
                alert("Voce não se cadastro")
                document.getElementById("NomeL").value = ""
                document.getElementById("EmailL").value = ""
                document.getElementById("SenhaL").value = ""
            }
        }
    }

}
var form1 = document.getElementById("forms1");

form1.addEventListener("submit", function (event) {
    event.preventDefault();
});

var form2 = document.getElementById("forms2");

form2.addEventListener("submit", function (event) {
    event.preventDefault();
});