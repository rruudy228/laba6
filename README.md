# Лабораторная работа №6 — PhoneShop (SkyPhone)

Мини‑проект для демонстрации командной работы в Git/GitHub.
Тема: **магазин телефонов** (витрина + описание БД + SQL‑запросы + псевдокод).

## Команда и роли (GitHub)

- **Admin + Developer (Write)**: `rruudy228`
- **Triage (PM/BA/тимлид)**: `wqedaaaam`
- **Преподаватель**: `@skv12` (доступ **Read**)

## Быстрый запуск витрины

1. Откройте `index.html` в браузере.
2. (Опционально) запустите локальный сервер:

   ```powershell
   python -m http.server 8000
   ```

   Затем откройте `http://localhost:8000`.

## Структура проекта

- `index.html` — витрина магазина телефонов
- `styles.css` — стили (светлая/тёмная тема)
- `theme.js` — переключение темы (сохраняет выбор в `localStorage`)
- `docs/architecture.md` — краткая архитектура/сущности и связи
- `docs/tasks.md` — псевдокод бизнес‑процессов
- `sql/schema.sql` — SQL‑схема БД
- `sql/queries.sql` — примеры SQL‑запросов

## Git/GitHub правила (для ЛР)

### Naming веток

Формат:

- `feature/<issue>-<slug>`
- `docs/<issue>-<slug>`
- `fix/<issue>-<slug>`
- `chore/<issue>-<slug>`

Примеры:

- `feature/1-db-schema`
- `docs/3-pseudocode`

### Соглашение о коммитах (Conventional Commits)

- `feat: ...`
- `docs: ...`
- `fix: ...`
- `chore: ...`

Примеры:

- `docs: add architecture and ER description`
- `feat: add initial database schema`

### PR flow

- 1 задача = 1 ветка = 1 Pull Request
- PR создаётся в `main`
- После review админ (`rruudy228`) выполняет merge

## Примечание

Работоспособность кода может не проверяться, но артефакты (Markdown/SQL) оформлены так, чтобы было видно командную работу и процесс через GitHub Projects.
