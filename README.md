# <img src="https://img.icons8.com/fluency/48/lock.png" width="32"> Codificador CARFA

<p align="center">
  <strong>Codifica, decodifica y convierte texto a binario directamente desde tu navegador.</strong>
</p>

<p align="center">
  <a href="https://github.com/ProyectosCarfa/Decodificador">
    <img src="https://img.shields.io/badge/GitHub-Repositorio-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/ProyectosCarfa/Decodificador?style=flat-square&logo=github" alt="Stars">
  <img src="https://img.shields.io/github/forks/ProyectosCarfa/Decodificador?style=flat-square&logo=github" alt="Forks">
  <img src="https://img.shields.io/github/last-commit/ProyectosCarfa/Decodificador?style=flat-square&logo=git" alt="Last Commit">
  <img src="https://img.shields.io/github/license/ProyectosCarfa/Decodificador?style=flat-square" alt="License">
</p>

---

## <img src="https://img.icons8.com/fluency/32/info.png" width="24"> Sobre el proyecto

**Codificador CARFA** es una aplicación web desarrollada con **HTML, CSS y JavaScript** que permite transformar mensajes directamente desde el navegador.

El proyecto combina diferentes técnicas de transformación de texto para crear un sistema sencillo de **codificación y decodificación**, además de permitir convertir texto a representación binaria y recuperar texto desde binario.

Está desarrollado principalmente con fines **educativos y recreativos**, siendo una forma práctica de experimentar con JavaScript, manipulación de texto, UTF-8, Base64 y APIs del navegador.

> **Importante:** este proyecto no implementa criptografía segura. No debe utilizarse para proteger contraseñas, información bancaria, claves API o información confidencial.

---

## <img src="https://img.icons8.com/fluency/32/settings.png" width="24"> Características

| Función                                                                                  | Descripción                                              |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| <img src="https://img.icons8.com/fluency/24/lock.png" width="18"> Codificar              | Transforma el mensaje mediante ROT13, inversión y Base64 |
| <img src="https://img.icons8.com/fluency/24/unlock.png" width="18"> Decodificar          | Revierte el proceso para recuperar el mensaje original   |
| <img src="https://img.icons8.com/fluency/24/binary-file.png" width="18"> Texto → Binario | Convierte texto utilizando bytes UTF-8                   |
| <img src="https://img.icons8.com/fluency/24/file.png" width="18"> Binario → Texto        | Reconstruye el texto a partir de bytes UTF-8             |
| <img src="https://img.icons8.com/fluency/24/copy.png" width="18"> Copiar                 | Copia rápidamente el resultado                           |
| <img src="https://img.icons8.com/fluency/24/moon-symbol.png" width="18"> Tema            | Permite cambiar entre modo claro y oscuro                |
| <img src="https://img.icons8.com/fluency/24/smartphone.png" width="18"> Responsive       | Adaptado para computadora, tablet y celular              |
| <img src="https://img.icons8.com/fluency/24/flash-on.png" width="18"> Local              | El procesamiento principal ocurre en el navegador        |

---

## <img src="https://img.icons8.com/fluency/32/process.png" width="24"> ¿Cómo funciona?

El proceso de codificación utiliza tres etapas:

```text
┌───────────────────┐
│   Texto original  │
└─────────┬─────────┘
          ↓
┌───────────────────┐
│       ROT13       │
└─────────┬─────────┘
          ↓
┌───────────────────┐
│ Invertir texto    │
└─────────┬─────────┘
          ↓
┌───────────────────┐
│      Base64       │
└─────────┬─────────┘
          ↓
┌───────────────────┐
│ Resultado final   │
└───────────────────┘
```

### Codificación

```text
Texto
  ↓
ROT13
  ↓
Inversión
  ↓
Base64
  ↓
Resultado
```

### Decodificación

El proceso se realiza en sentido contrario:

```text
Resultado
  ↓
Base64
  ↓
Inversión
  ↓
ROT13
  ↓
Texto original
```

---

## <img src="https://img.icons8.com/fluency/32/binary-code.png" width="24"> Conversión a binario

La aplicación utiliza `TextEncoder` para convertir el texto en bytes UTF-8.

Por ejemplo:

```text
Hola
```

se representa mediante sus bytes correspondientes:

```text
01001000 01101111 01101100 01100001
```

El proceso inverso utiliza `TextDecoder` para reconstruir el texto.

```text
Binario
   ↓
Bytes
   ↓
UTF-8
   ↓
Texto
```

Esto permite trabajar correctamente con diferentes caracteres y no solamente con letras del alfabeto inglés.

