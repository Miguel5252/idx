
# Podcaster

# Stack Utilizado y arquitectura
- React
- Vite: He utilizado Vite por ser bastante rapido a la hora de crear un proyecto pequeño. Pensé en utilizar NextJS por todas las facilidades que ofrece el framework a nivel de caché e infraestructura pero al no tener requisitos de SEO y considerar la últiva version 14 aún un poco mas lenta en ciertas situaciones que Vute he optado por esta última. 
- TypeScript: He decidido utilizar Typescript ya que lo utilizo siempre en todos mis nuevos proyecyos. Hace que mi codigo llegue con menos errores a prodcción.
- React Router 5: Para realizar el proyecto en una SPA. Al no usar Nextjs y su nuevo App Routing y tirar por VIte. He decidido utilizar React Router como enrutador.
- Tanstack Query: Para manejar la caché y obtención de datos. Para mi una de las librerias mas cómodas. 
- React Redux Toolkit: Para manejar estados globales de la UI. Es cierto que solo he tenido necesidad de manejar un estado global y que para esto podia haber utilizado el contexto de react, pero en los requisitos se hablaba de que la app fuera escalable y he decidido utilizar React Redux para un uso futuro mas intenso.
- Vitest y React Testing Library: Para la realizacion de los test he optado por Vitest ya que es muy parecido a una de las libreris mas populares (Jest) y se integra muy bien cin VIte al ser parte del mismo stack. 

# Instrucciones de Uso
Modo de Desarrollo
- Instala las dependencias: npm install
- Ejecuta la aplicación en modo de desarrollo: npm run dev
- Abre tu navegador y navega a http://localhost:5173/ para ver la aplicación en modo de desarrollo.

Modo de Producción
- Instala las dependencias: npm install
- Construye la aplicación para producción: npm run build
- La aplicación compilada estará disponible en el directorio dist. Puedes servir este directorio con cualquier servidor HTTP compatible o Ejecutar "npm run preview".


