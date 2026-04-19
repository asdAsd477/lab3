# 📝 Habit Tracker (Лабораторная работа №3)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![AntDesign](https://img.shields.io/badge/Ant_Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-443E38?style=for-the-badge&logo=react&logoColor=white)
![ChartJS](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)
![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

Современное SPA-приложение для отслеживания ежедневных привычек. Позволяет пользователям формировать полезные рутины, контролировать прогресс через интерактивный календарь и анализировать статистику за месяц.

👁️ **Ссылка на результат:** https://asdasd477.github.io/lab3/

## ✨ Функциональность
- **Управление привычками**: Добавление новых целей и "мягкое" удаление (архивация) без потери истории за прошлые периоды.
- **Интерактивный календарь**:
  - Визуализация прогресса: ячейки окрашиваются в зависимости от процента выполненных задач (красный/желтый/зеленый).
  - Защита данных: блокировка возможности отмечать привычки в будущих датах.
- **Детальный просмотр**: Модальные окна с чеклистом привычек для каждого конкретного дня.
- **Аналитика**: Плавный график (сплайн) прогресса за текущий месяц с отображением динамики выполнения.
- **Анимации**: Плавные переходы между страницами (View Transitions API).
- **Persistence**: Автоматическое сохранение всех данных в LocalStorage.

## 🛠 Технологический стек
- **Core**: React 19 + Vite
- **Routing**: React Router v7 (HashRouter для совместимости с GitHub Pages)
- **State Management**: Zustand + Persist Middleware
- **UI Kit**: Ant Design (Custom Dark Theme)
- **Charts**: Chart.js + react-chartjs-2
- **Animations**: View Transitions API

## 📂 Архитектура приложения
Приложение построено на базе **Shared Layout** паттерна с четким разделением ответственности:
1. **Слой данных (Store)**: Единый источник истины в Zustand. Данные разделены на `habits` (описания привычек) и `history` (журнал выполнений по датам).
2. **Слой представления (Pages)**: Контентные страницы (`Home`, `Calendar`), обернутые в глобальный Layout.
3. **Локальный контекст**: Использование `React Context` для передачи UI-состояний (например, открытие модалок в календаре), чтобы избежать избыточного проброса пропсов (Prop Drilling).
4. **Утилиты**: Вынос сложной логики расчета статусов дней и форматирования дат в отдельные чистые функции (`habitUtil.js`).

## 📥 Установка и запуск
1. Клонирование репозитория: `git clone https://github.com/asdAsd477/lab3.git`
2. Установка зависимостей: `npm install`
3. Запуск в режиме разработки: `npm run dev`

## 📸 Скриншоты интерфейса
<img width="889" height="549" alt="image" src="https://github.com/user-attachments/assets/927b3f12-d331-4d5e-82e1-db0258182e81" />
<img width="890" height="735" alt="{8D7BDE22-09EB-4880-AEEC-9BB5D837B2FA}" src="https://github.com/user-attachments/assets/2942cc77-a7af-4903-b6d4-a7af1a677000" />
<img width="889" height="740" alt="{004BA81C-F0D1-4B23-8AB4-1C3F0851773C}" src="https://github.com/user-attachments/assets/7536ae4b-e0af-4df6-8b35-1410bad8b464" />
<img width="888" height="826" alt="{14A8EEDC-EEB8-48AC-AD8C-80C198184D43}" src="https://github.com/user-attachments/assets/941b9518-2b3c-4f2e-aaec-152577238506" />
