function calc() {
    let n1 = Number(prompt('Primeiro valor:'))
    let n2 = Number(prompt('Segundo valor:'))
    let op = Number(prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    let saida = document.getElementById('saida')
    saida.innerHTML = `<h2>Calculando...</h2>`
    switch (op) { 
        case 1:
            saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break 
        case 2:
            saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3:
            saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4:
            saida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1/n2).toLocaleString('pt-BR')}</strong></p>` 
            break
        default: 
            saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`
            break
    }
}
function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    let cont = 2
    while (cont <= 10) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont += 2 // Corresponde a cont = cont + 2
    }
    saida.innerHTML += ` &#x1F3C1;`
}
.9
