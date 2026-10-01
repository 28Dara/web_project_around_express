# Around The U.S. — API REST con Express

## Descripción

Servidor back end para el proyecto "Alrededor de los EE. UU.", construido con **Node.js**, **Express** y **TypeScript**. Es la primera etapa de la API propia que reemplazará al servidor externo usado en el curso de front end, desarrollada como parte del programa de desarrollo web de TripleTen.

Por ahora el servidor lee sus datos desde archivos JSON locales (`users.json` y `cards.json`) y los devuelve mediante rutas REST. Es una solución temporal hasta integrar una base de datos en el siguiente sprint.

## Tecnologías

- Node.js con Módulos ES (`"type": "module"`)
- Express 5
- TypeScript (compilación con `tsc`)
- `tsx` para recarga automática en desarrollo (hot reload)
- ESLint (`typescript-eslint`) y Prettier para calidad y formato del código
- EditorConfig para mantener un estilo consistente entre editores
- `node:fs/promises` y `node:path` para leer archivos de forma asíncrona

## Rutas disponibles

| Método | Ruta             | Respuesta                         |
| ------ | ---------------- | --------------------------------- |
| GET    | `/users`         | Lista JSON de todos los usuarios  |
| GET    | `/cards`         | Lista JSON de todas las tarjetas  |
| GET    | `/users/:userId` | Datos JSON del usuario con ese ID |

### Respuestas de error

| Estado | Cuándo ocurre                     | Respuesta                                              |
| ------ | --------------------------------- | ------------------------------------------------------ |
| 404    | El ID de usuario no existe        | `{ "message": "ID de usuario no encontrado" }`         |
| 404    | La dirección solicitada no existe | `{ "message": "Recurso solicitado no encontrado" }`    |
| 500    | Error inesperado del servidor     | `{ "message": "Ha ocurrido un error en el servidor" }` |

## Scripts

| Comando         | Qué hace                                              |
| --------------- | ----------------------------------------------------- |
| `npm run dev`   | Inicia el servidor en `localhost:3000` con hot reload |
| `npm run build` | Compila el código de `src/` a JavaScript en `dist/`   |
| `npm run start` | Inicia la versión compilada del servidor              |
| `npm run lint`  | Revisa el código con ESLint                           |

## Arquitectura

El proyecto usa un enfoque modular: cada carpeta tiene una única responsabilidad.

| Archivo / carpeta  | Responsabilidad                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `src/app.ts`       | Punto de entrada: crea el servidor, conecta las rutas y define los manejadores de 404 y 500 |
| `src/routes/`      | Define qué URL existe y qué controlador la atiende                                          |
| `src/controllers/` | Contiene la lógica de cada ruta (buscar datos y responder)                                  |
| `src/reader.ts`    | Lee y convierte a objeto los archivos JSON de `data/`                                       |
| `data/`            | Archivos de datos temporales (`users.json`, `cards.json`)                                   |

El orden de los middlewares en `app.ts` es importante: primero el router, después el manejador de 404 y al final el manejador de errores 500.

### Estructura de carpetas

```
web_project_around_express/
├── data/
│   ├── cards.json
│   └── users.json
├── src/
│   ├── controllers/
│   │   ├── cards.ts
│   │   └── users.ts
│   ├── routes/
│   │   ├── cards.ts
│   │   ├── index.ts
│   │   └── users.ts
│   ├── app.ts
│   └── reader.ts
├── .editorconfig
├── .gitignore
├── .prettierrc
├── eslint.config.js
├── package.json
└── tsconfig.json
```

## Lo aprendido

- Crear un servidor con Express y organizarlo en rutas y controladores
- Construir rutas absolutas de forma segura con `import.meta.dirname` y `path.join()`
- Leer archivos de forma asíncrona sin bloquear el servidor con `fs/promises`
- Importancia del orden de los middlewares en Express
- Cómo Express identifica un manejador de errores (4 parámetros) y cómo silenciar la regla de ESLint con `eslint-disable-next-line`
- Configurar un entorno profesional: linter, formateador, EditorConfig y hot reload

## Estado del proyecto

Las tres rutas del brief están implementadas y probadas, junto con las respuestas 404 y 500. El código pasa `npm run lint` sin errores y compila con `npm run build`.

## Autor

Dara Rangel
