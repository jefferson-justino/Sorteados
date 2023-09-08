let botao = document.getElementById('bot')
let num = document.getElementById('numero')
let resultado = document.getElementById('resultado')
botao.addEventListener('click', ()=>{
    let valor = num.value
    if(valor== 0 || valor<0||valor== 1)
    {
        resultado.innerHTML=` <P id='numeroSorteado'>POR FAVOR, INSIRA A QUANTIDADE DE PARTICIPANTES CORRETAMENTE!</P>`
       return
    }
    
    let x = Math.floor( Math.random()*valor)
    if(x== 0){
      do{
        x = Math.floor( Math.random()*valor)
        console.log(x)
      }while(x==0)
      
      resultado.innerHTML=`O SORTEADO FOI O NÚMERO <P id='numeroSorteado'>${x}</P>`
    }else{
        resultado.innerHTML=`O SORTEADO FOI O NÚMERO <P id='numeroSorteado'>${x}</P>`
    }
    

    
})

