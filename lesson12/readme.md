Задание
Задания на рекурсию (+1 балл)
Задача #1
Переписать игровой бот из 8-го задания
Функционал остаётся прежний, но вместо цикла (while или for) используйте рекурсию

Задача #2

Напишите рекурсивную функцию, которая принимает один параметр массив, генерирует целое число от 0 до 10 включительно и добавляет его в массив.

Каждый раз после добавления нового числа проверяет сумму элементов массива, если она меньше 50 запускается снова передавая себе массив. Если сумма больше 50-ти, то функция возвращает этот массив.

Задания на this (+1 балл)
Задача #1
Создать объект rectangle, который описывает ширину и высоту (свойства width и height) прямоугольника
Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника

Сеттеры могут принимать только числа
Геттеры возвращают строку число + "см"
пример "40см"

По умолчанию значения высоты и ширины заданы 5 см

Задача #2

Продолжим работу в cart.js из предыдущего урока

Методы объекта cart не должны обращаться к объекту по имени

В объект cart добавьте сеттер setDiscount и свойство discount

Сеттер setDiscount будет принимать promocode

если promocode будет строка METHED, то в discount будет добавляться значение 15

если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21

метод calculateItemPrice должен учитывать скидку равную процентному значению discount