'use strict';

const solve = (equation, x) => {
    if ((/x{2,}/.test(equation))) { // нет последовательностей из более, чем одного Х (например, хх)
        return 'error: variable wrong name';
    }

    if (typeof(equation) !== "string") { // выражение либо строка, либо число
        return 'error: equation wrong type';
    }

    if ((typeof(x) !== "number" && typeof(x) !== "string") ) { // икс либо строка, либо число
        return 'error: x wrong type';
    }

    if (!/^[x\d+\-*()/ ]+$/.test(equation)) { // выражение содержит только цифры и знаки
        return 'error: equation wrong'
    }

    if (typeof(x) === "number" && !Number.isInteger(x)) { // икс только целое
        return 'error: x is not integer';
    }

    if (!/\d+/.test(x)) { // икс содержит только цифры
        return 'error: x wrong';
    }

    return new Function(`x`, `return parseInt(${equation})`)(x); // вычисляем выражение

}
