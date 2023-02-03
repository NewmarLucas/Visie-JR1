from Question import Question

""" List """
# Listas são usadas para guardar vários itens em uma única variável. Elas são ordenadas, ou seja, a ordem que você
# definir para ela será mantida. Os valores das listas podem ser alterados e permitem valores duplicados.
list_example = ["um", "dois", "tres", "quatro", "cinco", "seis", "seis"]
print(f"Exemplo de Lista: {list_example}")  # ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'seis']
print(f"Exemplo de funcoes com lista:\n")
print(f"Tamanho(len(my_list)): {len(list_example)}")
print(f"Indice de um item(my_list.index('dois')): {list_example.index('dois')}")
list_example.append('sete')
print(f"Adicionar um item no final da lista(my_list.append('sete')): {list_example}")
list_example.remove('sete')
print(f"Remover um item da lista(my_list.remove('sete')): {list_example}")
print(f"Contar itens repetidos(my_list.count('seis')): {list_example.count('seis')}")
print(f"\n{'=' * 60}\n")

""" Set """
# Sets guardam varios valores em uma unica variavel, seus valores não podem ser alterados, mas voce pode remover
# e adicionar itens. Os valores nao sao ordenados, e nao sao duplicados. No exemplo a seguir, os valores 'Gol' e 'Uno'
# foram repetidos duas vezes, mas aparecerao apenas uma vez.
set_example = {"Gol", "Celta", "Uno", "Gol", "Golf", "Uno", "Saveiro"}
print(f"Exemplo de Set: {set_example}")  # {'Saveiro', 'Uno', 'Celta', 'Gol', 'Golf'}
print(f"Exemplo de funcoes com set:\n")
print(f"Tamanho(len(my_set)): {len(set_example)}")
set_example.add("Fiesta")
print(f"Adicionar um item no set(my_set.add('Fiesta')): {set_example}")
set_example.remove("Fiesta")
print(f"Remover um item no set(my_set.remove('Fiesta')): {set_example}")
print(f"\n{'=' * 60}\n")

""" Dict """
# Dicionários são utilizados para guardar valores em pares de chave:valor. Similar à lista, dicionarios são ordenados (a
# partir da versão 3.7). Seus valores podem ser alterados, e ele não aceita chaves duplicadas.
dict_example = {
    "name": "Newmar Lucas",
    "age:": 22,
    "is_male": True
}
print(f"Exemplo de Dicionario: {dict_example}")  # {'name': 'Newmar Lucas', 'age:': 22, 'is_male': True}
print(f"Exemplo de funcoes com dict:\n")
print(f"Tamanho(len(my_dict)): {len(dict_example)}")
print(f"Pegar todas as chaves(my_dict.keys()): {dict_example.keys()}")
print(f"Pegar todos os valores(my_dict.values()): {dict_example.values()}")
dict_example.pop("is_male")
print(f"Remover um item(my_dict.pop('is_male')): {dict_example}")
dict_example.update(name="Jose")
print(f"Atualizar valores(my_dict.update(name='Jose')): {dict_example}")
print(f"\n{'=' * 60}\n")


""" Utilização de operadores, estrutura de controle, funções e classe """
questions = [
    Question("Qual a cor do sol?\na) Branco\nb) Amarelo\nc) Laranja\n", "a"),
    Question("\n\nEm que ano nasceu o Neymar?\na) 1990\nb) 1991\nc) 1992\n", "c"),
    Question("\n\nQuantos títulos tem o Brasil?\na) 4\nb) 5\nc) 6\n", "b"),
]

show_form = True


def form():
    correct_answers = 0

    for question in questions:
        user_answer = input(question.question)
        if user_answer.lower() == question.answer:
            correct_answers += 1

    print("Voce fez " + str(correct_answers) + " de " + str(len(questions)) + " pontos!")
    retry = input("Deseja refazer? (S/n)\n")
    if retry.lower() != "s":
        global show_form
        show_form = False


while show_form:
    form()
