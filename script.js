var inputTask = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("list");
// ищем все span
var spans = document.getElementsByTagName("span");
// Сохранение данных
var saveBtn = document.getElementById("save");
// Удаление данных
var clearBtn = document.getElementById("clear");
var allElemLi = document.getElementsByTagName("li");

// Функия, которая занимается удалением span
function deleteToDo() {
    // через цикл будем искать определённый span и удалять его
    // let - локальная переменная
    for (let span of spans) {
        // обращаемся к span, чтоб отловить его
        span.addEventListener("click", function() {
            // При нажатии на span нужно удалять родительский элемент - li
            span.parentElement.remove();
            // Всплытие - ? блокируем событие
            event.preventDefault();
        });
    }
}

// Функция отвечает за сохранение данных пользователя
function loadToDo() {
    // Проверяем есть ли у нас хранилище
    if (localStorage.getItem("toDoApp")) {
        // Если такое хранилище существует, то мы сохраняем данные в ulSpisok
        ulSpisok.innerHTML = localStorage.getItem("toDoApp");
        // вызываем функцию deleteToDo, чтоб мы могли удалять выполненные задачи
        deleteToDo();
    }
}

// Записываем данные в хранилище

saveBtn.addEventListener("click", function() {
    //Указываем название хранилища и данные, которое нужно туда поместить
    localStorage.setItem("toDoApp", ulSpisok.innerHTML);
});

// Очищает все хранилище
clearBtn.addEventListener("click", function() {
    // обнудяем ulSpisok через пустую строку
    ulSpisok.innerHTML = "";
    // Вводим пустой список в localStorage
    localStorage.setItem("toDoApp", ulSpisok.innerHTML);
});

// обращаемся к input для ввода данных
inputTask.addEventListener("keypress", function(keyPressed) {
    if (keyPressed.which === 13) {
        var newElemLi = document.createElement("li");
        var newElemSpan = document.createElement("span");
        // var newElemDate = new Date();
        var days = [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
        ];
        var months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
        ];

        var myDate = new Date();
        var fullDate =
            " " +
            myDate.getDate() +
            " " +
            months[myDate.getMonth()] +
            " " +
            myDate.getFullYear() +
            ", " +
            days[myDate.getDay()];
        newElemSpan.innerHTML = "&#9851";
        // получаем value из input
        var newToDo = this.value;
        if (newToDo === "") {
            alert("Введите данные!");
            return false;
        }
        // Чтоб поле ввода очищалось после нажатия
        this.value = "";

        // Обращаемся к ul и добавляем к нему li
        // Append - добавляет всё на одном уровне
        ulSpisok.appendChild(newElemLi).append(newElemSpan, newToDo, fullDate);
    }

    deleteToDo();
    changeTextLi();
});

// git Информация о себе
var button = document.getElementById("information");

var inform = sessionStorage.getItem("InformationAboutUser", inform);

if (!inform) {
    inform = prompt("Введите ФИО");
    sessionStorage.setItem("InformationAboutUser", inform);
}

button.addEventListener("click", function() {
    alert(inform);
});
// функция для зачёркивания текста
function changeTextLi() {
    for (let li of allElemLi) {
        li.addEventListener("click", function() {
            li.classList.add("linethrough");
        });
    }
}
// InformAboutUser();
changeTextLi();
deleteToDo();
loadToDo();
// loadInformAboutUser();