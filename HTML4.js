let contato = [
  {
    nome: "Maxwell Wright",
    telefone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
  },
  {
    nome: "Raja Villarreal",
    telefone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
  },
  {
    nome: "Helen Richards",
    telefone: "0800 1111",
    email: "libero@convallis.edu"
  }
];

let sair = false;

while (!sair) {
  let comando = prompt(
    "Escolha uma opção:\n" +
    "primeiro\n" +
    "ultimo\n" +
    "todos\n" +
    "novo\n" +
    "encerrar"
  );

  let result = "";

  switch (comando) {
    case "primeiro":
      result =
        "nome: " + contato[0].nome +
        ", telefone: " + contato[0].telefone +
        ", email: " + contato[0].email;
      alert(result);
      break;

    case "ultimo":
      let ultimoIndice = contato.length - 1;
      result =
        "nome: " + contato[ultimoIndice].nome +
        ", telefone: " + contato[ultimoIndice].telefone +
        ", email: " + contato[ultimoIndice].email;
      alert(result);
      break;

    case "todos":
      result = "";
      for (let i = 0; i < contato.length; i++) {
        result +=
          (i + 1) + ")\n" +
          "nome: " + contato[i].nome +
          ", telefone: " + contato[i].telefone +
          ", email: " + contato[i].email + "\n\n";
      }
      alert(result);
      break;

    case "novo":
      let novonome = prompt("Digite o seu nome:");
      let novotelefone = prompt("Digite o seu telefone:");
      let novoemail = prompt("Digite o seu e-mail:");

      if (novonome && novotelefone && novoemail) {
        let novocontato = {
          nome: novonome,
          telefone: novotelefone,
          email: novoemail
        };
        contato.push(novocontato);

        alert(
          "Novo contato adicionado:\n" +
          "nome: " + novonome +
          ", telefone: " + novotelefone +
          ", email: " + novoemail
        );
      } else {
        alert("Erro: preencha Nome, Telefone e Email corretamente");
      }
      break;

    case "encerrar":
      sair = true;
      alert("Programa encerrado");
      break;

    default:
      alert("Comando inválido");
  }
}
