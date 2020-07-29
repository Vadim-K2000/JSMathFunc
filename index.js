'use strict';

// if - else
// 1. Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном 1, 0, -3.

const checkForNull = (a) => {
  if (a === 0) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('if - else');
console.log('//1');
console.log(checkForNull(1));
console.log(checkForNull(0));
console.log(checkForNull(-3));

// 2. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const checkGreaterNull = (a) => {
  if (a > 0) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('//2');
console.log(checkGreaterNull(1));
console.log(checkGreaterNull(0));
console.log(checkGreaterNull(-3));

// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const checkLessNull = (a) => {
  if (a < 0) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('//3');
console.log(checkLessNull(1));
console.log(checkLessNull(0));
console.log(checkLessNull(-3));

// 4. Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const checkGreaterEqualNull = (a) => {
  if (a >= 0) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('//4');
console.log(checkGreaterEqualNull(1));
console.log(checkGreaterEqualNull(0));
console.log(checkGreaterEqualNull(-3));

// 5. Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const checkLessEqualNull = (a) => {
  if (a <= 0) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('//5');
console.log(checkLessEqualNull(1));
console.log(checkLessEqualNull(0));
console.log(checkLessEqualNull(-3));

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.

const checkNotEqualNull = (a) => {
  if (a !== 0) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('//6');
console.log(checkNotEqualNull(1));
console.log(checkNotEqualNull(0));
console.log(checkNotEqualNull(-3));

// 7. Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

const checkEqualStrTest = (a) => {
  if (a === 'test') {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('//7');
console.log(checkEqualStrTest('test'));
console.log(checkEqualStrTest('тест'));
console.log(checkEqualStrTest(3));

// 8. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.Проверьте работу скрипта при a, равном '1', 1, 3.

const checkEqual1 = (a) => {
  if (a === 1) {
    return 'Верно';
  } else {
    return 'Неверно';
  }
};

console.log('//8');
console.log(checkEqual1('1'));
console.log(checkEqual1(1));
console.log(checkEqual1(3));

// Работа с логическими переменными
// 1.  Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false.

const checkForTrue = (test) => {
  return test ? 'Верно' : 'Неверно';
};

console.log('// Работа с логическими переменными');
console.log('//1');
console.log(checkForTrue(true));
console.log(checkForTrue(false));

//2 Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false.

const checkNotTrue = (a) => {
  return test ? 'Неверно' : 'Верно';
};

console.log('//2');
console.log(checkForTrue(true));
console.log(checkForTrue(false));

// Работа с && (и) и || (или)
// 1.  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

const checkGreaterNullAndFive = (a) => {
  return a > 0 && a < 5 ? 'Верно' : 'Неверно';
};

console.log('//1');
console.log(checkGreaterNullAndFive(5));
console.log(checkGreaterNullAndFive(0));
console.log(checkGreaterNullAndFive(-3));
console.log(checkGreaterNullAndFive(2));

// 2. Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран.
//Проверьте работу скрипта при a, равном 5, 0, -3, 2.

const checkEqualNullAndTwo = (a) => {
  return a === 0 || a === 2 ? (a += 7) : (a /= 10);
};

console.log('//2');
console.log(checkEqualNullAndTwo(5));
console.log(checkEqualNullAndTwo(0));
console.log(checkEqualNullAndTwo(-3));
console.log(checkEqualNullAndTwo(2));

// 3. Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

const func1 = (a, b) => {
  a <= 1 && b >= 3 ? a + b : a - b;
};

console.log('//3');
console.log(func1(1, 3));
console.log(func1(0, 6));
console.log(func1(3, 5));

// 4. Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

const func2 = (a, b) => {
  if (a > 2 && a < 11) {
    if (b >= 6 && b < 14) {
      return 'Верно';
    } else {
      return 'Неверно';
    }
  }
};

console.log('//4');
console.log(func2(1, 3));
console.log(func2(0, 6));
console.log(func2(3, 5));

// switch - case
// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение
//'1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

const season = (num) => {
  switch (num) {
    case 1:
      return 'зима';
      break;
    case 2:
      return 'зима';
      break;
    case 3:
      return 'весна';
      break;
    case 4:
      return 'лето';
      break;
  }
};

console.log('// switch - case');
console.log('//1');
console.log(season(2));

// 2. В переменной day лежит какое - то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число(в первую, вторую или третью).

const decade = (day) => {
  if (day >= 1 && day < 11) {
    day = 1;
  } else if (day >= 11 && day < 21) {
    day = 2;
  } else {
    day = 3;
  }

  switch (day) {
    case 1:
      return 'Первая декада';
      break;
    case 2:
      return 'Втарая декада';
      break;
    case 3:
      return 'Третья декада';
      return;
      break;
  }
};

console.log('//2');
console.log(decade(2));
console.log(decade(12));

// 3.  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

const sesonMonth = (month) => {
  switch (month) {
    case 'Декабрь':
    case 'Январь':
    case 'Февраль':
      return 'Зима';
      break;
    case 'Март':
    case 'Апрель':
    case 'Май':
      return 'Весна';
      break;
    case 'Июнь':
    case 'Июль':
    case 'Август':
      return 'Лето';
      break;
    case 'Сентябрь':
    case 'Оектябрь':
    case 'Ноябрь':
      return 'Осень';
      break;
  }
};

console.log(sesonMonth('//3'));
console.log(sesonMonth('Март'));
console.log(sesonMonth('Оектябрь'));

// 4. Дана строка с цифрами, например, '12345'.Проверьте, что первым символом этой строки является цифра 1, 2 или 3.
// Если это так - выведите 'да', в противном случае выведите 'нет'.

const checkFirstNum = (str) => {
  switch (str[0]) {
    case 1:
    case 2:
    case 3:
      return 'Да';
      break;
    default:
      return 'Нет';
  }
};

console.log('//4');
console.log(checkFirstNum('12345'));
console.log(checkFirstNum('233235'));
console.log(checkFirstNum('533235'));
