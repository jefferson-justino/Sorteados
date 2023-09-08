let botao = document.getElementById('bot')
let nome = document.getElementById('nome')
let resultado = document.getElementById('resultado')
let add = document.getElementById('add')
let lista = document.getElementById('lista')
let num = document.getElementById('num')

let participantes=[]
add.addEventListener('click', ()=>{
    let valor = nome.value

    
    resultado.innerHTML=` `
    if(valor== ''){
        resultado.innerHTML=` <P id='nomeSorteado'>NÃO DEIXE O CAMPO VAZIO!</P>`
        
        return
    }


    participantes.push(valor)
    num.innerHTML=`Você tem ${participantes.length} participantes!`
    lista.innerHTML=``   
    for(let i = 0; i<participantes.length;i++){
        
        lista.innerHTML+=` <ol><li class='participantes'> ${ participantes[i]}</li></ol>`
    }
nome.value= ''
nome.focus()

})



botao.addEventListener('click', ()=>{
   
    if(participantes.length== 0 || participantes.length== 1)
    {
        resultado.innerHTML=` <P id='nomeSorteado'>POR FAVOR, INSIRA MAIS PARTICIPANTES!</P>`
       return
    }
    
    let x = Math.floor( Math.random()*participantes.length)
    if(x== 0){
      do{
        x = Math.floor( Math.random()*participantes.length)
        console.log(x)
      }while(x==0)
      
      resultado.innerHTML=`PARABÉNS <P id='nomeSorteado'>${participantes[x]}</P> VOCÊ FOI SORTEADO!`
    }else{
        resultado.innerHTML=`PARABÉNS <P id='nomeSorteado'>${participantes[x]}</P> VOCÊ FOI SORTEADO!`
    }
    

    
})