---

## <img src="https://img.icons8.com/fluency/32/code.png" width="24"> Tecnologías

### Frontend

* HTML5
* CSS3
* JavaScript
* Font Awesome
* Google Fonts

### APIs del navegador

* `localStorage`
* `TextEncoder`
* `TextDecoder`
* `navigator.clipboard`
* `btoa()`
* `atob()`

No utiliza:

* Backend
* Base de datos
* Node.js
* PHP
* Frameworks JavaScript

---

## <img src="https://img.icons8.com/fluency/32/rocket.png" width="24"> Instalación

No necesitas instalar dependencias para ejecutar el proyecto.

### Clonar el repositorio

```bash
git clone https://github.com/ProyectosCarfa/Decodificador.git
```

### Entrar al proyecto

```bash
cd Decodificador
```

### Ejecutar

Puedes abrir directamente:

```text
index.html
```

También puedes utilizar **Visual Studio Code** con Live Server para ejecutar la aplicación durante el desarrollo.

---

## <img src="https://img.icons8.com/fluency/32/computer.png" width="24"> Uso

### 1. Codificar

Escribe un mensaje y utiliza la opción de codificación.

El sistema realizará:

```text
Mensaje
→ ROT13
→ Inversión
→ Base64
→ Resultado
```

### 2. Decodificar

Introduce un mensaje generado por el sistema y selecciona la opción de decodificación.

El proceso será:

```text
Resultado
→ Base64
→ Inversión
→ ROT13
→ Mensaje original
```

### 3. Texto a binario

Introduce cualquier texto y conviértelo a una representación binaria basada en UTF-8.

### 4. Binario a texto

Introduce grupos de bits válidos y el sistema intentará convertirlos nuevamente a texto.

### 5. Copiar

Utiliza el botón de copiar para enviar el resultado directamente al portapapeles.

---

## <img src="https://img.icons8.com/fluency/32/security-checked.png" width="24"> Seguridad

**Codificador CARFA no es una herramienta de cifrado criptográfico.**

El proceso:

```text
ROT13 + Inversión + Base64
```

no proporciona protección criptográfica.

### ¿Por qué?

Porque:

* ROT13 es una sustitución simple.
* Invertir un texto no proporciona seguridad.
* Base64 es una codificación, no un algoritmo de cifrado.

Por lo tanto, el proyecto **no debe utilizarse para proteger información sensible**.

### No utilizar para:

* Contraseñas
* Tokens
* Claves API
* Información bancaria
* Datos personales sensibles
* Información empresarial confidencial

El objetivo del proyecto es principalmente **educativo y recreativo**.

---

## <img src="https://img.icons8.com/fluency/32/privacy.png" width="24"> Privacidad

El procesamiento de los mensajes se realiza principalmente en el navegador.

La aplicación no necesita:

```text
Servidor
Base de datos
API propia
Backend
```

El flujo principal es:

```text
Usuario
   ↓
Navegador
   ↓
JavaScript
   ↓
Procesamiento
   ↓
Resultado
```

Los mensajes introducidos no son enviados por el código de la aplicación a un servidor propio.

> La interfaz utiliza recursos externos como Font Awesome y Google Fonts mediante CDN.

---

## <img src="https://img.icons8.com/fluency/32/paint-palette.png" width="24"> Interfaz

La aplicación cuenta con una interfaz enfocada en mantener una experiencia sencilla y moderna.

Incluye:

* Tema claro.
* Tema oscuro.
* Diseño responsive.
* Botones interactivos.
* Modales.
* Preguntas frecuentes.
* Sección de ayuda.
* Información de privacidad.
* Información legal.
* Copiado de resultados.

La preferencia visual del usuario se almacena mediante `localStorage`.

---

## <img src="https://img.icons8.com/fluency/32/folder-tree.png" width="24"> Estructura

La aplicación puede mantenerse como un proyecto web sencillo:

```text
Decodificador/
│
├── index.html
│
└── README.md
```

La lógica de la aplicación se encuentra integrada en el proyecto web, por lo que no es necesario agregar una estructura compleja para ejecutarlo.

---

## <img src="https://img.icons8.com/fluency/32/learning.png" width="24"> ¿Qué puedes aprender con este proyecto?

Este proyecto puede servir para practicar:

* Manipulación de strings.
* Funciones en JavaScript.
* Condicionales.
* Eventos.
* Manipulación del DOM.
* Base64.
* ROT13.
* UTF-8.
* Conversión de bytes.
* Representación binaria.
* `localStorage`.
* Clipboard API.
* Diseño responsive.
* Interfaces web.
* Procesamiento de información en el navegador.

