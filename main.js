let btn = document.querySelector('#btn')
btn.addEventListener('click', sequência)

function sequência(){
    let contador1 = document.querySelector('#start')
    let contador2 = document.querySelector('#end')
    let seq = document.querySelector('#step')
    let res = document.querySelector('#res')

    if(contador1.value.length >= 0 && contador2.value.length >= 0 && seq.value.length >= 0){
    res.innerHTML = 'contando... <br>'
    let c1 = Number(contador1.value)
    let c2 = Number(contador2.value)
    let s = Number(seq.value)

    if(s == 0){
        alert('Passo 0 é inválido. Considerando Passo 1')
        s = 1
    }

    if(c1 < c2){
        // Contagem crescente
        for(let c = c1; c <= c2; c += s){
            res.innerHTML += `${c} \u{1F449}`
        }
    }else{
        // Contagem decrescente
        for(let c = c1; c >= c2; c -= s){
            res.innerHTML += `${c} \u{1F449}`
        }
    }
    res.innerHTML += `\u{1F3C1}` 
    }
}
