let InputTarefas = document.getElementById('tarefa');
const ElementTag = document.querySelector('#MeuFormulario')
let emptyList = document.querySelector('ul');

function ShowName() {
    let valorDeInput = InputTarefas.value;

    // está parte está obscura para mim ....

        ElementTag.addEventListener('submit', function(event) {
            event.preventDefault()
        })

    let creatList = document.createElement('li');

    console.log(creatList)
        creatList.textContent = valorDeInput
        emptyList.appendChild(creatList)


    console.log(typeof emptyList, ">>>>" ,emptyList.ELEMENT_NODE)
    
    // let teste = emptyList.appendChild(creatList);
    // console.log(valorDeInput)
}


