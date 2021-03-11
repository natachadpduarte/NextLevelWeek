function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")//variavel.pegaar select para ser populado

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //promessa que irá buscar algo nesse caminho
    .then (res => res.json() ) //função anonima que retona uma resposta do link acima e inputa em res.json. nesse caso é o caminho certp. catch é para informar se algo deu errado
    .then( states => {

    //Faremos um laço de repetição com for, um laço simples. ele pega os 27 estados que tem dentro do json (states) e coloca na variavel state, assim vai fazendo o laço de repetição
    for (const state of states) //lembrar que cada states tem propriedades, id, nome et
    {
       ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>` //inner propriedade de elementos html e dentro dele posso colocar html, ex option
      //acima, concatenamos o que ja temos dentro do uf select la no html (selecione um valor) + a opção valor acima   
    }
  })
}

populateUFs()





//pegue as cidades...pegando o evento la embaixo eventlistener
function getCities(event) {
  const citySelect = document.querySelector("[name=city]") //pegando no html esses campos ... tambem poderia deixar como "select[name=city]"
  const stateInput = document.querySelector("[name=state]") //tambem poderia deixar como "input[name=state]"  
  const ufValue = event.target.value //cada vez que muda o valor do select do uf ele carrega as cidades. event = change, target é onde o evento foi executado, no caso no campo ud, value = cada vez que muda os select do uf (estados) ele muda o valor
  
  const indexOfSelectedState = event.target.selectedIndex //assim ele me fala qual o numero do selected index
  stateInput.value = event.target.options[indexOfSelectedState].text //pegar as opções da variavel declarada acima.pegar posição que foi selecionada.qual index do numero selecionado.toda vez que o get city é alterado (campo uf), iremos mudar o imput. toda vez o value sera atualizado com nosso event.target.option .. pegou os options la do select atraves do index posição dentro do array de estados. sabe o value do que foi selecionado, por isso usamos.text
  

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` //interpolei, porque quero pegar a variavel.pegando variavel da const

  citySelect.innerHTML = "<option value>Selecione a cidade</option>"  //antes de fazer a chamada, limpo todos os options deste select , antes de entrar em um novo
  citySelect.disabled = true //vou limpar o campo acima e desabilita-lo novamente
  
  fetch(url) //promessa que irá buscar algo nesse caminho
  .then (res => res.json() ) //função anonima que retona uma resposta do link acima e inputa em res.json
  .then(cities => {

    

  //Faremos um laço de repetição com for, um laço simples. ele pega os 27 estados que tem dentro do json (states) e coloca na variavel state, assim vai fazendo o laço de repetição
  for (const city of cities) {
     citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>` //inner propriedade de elementos html e dentro dele posso colocar html, ex option
    //acima, concatenamos o que ja temos dentro do uf select la no html (selecione um valor) + a opção valor acima   
  }

  citySelect.disabled = false //declaramos agora como falso, pois no html tinhamos colocado como disabled. entao depois que ele realiza a change depois de fazer o preenchimento ele ai entao libera o select das cidades
  })
}

//console.log("mudei") //roda a função de cima que aoresenta no console log. o evento acima é de change no campo uf

document
    .querySelector("select[name=uf]") //Estamos pegando o campo do html com o nome name = uf
    .addEventListener("change", getCities) //Quando o estado sofrer uma mudança, o campo da cidade será populado
      //.addEventListener("change", () => { //ouvidor de eventos. evento quando a pagina muda, quando ela carrega, etc. Quando pegava so estados   
       // console.log("mudei") //roda a função de cima que aoresenta no console log. o evento acima é de change no campo uf. referencia ao campo de cima

     

// Items de coleta
// vamos colocar os ouvidores nos lis

//pegar todos os lis
const itemsToCollect = document.querySelectorAll (".items-grid li") /*todos os lis que estiverem no item grid, colocaremos no itemstocollect*/ 
  for (const item of itemsToCollect) {
      item. addEventListener("click", handleSelectedItem)} /*esse é o evento que ficará ouvindo. toda vez que o evento é disparado, ele passa para a função abaixo */

      const collectedItems = document.querySelector("input[name=items]")

      let selectedItems = [] //é um array...começamos a pagina sem um item selecionado
      
      /*recebe o evento acima*/
      function handleSelectedItem(event) {
        
   
        const itemLi = event.target
        // adicionar ou remover uma classe com js

        itemLi.classList.toggle("selected") //remove - remove classe, toggle, remove ou adiciona, add adiciona. na hora que clica em cima da imagem seleciona

        const itemId = itemLi.dataset.id //quando clico na imagem, pego o id e coloco em itemID
       
        console.log('ITEM ID: ', itemId)



 //verificar se existe itens selecionados
 // se sim, pegar os itens selcionados

       const alreadySelected = selectedItems.findIndex(item => {//poderia fazer assim,mas como é anonima posso simplificar.(function(item) {
           const itemFound = item == itemId //1 é igual a 1, sim, entao retorna true, se nao, passa para o proximo pegando do array la em cima
           return itemFound //se retronar true, ele ecnontrou
       }) //function anonima que retorna a função

       
 //se ja estiver selecionado, tirar da seleção (array)

    if(alreadySelected >= 0){
      //tirar da seleção..abaixo ele faz um novo array itemIsDifferent...Se retornar falso, ja existe no array la em vima, ele remove ele
      const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId //false
        return itemIsDifferent 
      })
      
      
     selectedItems = filteredItems //recebendo numeros filtrados
     } else {
     // se nao estiver selecionado, adicionar a seleção
   selectedItems.push(itemId)
  
  }

  console.log('selectedItems:', selectedItems)   
 //atualizar campo escondido com os items selecionados
  
 //collectedItems.value = selectedItems

 collectedItems.value = selectedItems
      }


  


       

  


