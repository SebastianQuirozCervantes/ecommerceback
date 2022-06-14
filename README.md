# Ecommerce 
## Back-end
### Description
Este proyecto es un para los servicios que se consumirán desde el front para obtener los productos y/o
categorías según una búsqueda específica.

### Technologies
***
Principales Tecnologías usadas en el proyecto:
* [Node] Version 14 
* [Express] Version 4.18.1
* [Typeorm] Version 0.2.27
* [Babel]

### Installation
***
Cómo instalar el proyecto. 
```
$ git clone https://github.com/SebastianQuirozCervantes/ecommerceback.git
$ npm install
$ npm start
```

### Deploy URL
https://infinite-earth-38624.herokuapp.com/production

### Services
1. /products Devuelve los productos.
2. /categories Devuelve las categorías con la cantidad de productos que tiene.

### Estructura del proyecto
1. Interfaces:
    - Rutas por donde se acceden a los servicios
    - Controladores para recibir peticiones y mandar repositorios a los casos de uso

2. Infraestructura: Está el core de la app
    - API: configuración básica del proyecto
    - config: configuración de ambientes (DB)
    - orm: Configuración de Typeorm, Entidades y Repositorios (Donde se hacen las consultas sql)
3. Application:
    - Casos de uso: Une los controladores con el repositorio
