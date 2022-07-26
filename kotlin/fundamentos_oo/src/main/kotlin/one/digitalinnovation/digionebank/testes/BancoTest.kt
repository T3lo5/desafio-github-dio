package one.digitalinnovation.digionebank.testes
import one.digitalinnovation.digionebank.Banco

import org.junit.jupiter.api.Assertions.*

internal class BancoTest

fun main() {
    val digiOneBank = Banco("DigiOne",
    123)
    println(digiOneBank.nome)
    println(digiOneBank.numero)
}

