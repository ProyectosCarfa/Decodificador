# 🔐 Codificador CARFA

Aplicación web desarrollada con **HTML, CSS y JavaScript puro** para codificar, decodificar y convertir mensajes a binario directamente desde el navegador.

El proyecto está pensado principalmente con fines **educativos y recreativos**, permitiendo conocer de forma práctica conceptos como ROT13, inversión de texto, Base64, codificación UTF-8 y representación binaria.

> ⚠️ **Importante:** Este proyecto no implementa criptografía segura. No debe utilizarse para proteger contraseñas, información bancaria, datos personales u otra información confidencial.

## ✨ Características

* 🔐 Codificación de mensajes.
* 🔓 Decodificación de mensajes.
* 🔢 Conversión de texto a binario.
* 📝 Conversión de binario a texto.
* 📋 Copiado rápido del resultado.
* 🌙 Modo oscuro.
* ☀️ Modo claro.
* 💾 Guardado de preferencias mediante `localStorage`.
* 📱 Diseño responsive para computadoras, tablets y celulares.
* ⚡ Procesamiento directamente en el navegador.
* 🚫 No requiere backend ni base de datos.
* ❓ Sección de preguntas frecuentes.
* 🆘 Sección de ayuda.
* 📄 Ventanas de términos, privacidad y aspectos legales.

## 🧠 ¿Cómo funciona?

El sistema utiliza diferentes procesos para transformar el texto.

### Codificación

Cuando el usuario introduce un mensaje y selecciona la opción de codificar, el programa realiza los siguientes pasos:

```text
Texto original
     ↓
ROT13
     ↓
Inversión del texto
     ↓
Base64
     ↓
Resultado codificado
```

Por ejemplo:

```text
Mensaje original
      ↓
    ROT13
      ↓
Texto transformado
      ↓
  Invertir texto
      ↓
Texto invertido
      ↓
    Base64
      ↓
Resultado final
```

### Decodificación

La decodificación realiza el proceso inverso:

```text
Resultado codificado
        ↓
      Base64
        ↓
Invertir nuevamente
        ↓
      ROT13
        ↓
Mensaje original
```

## 🔢 Conversión a binario

El programa también permite transformar un texto en una representación binaria utilizando **UTF-8**.

Ejemplo conceptual:

```text
Hola
 ↓
UTF-8
 ↓
01001000 01101111 01101100 01100001
```

Para convertir un binario nuevamente a texto, el programa toma los grupos de 8 bits y los interpreta como bytes UTF-8.

## 🛠️ Tecnologías utilizadas

### Frontend

* HTML5
* CSS3
* JavaScript
* Font Awesome
* Google Fonts

### APIs y funciones utilizadas

* `localStorage`
* `TextEncoder`
* `TextDecoder`
* `btoa()`
* `atob()`
* `navigator.clipboard`

## 📁 Estructura del proyecto

La versión actual del proyecto puede ejecutarse directamente desde el archivo HTML.

```text
Codificador-CARFA/
│
├── index.html
└── README.md
```

Si posteriormente el proyecto se separa en archivos, se puede organizar de la siguiente manera:

```text
Codificador-CARFA/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── img/
│
└── README.md
```

## 🚀 Instalación

No necesitas instalar Node.js, Python, PHP ni ningún servidor para ejecutar el proyecto.

### 1. Clonar el repositorio

```bash
git clone URL-DE-TU-REPOSITORIO
```

### 2. Entrar al proyecto

```bash
cd Codificador-CARFA
```

### 3. Ejecutar

Abre el archivo:

```text
index.html
```

También puedes utilizar **Visual Studio Code** junto con una extensión como **Live Server** para ejecutarlo en el navegador.

## 💻 Uso

### Codificar un mensaje

1. Escribe el mensaje en el área de texto.
2. Selecciona la opción de codificación.
3. Ejecuta el proceso.
4. El sistema mostrará el resultado.
5. Puedes copiar el resultado utilizando el botón de copiar.

### Decodificar un mensaje

1. Introduce el texto previamente codificado.
2. Selecciona la opción de decodificación.
3. Ejecuta el proceso.
4. El sistema intentará recuperar el mensaje original.

### Convertir texto a binario

1. Introduce el texto.
2. Selecciona la conversión a binario.
3. El sistema convertirá los caracteres utilizando UTF-8.
4. Obtendrás una secuencia de bits separados por espacios.

### Convertir binario a texto

1. Introduce una secuencia binaria.
2. El sistema validará que los bits puedan interpretarse como grupos de 8.
3. Los bytes serán convertidos nuevamente a texto mediante UTF-8.

## 🔐 Seguridad

Este proyecto **no es un sistema de cifrado criptográfico**.

El proceso:

```text
ROT13 + Inversión + Base64
```

sirve para realizar transformaciones y ocultar visualmente el contenido, pero no proporciona seguridad criptográfica.

Por ejemplo, **Base64 no es cifrado**, sino un método de codificación.

Por esta razón, no se recomienda utilizar este proyecto para:

* Contraseñas.
* Información bancaria.
* Tokens.
* Claves API.
* Información empresarial confidencial.
* Datos personales sensibles.
* Información que requiera protección criptográfica.

Para aplicaciones reales que necesiten proteger información se deben utilizar algoritmos criptográficos diseñados específicamente para seguridad.

