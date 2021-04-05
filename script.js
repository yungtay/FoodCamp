function removeBorda(idPai){
    let id= `${idPai}`
    const opcoesBordadas = document.querySelector(`#${id} .borda`);
    if (opcoesBordadas !== null) {
    opcoesBordadas.classList.remove("borda");
    opcoesBordadas.querySelector("ion-icon").style.display = "none";
}
}

function fechou(){
    const opcaoSelecionada = document.querySelectorAll(".borda");
    if (opcaoSelecionada.length > 2){
        document.querySelector(".selecionar-fechar").classList.remove("disable");
        document.querySelector(".selecionar-fechar").style.background  = "#32B72F";
        document.querySelector(".texto-fechamento").innerHTML = "Fechar pedido";
    }
}

function ligaDesliga(el){
const idPai = el.parentNode.id;
removeBorda(idPai);
el.classList.add("borda");
el.querySelector("ion-icon").style.display = "initial";
fechou();
computaPedido(el,idPai)
total();
}

function avancarConfirmacao(){
    document.querySelector(".tela-confirmar-pedido").classList.remove("escondido");
    document.querySelector(".antes-confirmar").classList.add("opacidade");
}

function cancelar(){
    document.querySelector(".tela-confirmar-pedido").classList.add("escondido");
    document.querySelector(".antes-confirmar").classList.remove("opacidade");

}

function computaPedido(el,idPai){
    if (idPai === "opcoes1"){
        document.querySelector(".item1").innerHTML = el.querySelector(".nome-item").innerHTML;
        document.querySelector(".preco1").innerHTML = el.querySelector(".preco").innerHTML;
    }
    else if (idPai === "opcoes2"){
        document.querySelector(".item2").innerHTML = el.querySelector(".nome-item").innerHTML;
        document.querySelector(".preco2").innerHTML = el.querySelector(".preco").innerHTML;
    }
    else {
        document.querySelector(".item3").innerHTML = el.querySelector(".nome-item").innerHTML;
        document.querySelector(".preco3").innerHTML = el.querySelector(".preco").innerHTML;
    }
}

function total(){
    const total = (Number(document.querySelector(".preco1").innerHTML.replace(",","."))
    + Number(document.querySelector(".preco2").innerHTML.replace(",","."))
    + Number(document.querySelector(".preco3").innerHTML.replace(",",".")))

    document.querySelector(".precoTotal").innerHTML = "R$ " + total.toFixed(2).replace(".",",")
}

function nomeEnderecoPedir(){
    const nome = prompt("Olá, qual o seu nome ?")
    const endereco = prompt("Qual o endereço de entrega ?")

    const url = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${document.querySelector(".item1").innerHTML}
    - Bebida: ${document.querySelector(".item2").innerHTML}
    - Sobremesa: ${document.querySelector(".item3").innerHTML}
    Total: R$ ${document.querySelector(".precoTotal").innerHTML}

    Nome: ${nome}
    Endereço: ${endereco}`)

    console.log(decodeURIComponent(url))

    window.location.replace(`https://wa.me/5521988563381?text=${url}`)
}


