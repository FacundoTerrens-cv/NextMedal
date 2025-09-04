# 🚀 Tutorial Completo: NextMedal - De Cero a Azure

**Guía paso a paso para configurar, desarrollar y desplegar NextMedal en Azure**

---

## 📋 Tabla de Contenidos

1. [Prerrequisitos](#prerrequisitos)
2. [Clonar el Repositorio](#clonar-el-repositorio)
3. [Configurar Sanity CMS](#configurar-sanity-cms)
4. [Configurar Variables de Entorno](#configurar-variables-de-entorno)
5. [Instalación y Desarrollo Local](#instalación-y-desarrollo-local)
6. [Preparar para Producción](#preparar-para-producción)
7. [Configurar Azure App Service](#configurar-azure-app-service)
8. [Desplegar a Azure](#desplegar-a-azure)
9. [Configuración Final](#configuración-final)
10. [Solución de Problemas](#solución-de-problemas)

---

## 🔧 Prerrequisitos

### Software Necesario:
- **Node.js 22+** (LTS recomendado)
- **Git** para clonar el repositorio
- **npm** (viene con Node.js)
- **FileZilla** para subir archivos a Azure
- **Cuenta de Azure** (gratuita)
- **Cuenta de Sanity** (gratuita)

### Verificar Instalaciones:
```bash
node --version    # Debe ser 22+
npm --version     # Debe ser 10+
git --version     # Cualquier versión reciente
```

---

## 📥 Clonar el Repositorio

### 1. Abrir Terminal/CMD
Navega a la carpeta donde quieres instalar el proyecto:
```bash
cd D:\xampp\htdocs
```

### 2. Clonar NextMedal
```bash
git clone https://github.com/Medal-Social/NextMedal.git
cd NextMedal
```

### 3. Verificar Estructura
Deberías ver estas carpetas principales:
- `src/` - Código fuente
- `sanity/` - Configuración de Sanity
- `public/` - Archivos estáticos
- `docs/` - Documentación

---

## 🎨 Configurar Sanity CMS

### 1. Crear Cuenta en Sanity
1. Ve a [sanity.io](https://sanity.io)
2. Haz clic en **"Get started for free"**
3. Regístrate con tu email o GitHub
4. Confirma tu email

### 2. Crear Nuevo Proyecto
1. En el dashboard de Sanity, haz clic en **"Create project"**
2. **Nombre del proyecto**: `mi-nextmedal` (o el que prefieras)
3. **Dataset**: `production`
4. **Plan**: Free (gratuito)
5. Haz clic en **"Create project"**

### 3. Obtener Credenciales
Una vez creado el proyecto, necesitarás:

**Para acceder a las credenciales:**
1. Ve a la página de tu proyecto (no al Dashboard principal)
2. Busca "Projects" o "Manage" en el menú
3. Selecciona tu proyecto de NextMedal

**Credenciales necesarias:**
- **Project ID**: Se muestra en la URL o en Settings → General
- **Dataset**: `production` (por defecto)
- **API Token**: Ve a API → Tokens → Create token

### 4. Configurar Sanity Studio
```bash
# En la carpeta del proyecto
npm install -g @sanity/cli
sanity init --template clean --create-project "false"
```

---

## ⚙️ Configurar Variables de Entorno

### 1. Crear Archivo .env.local
En la raíz del proyecto, crea el archivo `.env.local`:

```bash
# Variables para desarrollo local
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Configuración de Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=tu-project-id-aqui
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=tu-token-aqui

# Opcional: Para previews
SANITY_API_WRITE_TOKEN=tu-write-token-aqui
```

### 2. Reemplazar Valores
- `tu-project-id-aqui`: Tu Project ID de Sanity
- `tu-token-aqui`: Tu API Token de Sanity

### 3. Verificar Archivo
El archivo `.env.local` debe estar en la raíz del proyecto:
```
NextMedal/
├── .env.local          ← Aquí
├── package.json
├── src/
└── ...
```

---

## 💻 Instalación y Desarrollo Local

### 1. Instalar Dependencias
```bash
# Opción A: Con npm (recomendado para Azure)
npm install

# Opción B: Con pnpm (puede dar problemas en Azure)
pnpm install
```

### 2. Construir el Proyecto
```bash
npm run build
```

### 3. Iniciar Servidor de Desarrollo
```bash
npm run dev
```

### 4. Verificar Funcionamiento
- Abre tu navegador en `http://localhost:3000`
- Deberías ver la página principal de NextMedal
- Ve a `http://localhost:3000/admin` para Sanity Studio

### 5. Configurar Sanity Studio
1. En `http://localhost:3000/admin`
2. Crea tu primer documento
3. Configura la estructura de tu sitio

**⚠️ Nota Importante**: Tu proyecto NO aparecerá en "Studios & Apps" de Sanity porque está integrado localmente. Esto es normal y correcto. Siempre accede a través de `localhost:3000/admin` durante el desarrollo.

---

## 🏗️ Preparar para Producción

### 1. Construir para Producción
```bash
npm run build
```

### 2. Verificar Carpeta Standalone
Después del build, deberías tener:
```
.next/
└── standalone/
    ├── server.js          ← Archivo principal
    ├── package.json
    ├── node_modules/      ← Dependencias
    ├── public/            ← Archivos estáticos
    └── static/            ← Archivos estáticos
```

### 3. Probar Build Local
```bash
npm start
```
Visita `http://localhost:3000` para verificar que funciona.

---

## ☁️ Configurar Azure App Service

### 1. Acceder a Azure Portal
1. Ve a [portal.azure.com](https://portal.azure.com)
2. Inicia sesión con tu cuenta de Microsoft

### 2. Crear App Service
1. Haz clic en **"Create a resource"**
2. Busca **"App Service"**
3. Haz clic en **"Create"**

### 3. Configurar App Service
**Basics:**
- **Subscription**: Tu suscripción
- **Resource Group**: Crear nuevo o usar existente
- **Name**: `mi-nextmedal-app` (debe ser único)
- **Publish**: Code
- **Runtime stack**: Node 22 LTS
- **Operating System**: Linux
- **Region**: Elige la más cercana

**App Service Plan:**
- **Plan**: Free F1 (gratuito) o Basic B1 (recomendado)

### 4. Crear el Servicio
Haz clic en **"Review + create"** → **"Create"**

---

## 📤 Desplegar a Azure

### 1. Obtener Credenciales FTP
1. Ve a tu App Service en Azure Portal
2. En el menú lateral, busca **"Deployment Center"**
3. Selecciona **"FTP"** como método
4. Anota las credenciales:
   - **FTP Hostname**: `tu-app.ftp.azurewebsites.windows.net`
   - **Username**: `tu-app\$tu-app`
   - **Password**: (se genera automáticamente)

### 2. Configurar FileZilla
1. Abre FileZilla
2. Configura la conexión:
   - **Host**: `tu-app.ftp.azurewebsites.windows.net`
   - **Username**: `tu-app\$tu-app`
   - **Password**: (la que te dio Azure)
   - **Port**: 21

### 3. Conectar y Subir Archivos
1. Conecta a Azure
2. Navega a `/site/wwwroot/` en el servidor
3. **Elimina** el archivo `hostingstart.html` existente
4. **Sube TODOS** los archivos de `.next/standalone/`:
   - `server.js`
   - `package.json`
   - `node_modules/` (carpeta completa)
   - `public/` (carpeta completa)
   - `static/` (carpeta completa)

### 4. Esperar Subida Completa
- La subida puede tomar varios minutos
- No cierres FileZilla hasta que termine
- Ignora errores de enlaces simbólicos (son normales)

---

## ⚙️ Configuración Final

### 1. Configurar Comando de Inicio
1. En Azure Portal, ve a **"Configuration"**
2. **"General settings"**
3. **Startup command**: `node server.js`
4. Haz clic en **"Save"**

### 2. Configurar Variables de Entorno
1. En **"Configuration"** → **"Application settings"**
2. Agrega estas variables:
   ```
   NEXT_PUBLIC_BASE_URL = https://tu-app.azurewebsites.net
   NEXT_PUBLIC_SANITY_PROJECT_ID = tu-project-id
   NEXT_PUBLIC_SANITY_DATASET = production
   SANITY_API_READ_TOKEN = tu-token
   ```

### 3. Reiniciar el Servicio
1. Ve a **"Overview"**
2. Haz clic en **"Restart"**

### 4. Verificar Despliegue
1. Visita `https://tu-app.azurewebsites.net`
2. Deberías ver tu sitio NextMedal funcionando
3. Ve a `https://tu-app.azurewebsites.net/admin` para Sanity Studio

---

## 🔧 Solución de Problemas

### Error: "Could not open file for reading"
**Causa**: Enlaces simbólicos de pnpm
**Solución**: Usar npm en lugar de pnpm para el build

### Error: "Application failed to start"
**Causa**: Comando de inicio incorrecto
**Solución**: Verificar que el startup command sea `node server.js`

### Error: "Missing environment variables"
**Causa**: Variables de entorno no configuradas
**Solución**: Agregar todas las variables en Azure Configuration

### Error: "Sanity connection failed"
**Causa**: Credenciales incorrectas
**Solución**: Verificar Project ID y API Token

### Error: "Proyecto no aparece en Studios & Apps"
**Causa**: Confusión sobre dónde buscar el proyecto
**Solución**: El proyecto está integrado localmente, accede a través de `localhost:3000/admin`

### Error: "FileZilla connection failed"
**Causa**: Credenciales FTP incorrectas
**Solución**: Regenerar credenciales en Deployment Center

---

## 📝 Comandos de Referencia

### Desarrollo Local:
```bash
npm install          # Instalar dependencias
npm run dev         # Servidor de desarrollo
npm run build       # Construir para producción
npm start           # Probar build local
```

### Azure:
```bash
# No hay comandos específicos, todo se hace por FTP
```

### Sanity:
```bash
sanity init         # Inicializar proyecto
sanity deploy       # Desplegar studio
```

---

## 👥 Gestión de Usuarios

### Invitar Colaboradores al Panel de Administración

1. **Acceder a Sanity**:
   - Ve a [sanity.io](https://sanity.io)
   - Accede a tu proyecto
   - Ve a "Members" o "Team"

2. **Invitar usuarios**:
   - Haz clic en "Invite member"
   - Ingresa el email de la persona
   - Selecciona el rol:
     - **Editor**: Crear y editar contenido (recomendado)
     - **Developer**: Acceso completo
     - **Viewer**: Solo lectura

3. **Acceso al panel**:
   - Los usuarios invitados pueden acceder a: `https://tu-app.azurewebsites.net/admin`
   - Deben aceptar la invitación por email

## 🎯 Checklist Final

- [ ] Repositorio clonado
- [ ] Cuenta de Sanity creada
- [ ] Proyecto de Sanity configurado
- [ ] Variables de entorno configuradas
- [ ] Desarrollo local funcionando
- [ ] Build de producción exitoso
- [ ] App Service de Azure creado
- [ ] Archivos subidos por FTP
- [ ] Comando de inicio configurado
- [ ] Variables de entorno en Azure configuradas
- [ ] Servicio reiniciado
- [ ] Sitio funcionando en Azure
- [ ] Usuarios invitados al panel de administración

---

## 🆘 Soporte

### Recursos Útiles:
- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Sanity](https://www.sanity.io/docs)
- [Documentación de Azure App Service](https://docs.microsoft.com/azure/app-service)

### Contacto:
- **GitHub**: [Medal-Social/NextMedal](https://github.com/Medal-Social/NextMedal)
- **Website**: [medalsocial.com](https://medalsocial.com)

---

**¡Felicidades! 🎉 Has desplegado exitosamente NextMedal en Azure.**

*Tutorial creado por Medal Social - La mejor plantilla web para 2025*