## 🔒 Privacidad

El procesamiento principal de los mensajes se realiza directamente en el navegador mediante JavaScript.

El código de la aplicación no utiliza un backend para enviar los mensajes introducidos por el usuario.

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

No se requiere una base de datos para utilizar el codificador.

> Nota: la interfaz utiliza recursos externos como Google Fonts y Font Awesome mediante CDN.

## 🌙 Modo claro y oscuro

La aplicación incluye dos temas visuales:

* ☀️ Modo claro
* 🌙 Modo oscuro

La preferencia seleccionada se almacena utilizando:

```javascript
localStorage
```

De esta manera, el navegador puede recordar la configuración del usuario.

## 📱 Diseño responsive

La interfaz está diseñada para adaptarse a diferentes tamaños de pantalla.

Compatible con:

* 💻 Computadoras
* 💻 Laptops
* 📱 Smartphones
* 📲 Tablets

El diseño utiliza CSS responsive para adaptar los elementos de la interfaz según el tamaño disponible.

## 📋 Copiar resultados

El proyecto utiliza la API:

```javascript
navigator.clipboard
```

para permitir que el usuario copie rápidamente el resultado generado.

Esto evita tener que seleccionar manualmente todo el contenido.

## 🧩 Funciones principales

Entre las funciones utilizadas en el proyecto se encuentran:

### ROT13

Realiza una sustitución de caracteres desplazando las letras del alfabeto 13 posiciones.

```text
A → N
B → O
C → P
```

Por ejemplo:

```text
CARFA
↓
PNESN
```

### Inversión de texto

Invierte el orden de los caracteres.

```text
CARFA
↓
AFRAC
```

### Base64

Convierte datos en una representación Base64.

En el proyecto se utiliza para completar el proceso de codificación.

### TextEncoder

Permite convertir texto en bytes utilizando UTF-8.

```javascript
new TextEncoder()
```

### TextDecoder

Permite convertir bytes UTF-8 nuevamente en texto.

```javascript
new TextDecoder()
```

## 🧪 Ejemplo del proceso

Supongamos que tenemos:

```text
Hola CARFA
```

El programa realiza:

```text
1. Texto original
   Hola CARFA

2. Aplicar ROT13
   Uby n PNE SN

3. Invertir
   ...

4. Convertir a Base64
   ...

5. Resultado final
   ...
```

El resultado exacto dependerá del texto introducido.

La decodificación realiza los pasos anteriores en orden inverso.

## 🎨 Interfaz

La aplicación utiliza una interfaz moderna con:

* Tarjetas.
* Botones interactivos.
* Iconos.
* Modales.
* Campos de texto.
* Tema claro/oscuro.
* Diseño adaptable.

Los iconos de la interfaz se proporcionan mediante **Font Awesome**.

## 📚 Objetivo educativo

Este proyecto puede utilizarse para aprender conceptos básicos de programación web, especialmente:

* Manipulación de strings.
* Funciones de JavaScript.
* Condicionales.
* Eventos.
* DOM.
* APIs del navegador.
* UTF-8.
* Conversión de datos.
* Base64.
* Representación binaria.
* `localStorage`.
* Diseño responsive.

Es un proyecto pensado para experimentar con JavaScript y comprender cómo se pueden procesar datos directamente desde el navegador.

## 🔮 Próximas mejoras

Algunas mejoras que podrían incorporarse en futuras versiones:

* [ ] Historial de operaciones.
* [ ] Descargar resultados como archivo.
* [ ] Generar código QR.
* [ ] Más métodos de codificación.
* [ ] Más herramientas de conversión.
* [ ] Exportar resultados.
* [ ] Importar archivos de texto.
* [ ] Mejoras de accesibilidad.
* [ ] Soporte para más idiomas.
* [ ] Separación completa de HTML, CSS y JavaScript.
* [ ] PWA para instalación en dispositivos.

## 📌 Limitaciones

Actualmente el proyecto está diseñado como una herramienta de aprendizaje y entretenimiento.

No pretende reemplazar herramientas profesionales de criptografía.

El método utilizado no debe considerarse:

```text
Cifrado seguro ❌
```

sino:

```text
Transformación / codificación educativa ✅
```

## 📄 Licencia

Este proyecto puede ser utilizado como material educativo.

Si vas a modificar o reutilizar el proyecto, se recomienda mantener la referencia al autor original.

## 👨‍💻 Autor

Desarrollado por **CARFA**.

Contenido y proyectos de programación:

* TikTok: `@carfa_27`
* YouTube: `@carfa27`
* GitHub: `ProyectosCarfa`

## ⭐ Apoya el proyecto

Si este proyecto te resultó útil para aprender JavaScript, puedes apoyar el proyecto dejando una ⭐ en el repositorio.

Cada estrella ayuda a que más personas puedan encontrar el proyecto y seguir aprendiendo.

---

## 📌 Resumen

**Codificador CARFA** es una aplicación web educativa desarrollada con JavaScript puro que permite:

```text
🔐 Codificar
🔓 Decodificar
🔢 Convertir a binario
📝 Convertir binario a texto
📋 Copiar resultados
🌙 Cambiar de tema
📱 Utilizar desde dispositivos móviles
```

Todo el procesamiento principal se realiza directamente en el navegador, sin necesidad de un backend.
