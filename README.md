# Gorras Store - E-commerce de Gorras

## Nombre
**Gorras Store** - Una aplicación web de e-commerce especializada en la venta de gorras y accesorios de moda urbana.

## Descripción y Características Principales

Gorras Store es una plataforma de comercio electrónico moderna desarrollada con React y Node.js que ofrece una experiencia de compra intuitiva y atractiva para los amantes de las gorras. La aplicación cuenta con:

- **Catálogo de productos**: Visualización de diferentes tipos de gorras (Snapback, Trucker, Dad Hat)
- **Sistema de autenticación**: Registro y login de usuarios con JWT
- **Gestión de compras**: Carrito de compras funcional con contador de productos
- **Navegación intuitiva**: Sistema de rutas con React Router
- **Diseño responsivo**: Interfaz adaptable a diferentes dispositivos
- **Tema oscuro**: Diseño moderno con fondo negro y acentos en rojo
- **Integración con API**: Conexión con backend para gestión de datos
- **Despliegue automatizado**: Configuración para GitHub Pages

## Instalación

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn
- MongoDB (para el backend)

### Frontend
```bash
# Clonar el repositorio
git clone https://github.com/stiv2021-creator/taller_4.git

# Navegar al directorio del frontend
cd frontend

# Instalar dependencias
npm install

# O con yarn
yarn install
```

### Backend
```bash
# Navegar al directorio del backend
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus credenciales de MongoDB
```

## Ejecución

### Desarrollo
```bash
# Iniciar el frontend (desde la carpeta frontend)
npm run dev

# Iniciar el backend (desde la carpeta backend)
npm run dev
```

### Producción
```bash
# Construir el frontend
npm run build

# Desplegar en GitHub Pages
npm run deploy
```

La aplicación estará disponible en:
- Frontend: http://localhost:5173
- Backend API: http://localhost:3001

## Tecnologías

### Frontend
- **React 19.2.4** - Framework de JavaScript
- **Vite 8.0.0** - Herramienta de construcción y desarrollo
- **React Router 7.13.1** - Gestión de rutas
- **Bootstrap 5.3.8** - Framework CSS
- **Material-UI 7.3.9** - Componentes UI
- **Emotion 11.14.0** - Librería de estilos CSS-in-JS

### Backend
- **Node.js** - Entorno de ejecución JavaScript
- **Express 5.2.1** - Framework web
- **MongoDB 9.4.1** - Base de datos NoSQL
- **JWT 9.0.3** - Autenticación JSON Web Tokens
- **bcryptjs 3.0.3** - Encriptación de contraseñas
- **CORS 2.8.6** - Configuración de políticas CORS

### Herramientas de Desarrollo
- **ESLint** - Linting de código
- **Babel** - Transpilación JavaScript
- **gh-pages** - Despliegue en GitHub Pages
- **nodemon** - Recarga automática del servidor

## Arquitectura o Encarpetado

```
heatsshop/
|-- frontend/                 # Aplicación React
|   |-- src/
|   |   |-- features/         # Módulos de características
|   |   |   |-- layout/       # Componentes de layout (Header, Footer, Content)
|   |   |   |-- Views/        # Vistas principales (Article, Offers)
|   |   |   |-- auth/         # Autenticación (Login, Register, MyAccount)
|   |   |   |-- api/          # Componentes de API
|   |   |-- assets/           # Imágenes y recursos estáticos
|   |   |-- App.jsx           # Componente principal con rutas
|   |   |-- main.jsx          # Punto de entrada
|   |   |-- index.css         # Estilos globales
|   |-- package.json
|   |-- vite.config.js
|-- backend/                  # API Node.js
|   |-- config/              # Configuración de base de datos
|   |-- models/              # Modelos de datos MongoDB
|   |-- routes/              # Rutas de la API
|   |-- server.js            # Servidor principal
|   |-- .env                 # Variables de entorno
|   |-- package.json
|-- README.md
```

### Patrón Arquitectónico
- **Feature-based Architecture**: Organización por características funcionales
- **Component-based UI**: Componentes reutilizables de React
- **RESTful API**: Endpoints REST para comunicación frontend-backend
- **Context API**: Gestión de estado global para el carrito de compras

## Screenshot de la Interfaz Gráfica

### Página Principal
![Página Principal](assets/img/screenshot-home.png)

La interfaz presenta un diseño moderno con:
- **Header**: Navegación con logo "Gorras Store" y menú de navegación
- **Hero Section**: Título destacado con el texto "Mejores opciones de gorras"
- **Catálogo de Productos**: Cards en grid mostrando diferentes tipos de gorras
- **Footer**: Información de la tienda, redes sociales y enlaces importantes

### Características de UI
- Tema oscuro con fondo negro (#000000)
- Acentos de color rojo (#ff2e2e) para branding
- Diseño responsivo con Bootstrap
- Animaciones hover en las cards de productos
- Contador de productos en el ícono del carrito

## Datos Importantes del Autor

### Desarrollador
**Daniel Cardona**  
Desarrollador Web Full Stack especializado en React y Node.js

### Contacto
- **GitHub**: [@stiv2021-creator](https://github.com/stiv2021-creator)
- **Proyecto**: https://stiv2021-creator.github.io/taller_4
- **Email**: [contacto@example.com]

### Información del Proyecto
- **Versión**: 1.0.0
- **Licencia**: ISC
- **Fecha de Creación**: 2026
- **Estado**: Activo en desarrollo

### Tecnologías Dominadas
- Frontend: React, Vue.js, HTML5, CSS3, JavaScript ES6+
- Backend: Node.js, Express, MongoDB, PostgreSQL
- Herramientas: Git, Webpack, Vite, Docker

---

**Nota**: Este proyecto fue desarrollado como parte del Taller 4 de programación web, demostrando habilidades en el desarrollo de aplicaciones full stack modernas con arquitectura cliente-servidor.
