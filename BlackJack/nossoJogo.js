let game = confirm("Iniciar jogo?")

if(game){
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Pc = comprarCarta()
   let carta2Pc = comprarCarta()

   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

   console.log(`Usuário cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} = ${pontuacaoUsuario}`)
   console.log(`Computador cartas: ${carta1Pc.texto} ${carta2Pc.texto} = ${pontuacaoPc}`)

   if (pontuacaoUsuario > pontuacaoPc) {
      console.log("Parabéns voce ganhou")
   }else if(pontuacaoPc > pontuacaoUsuario){
      console.log("Você perdeu!!")
   }else if ( pontuacaoUsuario === pontuacaoPc){
      console.log("Empatou!")
   }

} else {
   console.log("O jogo acabou")
}