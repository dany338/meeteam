<p align="center">
  <a href="#" target="blank"><img src="./public/images/logo.png" width="200" alt="Nest Logo" /></a>
</p>

# Descripción

## Correr en dev


1. Clonar el repositorio.
2. Crear una copia del ```.env.template``` y renombrarlo a ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias ```npm install```
4. Ejecutar el comando ```npm run dev``` para ejecutar aplicación en desarrollo
5. Ejecutar estos comandos de Prisma
```
npx prisma migrate dev
npx prisma generate
```
6. Correr el seed de datos para poblar con datos de ejemplo

```shell
# users, products, product_images
npm run seed
```
7. Correr prisma studio para ver las tablas inicialmente de session en: http://localhost:5555/

```shell
#Es una manera rapida de poder ver los registros creados, atraves del navegador y sirve para editar eliminar tambien en caso tal
npx prisma studio
```
<p align="center">
  <a href="#" target="blank"><img src="./public/images/tasks-prisma-studio.PNG" width="100%" alt="Prisma studio - table tasks" /></a>
</p>

5. Correr las migraciones de Primsa ```npx prisma migrate dev```
6. Correr el proyecto ```npm run dev```

## Nota: Usuario por defecto para testear en desarrollo rol: user
__usuario:__  test1@google.com
__password:__ 123456

## Nota: Usuario por defecto para testear en desarrollo rol: admin
__usuario:__  dany338@gmail.com
__password:__ 123456

## Correr en prod
```shell
npm run build
```