# Proyecto Semestral

Este proyecto está configurado con el stack moderno de React:

- **React 19** - Biblioteca de UI
- **Vite** - Bundler y servidor de desarrollo ultra rápido
- **TypeScript** - Tipado estático para JavaScript
- **SWC** - Compilador ultra rápido (más rápido que Babel)
- **ESLint** - Linter para mantener código limpio

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

### `npm run dev`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará automáticamente si haces cambios.\
También verás errores de linting en la consola.

### `npm run build`

Construye la aplicación para producción en la carpeta `dist`.\
Optimiza el build para el mejor rendimiento.

### `npm run preview`

Previsualiza la build de producción localmente.

### `npm run lint`

Ejecuta ESLint para verificar el código.

## Características del Stack

- **Vite**: Servidor de desarrollo extremadamente rápido con HMR (Hot Module Replacement)
- **SWC**: Compilación ultra rápida, hasta 20x más rápido que Babel
- **TypeScript**: Tipado estático para mejor DX y menos errores
- **ESLint**: Linting automático con reglas para React y TypeScript

## Estructura del Proyecto

```
src/
├── App.tsx          # Componente principal
├── index.tsx        # Punto de entrada
├── App.css          # Estilos del componente App
└── index.css        # Estilos globales
```

## Aprende Más

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://reactjs.org/)
- [Documentación de TypeScript](https://www.typescriptlang.org/)
- [Documentación de SWC](https://swc.rs/)