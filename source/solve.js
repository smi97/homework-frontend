'use strict';

const solve = (equation, x) => {
    if(/x{2,}/.test(equation.toString())) { // проверяем, что нет последовательностей из более, чем одного Х (например, хх)
        return 'error';
    }

    if(/^[x\d+\-*()/ ]*$/.test(equation.toString())) { // проверяем, что выражение содержит только цифры и знаки
        return new Function(`x`, `return ${equation}`)(x); // вычисляем выражение
    }
    return 'error';
}