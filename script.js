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
        celula2.textContent = generos;
        celula3.textContent = publico;
    
    });
}


