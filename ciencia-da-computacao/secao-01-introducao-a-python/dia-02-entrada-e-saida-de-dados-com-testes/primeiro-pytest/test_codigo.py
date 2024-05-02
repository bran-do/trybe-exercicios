import pytest
from codigo import is_odd, divide


# Testes da função is_odd():
def test_is_odd_when_number_is_odd():
    'Para um número ímpar, a função is_odd() deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even():
    'Para um número par, a função is_odd deve retornar o valor False'
    assert is_odd(2) is False


# Teste de erro de exceção na função divide(); divisão por zero:
def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)