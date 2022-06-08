# Ecommerce Back-end
Deploy https://infinite-earth-38624.herokuapp.com/production
Services: /products /categories

# Estructura del proyecto
    Interfaces:
        - Rutas por donde se acceden a los servicios
        - Controladores para recibir peticiones y mandar repositorios a los casos de uso

    Infraestructura: Está el core de la app
        - API: configuración básica del proyecto
        - config: configuración de ambientes (DB)
        - orm: Configuración de Typeorm, Entidades y Repositorios (Donde se hacen las consultas sql)
    Application:
        -Casos de uso: Une los controladores con el repositorio
