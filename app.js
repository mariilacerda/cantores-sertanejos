function pesquisar() {
    
let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value;

if (campoPesquisa == "") {
    section.innerHTML = "<p> Nada foi encontrado. Digite alguma palavra.</p>"
return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descrição = "";
let tags = "";


for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descrição = dado.descrição.toLowerCase()
    tags = dado.tags.toLowerCase()

    if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank" >${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">  ${dado.descrição}</p>
             <a href= ${dado.link} target="_blank" >Mais informações</a>
            </div>
        `;
    }
    

}

if (!resultados) {
resultados = "<p>Sem informação correspondente.</p>"
}

section.innerHTML = resultados
}

