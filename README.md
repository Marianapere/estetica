
# 💆‍♀️ Lovella Estética

Sitio web profesional desarrollado con Next.js y Tailwind CSS para una clínica estética.  
Incluye secciones informativas, diseño responsive, animaciones y próximamente login con cuenta de Google.

---

## 🚀 Tecnologías

- [Next.js 14 (App Router)](https://nextjs.org)
- [React 18](https://reactjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [NextAuth.js](https://next-auth.js.org) (autenticación con Google - en progreso)

---

## 🧩 Estructura del proyecto

```

proyecto\_estetica/
├── front/                # Aplicación frontend (Next.js)
│   ├── components/       # Componentes reutilizables
│   ├── pages/ o app/     # Rutas del sitio (App Router)
│   ├── public/images/    # Imágenes del proyecto
│   ├── styles/           # Estilos globales
│   └── ...
├── back/ (opcional)      # Backend si aplica
└── README.md             # Documentación 

````

---

## 🛠 Instalación y ejecución local

bash
all
npm run devcd front
npm inst


Abrí el navegador en [http://localhost:3000](http://localhost:3000)

---

## 🔐 Configuración de variables de entorno

Crea un archivo `.env.local` en `front/` y agregá lo siguiente si usás autenticación:

```env
GOOGLE_CLIENT_ID=tu_client_id
GOOGLE_CLIENT_SECRET=tu_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=una_clave_segura
```

---

## 📌 Funcionalidades

* ✅ Diseño 100% responsive
* ✅ Navbar y Footer unificados
* ✅ Galería de imágenes con animaciones
* ✅ Estructura modular por componentes
* 🔒 Login con cuenta de Google (en desarrollo)
* 📝 Panel de usuario (futuro)

---

## 🔄 Ramas principales

* `main`: Rama de producción
* `feature/google-auth`: Autenticación con Google
* `feature/hero-carousel`: Carrusel de imágenes en el Hero

---

## 👩‍💻 Desarrolladora

* **Mariana Pereyra.**
* Portfolio: *\[tu enlace si tenés]*
* GitHub: [https://github.com/Marianapere](https://github.com/Marianapere)

---

## 📦 Deploy

Próximamente desplegado en [Vercel](https://vercel.com)

---
