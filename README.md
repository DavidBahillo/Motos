# Motos S.L. - Web Corporativa y Catálogo

Aplicación web desarrollada con Angular 20 para un concesionario y taller de motos.

Incluye:

- Página de inicio con secciones destacadas.
- Catálogo de motocicletas.
- Ficha de detalle por producto.
- Página de contacto con formulario e información de negocio.
- Secciones legales (aviso legal, privacidad, cookies y condiciones).

## Tecnologías

- Angular 20 (standalone components)
- Angular Router
- TypeScript 5.9
- Karma + Jasmine para tests unitarios

## Requisitos

- Node.js 20 o superior
- npm 10 o superior

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
npm start
npm run build
npm run watch
npm test
```

Descripción rápida:

- `npm start`: lanza el servidor de desarrollo en `http://localhost:4200`.
- `npm run build`: genera build de producción en `dist/motos`.
- `npm run watch`: build en modo observación para desarrollo.
- `npm test`: ejecuta pruebas unitarias con Karma.

## Rutas principales

- `/` - Inicio
- `/nosotros` - Sobre la empresa
- `/productos` - Catálogo
- `/productos/:id` - Detalle de producto
- `/contacto` - Contacto
- `/legal/aviso-legal` - Aviso legal
- `/legal/condiciones` - Condiciones de venta
- `/legal/privacidad` - Política de privacidad
- `/legal/cookies` - Política de cookies

## Estructura del proyecto

```text
src/
	app/
		components/
			header/
			footer/
		pages/
			home/
			about/
			products/
			product-detail/
			contact/
			legal/
				aviso/
				condiciones/
				cookies/
				politicaprivacidad/
```

Datos del catálogo:

- El catálogo está centralizado en `src/app/pages/products/products.data.ts`.
- El detalle de producto utiliza el parámetro de ruta `:id`.

## Assets

Las imágenes estáticas se encuentran en `public/img` y se sirven como recursos públicos de la app.

## Estado actual del proyecto

- Build de producción: correcto (`npm run build`).
- Tests unitarios: correctos (`npm test -- --watch=false --browsers=ChromeHeadless`).
- Formulario de contacto: validación en cliente y envío mediante cliente de correo (`mailto`).

## Autoría

Proyecto base generado con Angular CLI y adaptado para la web de Motos S.L.
