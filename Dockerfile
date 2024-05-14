# configura a imagem node para compilar a aplicação
# versão do node e do linux (AS build - alias)
FROM node:18-alpine AS build
# caminho da pasta, nesse caso será temporária
WORKDIR /tmp/app
# cópia dos packages para instalar dependencias
COPY package.json package-lock.json ./
# instalação das dependencias
RUN npm install \
    && npm cache clean --force  
# configuração da variável de ambiente externa
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
# copia do restante dos arquivos
COPY . .
# build do projeto
RUN npm run build

# configura a imagem nginx para servir a aplicação
FROM nginx:stable-alpine3.17
# copia o dist da imagem no caminho passado para dentro do caminho do nginx
COPY --from=build /tmp/app/dist /usr/share/nginx/html
# copiar o conteúdo do nginx para dentro da imagem
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf