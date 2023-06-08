# Серверная часть

- .NET 7
- PostgreSQL
- Entity Framework
- Swagger

Установлены пакеты NuGet:
- Microsoft.EntityFrameworkCore
- Microsoft.entityframeworkcore.design
- Npgsql.EntityFrameworkCore.PostgreSQL
- AutoMapper.Extensions.Microsoft.DependencyInjection

Данные для подключения к БД хранятся в файле "Server/appsettings.json"
## Запуса серверной части 
```
1. Убедитесь, что у вас установлен Visual Studio с поддержкой .NET Framework 7.


2. Скачайте исходный код проекта со всеми файлами из папки server. 


3. Откройте файл решения (solution) с расширением .sln из папки server в Visual Studio.


4. Установите/Восстановите выше указанные пакеты NuGet.


5. Необходимо иметь PostgreSQL на ПК. Также ввести данные для авторизации пользователя СУБД в файле appsettings.json. Изменить ConnectionStrings.


6. Нажмите F5 на клавиатуре или выберите "Отладка" (Debug) > "Запустить без отладки" (или "Запустить с отладкой", если нужно отладить код) из меню Visual Studio. Проект должен запуститься и начать работать.

```
# Клиенсткая часть

- React
- bootstrap

Установлены пакеты npm:
- react-router-dom
- react-bootstrap bootstrap
- mdb-react-ui-kit
 

## Запуса клиентской части 
```
1. Убедитесь, что у вас установлен Node.js


2. Скачайте исходный код проекта со всеми файлами из папки client.


3. Открыть командную строку (для Windows) или терминал (для Mac или Linux) и перейти в папку проекта.


4. Выполнить команду  для установки всех необходимых зависимостей проекта: npm install 


5. После установки зависимостей, для запуска сервера разработки выполните команду: npm start

Приложение автоматически откроется в браузере и будет доступно по адресу http://localhost:3000.
```