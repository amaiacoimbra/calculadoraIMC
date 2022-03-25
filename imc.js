// 11:30 https://www.youtube.com/watch?v=RacwEvoTz_Y&t=215s


const calcular = document.getElementById('calcular')

function imc () {
   
    const nome = document.getElementById('nome')
    const altura = document.getElementById('altura')
    const peso = document.getElementById('peso')
    const resultado = document.getElementById('resultado')

    if (nome.value !== '') {
        alert ('valor preenchido!')
    }

}

calcular.addEventListener('click', imc)