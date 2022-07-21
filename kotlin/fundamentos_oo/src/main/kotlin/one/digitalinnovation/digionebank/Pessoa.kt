package one.digitalinnovation.digionebank

class Pessoa {
    var nome: String = "Potter"
    var cpf: String = "123.456.789-00"
    private set
}

fun main() {
    val Potter = Pessoa()
    println(Potter.nome)
    println(Potter.cpf)
}


