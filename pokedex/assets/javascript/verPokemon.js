
function convertCardToLi(namePokemon, idPokemon, photoPokemon, typePokemon,typePokemon2 = '' ) {

    return `
            <section id="removerHtml" class= "card">
                <button onclick="delet()" class="btnCard" type="button" title="button"></button>

                <div class="top">
                    <img src="${photoPokemon}" alt="${namePokemon}">
                </div>

                <div class="detailsPokemon ${typePokemon}">
                <img src="./assets/imagem/Card-Pokebola.jpg" alt="card">
                    <div class="detailsNumber">#${idPokemon}</div>
                    <div class="detailsName">${namePokemon}</div>
                    <div class="detailsType">${typePokemon} ${typePokemon2}</div>
                </div>

            </section>
        `
}
function gerarPokemonActive(namePokemon, idPokemon, photoPokemon, typePokemon, typePokemon2){
    namePokemon = namePokemon;
    idPokemon = idPokemon;
    photoPokemon = photoPokemon;
    typePokemon = typePokemon;
    typePokemon2 = typePokemon2;

    const newHtmlPokemonActive = document.getElementById('displayCardPokemon')
    const convertPhoto = convertImg(photoPokemon)

    newHtmlPokemonActive.innerHTML = convertCardToLi(namePokemon, idPokemon, convertPhoto, typePokemon,typePokemon2)
}

function delet(){
    const removerHtml = document.getElementById('removerHtml')
    removerHtml.remove()
}