---

## <img src="https://img.icons8.com/fluency/32/test-passed.png" width="24"> Ejemplo

Mensaje:

```text
CARFA
```

ROT13:

```text
PNESN
```

Inversión:

```text
NSENP
```

Finalmente, el texto transformado pasa por Base64 para obtener el resultado utilizado por el sistema.

El proceso de decodificación realiza las operaciones inversas para recuperar el mensaje original.

---

## <img src="https://img.icons8.com/fluency/32/checklist.png" width="24"> Estado del proyecto

<p align="center">

<img src="https://img.shields.io/badge/Estado-Estable-success?style=for-the-badge" alt="Estado">

<img src="https://img.shields.io/badge/Versión-1.0.0-blue?style=for-the-badge" alt="Versión">

</p>

El proyecto se encuentra en una versión funcional y puede seguir evolucionando con nuevas herramientas de transformación y conversión.

---

## <img src="https://img.icons8.com/fluency/32/maintenance.png" width="24"> Próximas mejoras

* [ ] Agregar historial de operaciones.
* [ ] Descargar resultados.
* [ ] Generar códigos QR.
* [ ] Agregar nuevos métodos de codificación.
* [ ] Importar archivos de texto.
* [ ] Exportar resultados.
* [ ] Mejorar accesibilidad.
* [ ] Agregar más herramientas.
* [ ] Convertir el proyecto en PWA.
* [ ] Mejorar la organización interna del código.

---

## <img src="https://img.icons8.com/fluency/32/github.png" width="24"> GitHub

Repositorio oficial:

**ProyectosCarfa / Decodificador**

<a href="https://github.com/ProyectosCarfa/Decodificador">
  <img src="https://img.shields.io/badge/Ver%20Repositorio-GitHub-181717?style=for-the-badge&logo=github" alt="Ver repositorio">
</a>

Para clonar:

```bash
git clone https://github.com/ProyectosCarfa/Decodificador.git
```

---

## <img src="https://img.icons8.com/fluency/32/code-fork.png" width="24"> Contribuciones

Las contribuciones, ideas y mejoras son bienvenidas.

Puedes:

1. Realizar un **Fork** del repositorio.
2. Crear una nueva rama.
3. Realizar tus cambios.
4. Crear un Pull Request.

Ejemplo:

```bash
git checkout -b nueva-funcion
git add .
git commit -m "Agregar nueva función"
git push origin nueva-funcion
```

Después puedes crear el Pull Request desde GitHub.

---

## <img src="https://img.icons8.com/fluency/32/bug.png" width="24"> Reportar problemas

Si encuentras un error o tienes una propuesta para mejorar el proyecto, puedes utilizar la sección **Issues** del repositorio.

<a href="https://github.com/ProyectosCarfa/Decodificador/issues">
  <img src="https://img.shields.io/badge/Reportar%20un%20problema-Issues-red?style=for-the-badge&logo=github" alt="Issues">
</a>

---

## <img src="https://img.icons8.com/fluency/32/user-male-circle.png" width="24"> Autor

### CARFA

Desarrollado por **CARFA**, creador de contenido y estudiante de Ingeniería de Sistemas e Informática.

<p align="center">
  <a href="https://github.com/ProyectosCarfa">
    <img src="https://img.shields.io/badge/GitHub-ProyectosCarfa-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://www.tiktok.com/@carfa_27">
    <img src="https://img.shields.io/badge/TikTok-@carfa__27-000000?style=for-the-badge&logo=tiktok" alt="TikTok">
  </a>
  <a href="https://www.youtube.com/@carfa27">
    <img src="https://img.shields.io/badge/YouTube-@carfa27-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube">
  </a>
</p>

---

## <img src="https://img.icons8.com/fluency/32/star.png" width="24"> Apoya el proyecto

Si el proyecto te sirve para aprender o experimentar con JavaScript, puedes apoyar dejando una ⭐ en el repositorio.

<p align="center">
  <a href="https://github.com/ProyectosCarfa/Decodificador">
    <img src="https://img.shields.io/github/stars/ProyectosCarfa/Decodificador?style=for-the-badge&logo=github" alt="GitHub Stars">
  </a>
</p>

Cada estrella ayuda a que el proyecto tenga mayor visibilidad dentro de GitHub.

---

<p align="center">
  <strong>Codificador CARFA</strong>
  <br>
  Proyecto educativo desarrollado con HTML, CSS y JavaScript.
  <br><br>
  <code>Code • Learn • Build</code>
</p>
