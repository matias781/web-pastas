# Web-Pastas — Sitios El Buen Gusto + Stazione di Pasta

Carpeta de trabajo para los dos sitios web del cliente.

## Estructura

```
Web-Pastas/
├── assets/                  ← material gráfico crudo del cliente
│   ├── el-buen-gusto/       (logos, fotos productos, fotos fábrica)
│   ├── stazione-di-pasta/   (logos, fotos productos, fotos fábrica)
│   └── compartido/          (cualquier asset que sirva para ambos)
│
├── contenido/               ← textos crudos del cliente
│   ├── el-buen-gusto/info.txt
│   ├── stazione-di-pasta/info.txt
│   └── datos-contacto/contacto.txt
│
└── sitios/                  ← código de los sitios (Astro)
    ├── el-buen-gusto/       (proyecto Astro 1)
    └── stazione-di-pasta/   (proyecto Astro 2)
```

## Stack

- **Astro 5** + **Tailwind CSS 3** + **Motion** (animaciones)
- **GitHub** (repo privado) + **Netlify** (deploy automático)
- 1 dominio por sitio

## Estado actual

- [x] Estructura de carpetas creada
- [x] Node.js + Git instalados
- [x] Proyectos Astro base creados con paletas reales del cliente
- [x] Material del cliente (logos, fotos, textos, guías de marca)
- [x] Hero, Historia/Filosofía, Productos/La Pasta, Diferenciales, Visitanos en ambos sitios
- [x] Carrusel + banner de proceso (Stazione)
- [ ] Cuentas: GitHub + Netlify (en progreso)
- [ ] Dominios comprados
- [ ] Optimización de imágenes para producción
- [ ] Deploy en producción

## Cómo correr el sitio localmente (referencia técnica)

```bash
cd sitios/el-buen-gusto
npm run dev
# Abrir http://localhost:4321
```

## Mantenimiento

Actualizaciones planificadas: **bimestrales**.
Si el cliente pide un cambio entre actualizaciones, evaluar urgencia.
