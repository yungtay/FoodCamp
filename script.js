function removeBorda(idPai){
    let id= `${idPai}`
    const opcoesBordadas = document.querySelectorAll(`#${id} .borda`);
    if (opcoesBordadas.length > 0) {
    opcoesBordadas[0].classList.remove("borda");
    opcoesBordadas[0].querySelector("ion-icon").style.display = "none";
}
}

function fechou(){
    const opcaoSelecionada = document.querySelectorAll(".borda");
    if (opcaoSelecionada.length > 2){
        document.querySelector(".selecionarFechar").classList.remove("disable");
        document.querySelector(".selecionarFechar").style.background  = "#32B72F";
        document.querySelector(".textoFechamento").innerHTML = "Fechar pedido";
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
    document.querySelector(".telaConfirmarPedido").classList.remove("hide");
    document.querySelector(".antesdeConfirmar").classList.add("opacidade");
}

function cancelar(){
    document.querySelector(".telaConfirmarPedido").classList.add("hide");
    document.querySelector(".antesdeConfirmar").classList.remove("opacidade");

}

function computaPedido(el,idPai){
    if (idPai === "opcoes1"){
        document.querySelector(".prato1").innerHTML = el.querySelector(".nomePrato").innerHTML;
        document.querySelector(".preco1").innerHTML = el.querySelector(".preco").innerHTML;
    }
    else if (idPai === "opcoes2"){
        document.querySelector(".prato2").innerHTML = el.querySelector(".nomePrato").innerHTML;
        document.querySelector(".preco2").innerHTML = el.querySelector(".preco").innerHTML;
    }
    else {
        document.querySelector(".prato3").innerHTML = el.querySelector(".nomePrato").innerHTML;
        document.querySelector(".preco3").innerHTML = el.querySelector(".preco").innerHTML;
    }
}

function total(){
    const total = (Number(document.querySelector(".preco1").innerHTML.replace(",","."))
    + Number(document.querySelector(".preco").innerHTML.replace(",","."))
    + Number(document.querySelector(".preco3").innerHTML.replace(",",".")))

    document.querySelector(".precoTotal").innerHTML = total.toFixed(2).replace(".",",")
}

function nomeEnderecoPedir(){
    const nome = prompt("Olá, qual o seu nome ?")
    const endereco = prompt("Qual o endereço de entrega ?")

    const url = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${document.querySelector(".prato1").innerHTML}
    - Bebida: ${document.querySelector(".prato2").innerHTML}
    - Sobremesa: ${document.querySelector(".prato3").innerHTML}
    Total: R$ ${document.querySelector(".precoTotal").innerHTML}

    Nome: ${nome}
    Endereço: ${endereco}`)

    console.log(decodeURIComponent(url))

    window.location.replace(`https://wa.me/5521988563381?text=${url}`)
}


