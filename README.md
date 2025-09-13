# Next Banca app

## Descripcion del proyecto

Aplicacion web desarrollada con Next Js para dar solucion a lo solicitado en la prueba tecnica de desarrollador Front End

### Creacion del proyecto

Este proyecto ha sido creado utilizando [Next JS](https://nextjs.org/).

### Lenguaje de programacion

Banca App utiliza [TypeScript](https://www.typescriptlang.org/) un Superset de JavaScript que permite tipado estricto y agrega funcionalidades como: Interfaces, types, decoradores, herencia, entre otros.


### Gestor de dependencias

El gestor de dependencias utilizado es [Yarn](https://classic.yarnpkg.com/en/).
Tiene un funcionamiento similar a NPM, variando unicamente la sintaxis

### Ejemplo

        Sintaxis npm:
        npm install react-redux

        Sintaxis yarn:
        yarn add react-redux

Todas las librerias existentes en [NPM](https://www.npmjs.com/) pueden ser instaladas utilizando yarn, reemplanzando el **npm install** por un **yarn add**

### Version de Node

Se recomienda utilizar la version **v22.19.0** o superiores para el correcto funcionamiento de las dependencias

### Comandos del proyecto

    Clonar proyecto
    git clone https://github.com/JeiG13/prueba-next-banca-app.git

    Instalar dependencias
    yarn

    Ejecutar proyecto
    yarn dev

    Elaborar build
    yarn build


### Manejo del estado global de la aplicación

Para el manejo del estado global de Banca app se utiliza [Redux-Toolkit](https://redux-toolkit.js.org/), en su store se almacenan todos los estados de la aplicación, siendo proveidos a cada uno de los componentes que se encuentran en esta. Los slices deben agregarse en el root reducer de la aplicación alojado en el fichero **store.ts**

### Arquitectura del proyecto

Banca App sigue la arquitectura **Scream Architecture**, la cual se centra en organizar el código en capas, priorizando la **modularización, claridad, escalabilidad y testabilidad**.  
Esto permite que cada módulo tenga responsabilidades claras y separadas, facilitando la comprensión, el mantenimiento y la integración de nuevas funcionalidades.  
Entre los beneficios de esta arquitectura se encuentran:  
- Facilitar la comprensión del flujo de datos y responsabilidades de cada módulo.  
- Aumentar la reutilización y mantenimiento de componentes y servicios.  
- Permitir la integración sencilla de nuevas funcionalidades sin afectar otros módulos.

### React Strict Mode

El proyecto cuenta con **React Strict Mode** activado. Esto significa que algunas funciones de React, especialmente los **useEffect**, se ejecutan **dos veces en desarrollo** para ayudar a detectar efectos secundarios y errores potenciales.  
El impacto principal es:  
- Duplicación de ciertas funciones o llamadas a efectos durante el desarrollo.  
- No afecta la ejecución en producción, donde React ejecuta cada efecto una sola vez.  
- Permite identificar dependencias faltantes o efectos no puros durante el desarrollo.

### Dependencias del API y mocks

Para el correcto funcionamiento, Banca App requiere del API **mobile-frontend-challenge-mock** ejecutandose en la direccion **http://localhost:5566**, el cual provee los datos principales de la aplicación.  
Adicionalmente, se crearon **mocks locales** para:  
- Mostrar correctamente los datos esperados en la interfaz.  
- Permitir probar funcionalidades de filtros sin modificar los datos del API.  