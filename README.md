## 🔧 Solución de Problemas

### Error de Lockfile
Si encuentras el error `ERR_PNPM_OUTDATED_LOCKFILE`, ejecuta:
```bash
pnpm install --no-frozen-lockfile
```

### Versión de pnpm
El proyecto usa pnpm@10.x. Para garantizar que Vercel use la versión correcta de pnpm, añade lo siguiente en tu `package.json` (no en `vercel.json`):

```json
"packageManager": "pnpm@10.x.x"
```

Esto ayuda a que Vercel detecte y utilice la versión correcta de pnpm durante el build.

> **Nota:** No agregues la propiedad `corepack` en el archivo `vercel.json`, ya que esto genera un error de validación en Vercel.