
const rodaRelogio = function () {
  const relogio = document.querySelector(".relogio")
  const btnIniciar = document.querySelector(".iniciar")
  const btnPausar = document.querySelector(".pausar")
  const btnZerar = document.querySelector(".zerar")

  let segundos = 0 //Segundos contados no setInterval
  let timer //hora que vai aparecer na tela

  //cria a hora formatada com os segundos que se passaram
  const createHour = function () {
    const data = new Date(segundos * 1000) //Converte de segundos para milisegundos
    return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      timeZone: "UTC"
    })
  }

  //Roda o relogio QUANDO  ALGUM DOS BOTOES FOR CLICADO
  const init = function () {
    relogio.classList.remove("pausado") //Tira a cor vermelha do timer 
    //guarda a hora no timer 
    timer = setInterval(() => {
      segundos++ //Atualiza a variavel segundos
      relogio.innerHTML = createHour(segundos)
    }, 1000)
  }

  document.addEventListener("click", function (e) {
    const element = e.target //Botao que ta sendo clicado

    //Ve se o botao q ta sendo clicado é o de zera
    if (element.classList.contains("zerar")) {
      clearInterval(timer)
      relogio.innerHTML = "00:00:00"
      relogio.classList.remove("pausado") //tira a cor vermelha qnd o cara clica no botao de zerar
      segundos = 0 //Zera o timer
    }

    //Ve se  o botao q ta sendo clicado é o de iniciar
    if (element.classList.contains("iniciar")) {
      clearInterval() //para o timer
      init()
    }

    //ve se o botao que ta sendo clicado é o de pausar
    if (element.classList.contains("pausar")) {
      clearInterval(timer) //Para o timer
      relogio.classList.add("pausado")
    }
  })
}

rodaRelogio()






