
fetch('data.json')
    .then(response => response.json()) 
    .then(data => {
        const optionsList = document.getElementById('optionsList');
        

        data.temas.forEach(temas => {
            const option = document.createElement('option');
            option.value = temas;
            optionsList.appendChild(option);
        });
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));

function verificar (){
    let temaU = document.getElementById("myInput").value
    let generos ="";
    let publico ="";
    fetch('data.json')
    .then(response => response.json()) 
    .then(data => {
        data.acao.forEach(acao => {
            if(temaU==acao){
                generos+=" Ação"
            }else{}
        });

        data.aventura.forEach(aventura => {
            if(temaU==aventura){
                generos+=" Aventura"
            }else{}
        });

        data.rpg.forEach(rpg => {
            if(temaU==rpg){
                generos+=" RPG"
            }
        });
        data.simulacao.forEach(simulacao => {
            if(temaU==simulacao){
               generos+=" Simulação"
            }
        });
        data.estrategia.forEach(estrategia => {
            if(temaU==estrategia){
                generos+=" Estrategia"
            }
        });
        data.casual.forEach(casual => {
            if(temaU==casual){
                generos+=" Casual"
            }
        });
        data.PublicoI.forEach(PublicoI => {
            if(temaU==PublicoI){
                publico+= " Infantil"
            }
        });
        data.PublicoT.forEach(PublicoT => {
            if(temaU==PublicoT){
                publico+= " Todos"
            }
        });
        data.PublicoA.forEach(PublicoA => {
            if(temaU==PublicoA){
                publico+= " Adulto"
            }
        });
        let tabela = document.getElementById("minhatabela");

        // Cria uma nova linha
        let novaLinha = tabela.insertRow(-1); // -1 insere a linha no final, mas antes do fechamento da tag </table>
    
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


