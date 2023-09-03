import dados from "./dados.json"
let clienteTexto = '{"nome":"Angelo", "idade":86, "cidade":"São Paulo", "estado":"SP"}'
let cliente = JSON.parse(dados)

document.getElementById("demo").innerHTML = cliente.nome + ", " + cliente.idade + ' - ' + cliente.cidade + '/' + cliente.estado