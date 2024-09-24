# Указываем базовый образ для сборки
FROM node:14 AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и yarn.lock
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем остальные файлы проекта
COPY . .

# Собираем проект
RUN yarn build

# Указываем базовый образ для сервера
FROM nginx:alpine

# Копируем собранные файлы в директорию Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем конфигурацию Nginx (если есть)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Указываем порт, который будет использоваться
EXPOSE 8080

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
