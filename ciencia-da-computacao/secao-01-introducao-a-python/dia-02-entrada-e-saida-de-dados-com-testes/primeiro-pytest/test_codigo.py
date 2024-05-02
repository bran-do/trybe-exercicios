from codigo import is_odd


def test_is_odd_when_number_is_odd():
    'Para um número ímpar, a função is_odd() deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even():
    'Para um número par, a função is_odd deve retornar o valor False'
    assert is_odd(2) is False