# 🚀 dockerhub-node-app

Aplicación mínima en Node.js para demostrar la construcción y publicación de imágenes Docker en Docker Hub. El flujo está automatizado con GitHub Actions.

## 📦 Tecnologías

- Node.js + Express
- Docker
- GitHub Actions
- Docker Hub

## 🧰 Estructura del proyecto

dockerhub-node-app/
├── app.js  
├── package.json  
├── dockerfile  
└── .github/  
.....└── workflows/  
......└── deploy-dockerhub.yml
 
## 🐳 Instrucciones para uso local

1. Instalar dependencias:
   `npm install`
2. Correr la app localmente:
   `node app.js`
3. Construir la imagen Docker:
   `docker build -t <tuusuario>/dockerhub-node-app:v1 .`
4. Probarla localmente:
   `docker run -p 3000:3000 <tuusuario>/dockerhub-node-app:v1`

## 🔁 Automatización CI/CD
Cada push a main genera y publica automáticamente la imagen en Docker Hub a través de GitHub Actions.

## 🔐 Secrets requeridos en GitHub
DOCKER_USERNAME  
DOCKER_PASSWORD (o token si usas 2FA)  

## 🌐 Resultado
Una vez desplegada correctamente, la app devuelve:
`¡Hola desde Docker Hub! 🚀`
