'use strict';

const solve = (equation, x) => {
    if ((/x{2,}/.test(equation)) // нет последовательностей из более, чем одного Х (например, хх)
        || (typeof(equation) !== "string" && typeof(equation) !== "number") // выражение либо строка, либо число
        || (typeof(x) !== "number" && typeof(x) !== "string") ) { // икс либо строка, либо число
        return 'error';
    }
    if (/^[x\d+\-*()/ ]+$/.test(equation) // выражение содержит только цифры и знаки
        && /\d+/.test(x)) { // икс содержит только цифры
        return new Function(`x`, `return parseInt(${equation})`)(x); // вычисляем выражение
    }
    return 'error';
}