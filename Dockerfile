FROM nginx:alpine

# remover config default (opcional mas limpo)
RUN rm -rf /usr/share/nginx/html/*

# copiar projeto
COPY . /usr/share/nginx/html

# expor porta
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]