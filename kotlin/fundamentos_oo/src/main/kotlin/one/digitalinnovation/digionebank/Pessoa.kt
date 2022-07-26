package one.digitalinnovation.digionebank

class Pessoa {
    var nome: String = "Potter"
    var cpf: String = "123.456.789-00"
    private set

    fun pessoaInfo() = "$nome e $cpf"
}

fun main() {
    val potter = Pessoa()
    println(potter.pessoaInfo())
}


