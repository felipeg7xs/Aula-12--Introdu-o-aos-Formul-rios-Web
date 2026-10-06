/* Descricao: Aula 12 reproduzir uma tela de login com usuario e senha!
// nome_arquivo: login.html
// nome_exercicio: Aula 12 - Introdução aos formulários
// nome_aluno: Felipe Gabriel de Oliveira
// email_aluno:felipe.oliveira139@aluno.cps.sp.gov.br
// turma: primeiro semestre Código da Turma: WEBIISWO28a //
*/

function fazerLogin(){
    let usuario =
    document.getElementbyid ("usuario").value;
    let senha= 
    document.getElementbyid("senha").value

    if (usuario ==="admin" && senha === "1234") {
        alert("Login realizado com sucesso!");
    } else {
        alert("Usuário ou senha incorretos!");
    }
}