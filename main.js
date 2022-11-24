function criarJogos(time1, hora, time2) {
    return `
        <div class="div_jogos">
            <img src="./img/${time1}.svg" alt="">
                <p>${hora}</p>
            <img src="./img/${time2}.svg" alt="">
        </div>
     `
}

function criarCard(data, dia, jogos) {
return `
<section class="container">
    <section class="data">                   
        <h3>${data}</h1>
        <p>${dia}</p>             
    </section>
    <section class="jogos">
        ${jogos}
    </section>
</section>
`
}

document.querySelector("body").innerHTML = `
<h1 class="calendario">CALENDÁRIO</h1>
    <main>
        ${criarCard(
            "24/11",
            "quinta",
            criarJogos("brazil", "16:00", "senegal") +
            criarJogos("brazil", "20:00", "senegal")
        )}
            ${criarCard(
                "24/11",
                "quinta",
            criarJogos("brazil", "16:00", "senegal") +
            criarJogos("brazil", "16:00", "senegal")
        )}
    </main>
`