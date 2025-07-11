# Portfolio Personal - Astro

Portafolio personal desarrollado con Astro, TailwindCSS y GSAP para las animaciones.

## 🚀 Tecnologías

- [Astro](https://astro.build)
- [TailwindCSS](https://tailwindcss.com)
- [GSAP](https://greensock.com/gsap/)

## 📦 Estructura del Proyecto

```text
/
├── public/
│   └── icons/        # Iconos SVG y PNG
├── src/
│   ├── components/   # Componentes Astro
│   ├── layouts/      # Plantillas
│   ├── pages/        # Páginas
│   └── styles/       # Estilos globales
```

## 🛠️ Comandos

| Comando                | Acción                                           |
| :-------------------- | :----------------------------------------------- |
| `pnpm install`        | Instala dependencias                             |
| `pnpm run dev`        | Inicia servidor local en `localhost:4321`        |
| `pnpm run build`      | Construye el sitio para producción              |
| `pnpm run preview`    | Previsualiza la construcción localmente         |

## 🚀 Despliegue en Vercel

1. Crear una cuenta en [Vercel](https://vercel.com)
2. Asegurarse de que el archivo package.json y pnpm-lock.yaml estén sincronizados:
   ```bash
   pnpm install --no-frozen-lockfile
   git add .
   git commit -m "update dependencies"
   git push
   ```
3. En el dashboard de Vercel, importar el proyecto y en la configuración del build:
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
   - Install Command: `pnpm install --no-frozen-lockfile`

## 🔧 Solución de Problemas

### Error de Lockfile
Si encuentras el error `ERR_PNPM_OUTDATED_LOCKFILE`, ejecuta:
```bash
pnpm install --no-frozen-lockfile
```

### Versión de pnpm
El proyecto usa pnpm@10.x. Para especificar la versión en Vercel, añade en la configuración del proyecto:
```json
{
  "corepack": {
    "enabled": true,
    "packageManager": "pnpm@10.x"
  }
}
```

## 📝 Notas Adicionales

- El sitio está optimizado para rendimiento y SEO
- Las animaciones utilizan GSAP para scroll triggers
- Diseño responsivo con Tailwind CSS
