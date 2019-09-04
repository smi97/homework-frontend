'use strict';
let solve = function(equation, x)  {
    if(/x{2,}/.test(equation) === true) { // проверяем, что нет последовательностей из более, чем одного Х (например, хх)
        return 'error';
    }
    let new_eq = equation.replaceAll(/x/, x.toString()); // подставляем иксы

    if(/^[\d+\-*()/ ]*$/.test(new_eq) === true) { // проверяем, что выражение содержит только цифры и знаки
        return (new Function( 'return (' + new_eq + ')' )()); // вычисляем выражение
    } else {
        return 'error';
    }
}

String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};