# aviasales
https://gor-dey.github.io/aviasales/

Это пример разработки фронтенд логики.

Данное приложение предназначено для подбора выгодных для пользователя авиабилетов с применением различных фильтров. Пользователь нажимает различные интуитивно понятные кнопки на интерфейсе веб-приложения, выбирает чекбоксы для применения фильтров и приложение выдает ему данные. Перезагрузка страницы при этом не происходит.

Приложение реализовано посредством обращения к api при обновлении веб страницы. Api выдает массив из большого колличество объектов с данными об авиабилетах. Данные объекты сохраняются в глобальных объект браузера window и используются в при последующей работе пользователя с сайтом. Пользователь, взаимодействуя с элементами интерфейса, инициирует работу разлычных eventListener, которые вызывают определенные функции по прочтению и обработки данных, сортировке и пересортировки массивов, рендера страницы.

==============
==============

This is an example of frontend logic development.

The application is designed to select aircraft that are beneficial for users using various filters. The user clicks various options for using buttons on the web application interface, selects checkboxes for applying filters and the application that gives him the data. Pages are not reloaded.

The application is implemented by calling api when updating a web page. The API returns an array of a large number of objects with data about air tickets. These objects are stored in the global object of the browser window and are used in the subsequent work of the user with the site. The user, interacting with interface elements, initiates the work of various eventListeners that call certain functions for reading and processing data, sorting and re-sorting arrays, and rendering the page.
