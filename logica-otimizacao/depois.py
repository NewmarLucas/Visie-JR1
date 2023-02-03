months = {
    "jan": "Janeiro",
    "fev": "Fevereiro",
    "mar": "Março",
    "abr": "Abril",
    "mai": "Maio",
    "jun": "Junho",
    "jul": "Julho",
    "ago": "Agosto",
    "set": "Setembro",
    "out": "Outubro",
    "nov": "Novembro",
    "dez": "Dezembro"
}

month = input("Digite a sigla de um mês para ter o nome completo dele: ")
try:
    print(months[month])
except KeyError:
    print("Sigla inválida!")
