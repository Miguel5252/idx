
# Podcaster

# Stack Utilizado y arquitectura
- React
- Vite: He utilizado Vite por ser bastante rapido a la hora de crear un proyecto pequeño. Pensé en utilizar NextJS por todas las facilidades que ofrece el framework a nivel de caché e infraestructura pero al no tener requisitos de SEO y de requerir que las llamadas se hagan desde el lado del cliente yno del servidor, he descartado usarlo. 
- TypeScript: He decidido utilizar Typescript ya que lo utilizo siempre en todos mis nuevos proyectos. Hace que mi código llegue con menos errores a prodcción.
- React Router 5: Para realizar el proyecto en una SPA he utilizadp React Router por ser la libreria oficial y tener buen soporte de la comunidad.
- Tanstack Query: Para manejar la caché y obtención de datos. Para mi una de las librerias mas cómodas del lado del cliente. Tambien para manejar el estado en el que algo este cargando.

- Vitest y React Testing Library: Para la realizacion de los test he optado por Vitest ya que es muy parecido a una de las libreris mas populares (Jest) y se integra muy bien cin Vite al ser parte del mismo stack. 

# Instrucciones de Uso
Modo de Desarrollo
- Instala las dependencias: npm install
- Ejecuta la aplicación en modo de desarrollo: npm run dev
- Abre tu navegador y navega a http://localhost:5173/ para ver la aplicación en modo de desarrollo.

Modo de Producción
- Instala las dependencias: npm install
- Construye la aplicación para producción: npm run build
- ejecuta npm start y navega a http://localhost:5173/".


