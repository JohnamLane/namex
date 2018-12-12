from hamcrest import *
from namex.resources.phonetic import first_vowels


def test_can_extract_o():
    assert_that(first_vowels('GOLDSTREAM'), equal_to('O'))


def test_can_extract_ou():
    assert_that(first_vowels('CLOUDSIDE'), equal_to('OU'))


def test_can_extract_aaa():
    assert_that(first_vowels('BAAAA'), equal_to('AAAA'))


def test_resists_no_vowel():
    assert_that(first_vowels('KCH'), equal_to(''))

