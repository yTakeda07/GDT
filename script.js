// vou comentar o codigo inteiro para que quando eu voltei futuramente não me perca
fetch('data.json') // faz a requisição dos dados, se n funfar vai pro catch
    .then(response => response.json()) // Converte a resposta em um objeto JavaScript
    .then(data => { 
        const optionsList = document.getElementById('optionsList'); //pega o elemento opiton
        

        data.temas.forEach(temas => { //para cada tema de data
            const option = document.createElement('option'); //cria um novo elemento html de opiton
            option.value = temas; // o valor de cada novo opiton é o que estiver dentro de cada tema de data
            optionsList.appendChild(option); //coloca em baixo do ultimo criado
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error)); // caso o fetch n funfe mostra o erro

function verificar (){ //função ativa no onclick do butao
    let temaU = document.getElementById("myInput").value // pega o input
    let generos =[]; //cria array generos para guardar os generos compativeis com o tema
    let publico =[]; //mesma coisa so que com os publicos
    fetch('data.json') // faz a requisição dos dados, se n funfar vai pro catch
    .then(response => response.json()) // Converte a resposta em um objeto JavaScript
    .then(data => { //Contém os dados retornados pela promessa anterior
        const categorias = [ // cria um array com objetos nome e data
            { nome: "Ação", data: data.acao },
            { nome: "Aventura", data: data.aventura },
            { nome: "RPG", data: data.rpg },
            { nome: "Simulação", data: data.simulacao },
            { nome: "Estratégia", data: data.estrategia },
            { nome: "Casual", data: data.casual }
        ];
        
        categorias.forEach(categoria => { // para cada categoria
            if (categoria.data.includes(temaU)) { //verifica se a data inclui o tema
                generos.push(categoria.nome); //caso sim, adiciona o nome da categoria ao fim do array
            }
        });
        
        const publicos = [ // cria um array com ojbetos nome e data
            { nome: "Infantil", data: data.PublicoI },
            { nome: "Todos", data: data.PublicoT },
            { nome: "Adulto", data: data.PublicoA }
        ];
        
        publicos.forEach(publicoItem => { //para cada categoria
            if (publicoItem.data.includes(temaU)) { //verifica se a data inclui o tema
                publico.push(publicoItem.nome); // caso sim, adiona o nome do publico ao fim do array
            }
        });
        
        let tabela = document.getElementById("minhatabela");

        // Cria uma nova linha
        let novaLinha = tabela.insertRow(-1); // -1 insere a linha no final, mas antes do fechamento do </table>
    
        // Cria e adiciona as novas células na linha
        let celula1 = novaLinha.insertCell(0);
        let celula2 = novaLinha.insertCell(1);
        let celula3 = novaLinha.insertCell(2);
    
        // Adiciona conteúdo às novas células
        celula1.textContent = temaU;
        generos.forEach(genero=>{
        celula2.innerHTML += "<button class='botoes' onclick='genero(this)' value='"+temaU+"' name='"+genero+"' >"+genero+"</button>";
        });
        publico.forEach(publi=>{
        celula3.textContent += publi+" "
        });
    
    });
};

function genero(botao){ //função do click do butao, com parametro dele mesmo
let caixa = document.getElementById("Esquerda") //pega o elemento que eu vou escrever as coisas
let tema = botao.value //graças ao parametro botao consigo pegar o valor dele
let genero = botao.name //mesma coisa só que com o name

fetch('data.json')
                .then(response => response.json())
                .then(dados => {

//abaixo eu escrevo os dados do desenvolvimento do jeito mais porco possivel, com certeza tem um jeito melhor mas eu realmente não estou afim de arrumar, o importante é funcionar
                    caixa.innerHTML= `Especificações para ${tema} - ${genero}:
        <br>
        <h1>Fase 1</h1>
        <p>
        Engine: ${dados[genero]["Fase 1"]["Engine"]} <!-- pega as informações de um array super complexo kk  -->
        <br>
        Jogabilidade:  ${dados[genero]["Fase 1"]["Jogabilidade"]}
        <br>
        História/Missões:   ${dados[genero]["Fase 1"]["História/Missões"]}
        </p>          
        <br>  
        <h1>Fase 2</h1>
        <p>
        Diálogos: ${dados[genero]["Fase 2"]["Diálogos"]}
        <br>
        Design de Nível:  ${dados[genero]["Fase 2"]["Design de Nível"]}
        <br>
        AI:   ${dados[genero]["Fase 2"]["AI"]}
        </p>  
        <br>  
        <h1>Fase 3</h1>
        <p>
        Design Mundial: ${dados[genero]["Fase 3"]["Design Mundial"]}
        <br>
        Gráficos:  ${dados[genero]["Fase 3"]["Gráficos"]}
        <br>
        Som:   ${dados[genero]["Fase 3"]["Som"]}
        </p> `
                })
                .catch(error => {
                    console.error('Erro ao carregar o JSON:', error);
                });

};
