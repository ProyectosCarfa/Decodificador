/* ==================== ACTUALIZAR ICONO AL CARGAR ==================== */
(function actualizarIconoAlCargar() {
    const temaActual = document.documentElement.getAttribute("data-theme");
    const icon = document.getElementById("themeIcon");
    if (icon) {
        icon.className =
            temaActual === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }
})();

/* ==================== CAMBIAR TEMA ==================== */
function cambiarTema() {
    const html = document.documentElement;
    const actual = html.getAttribute("data-theme");
    const nuevo = actual === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", nuevo);
    localStorage.setItem("carfa-theme", nuevo);

    const icon = document.getElementById("themeIcon");
    icon.className =
        nuevo === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
}

/* ==================== STAR ==================== */
const STAR_BASE = 42;

(function initStar() {
    const starred = localStorage.getItem("carfa-starred") === "1";
    const btn = document.getElementById("starBtn");
    const icon = document.getElementById("starIcon");
    const count = document.getElementById("starCount");

    if (starred) {
        btn.classList.add("active");
        icon.className = "fa-solid fa-star";
        count.textContent = STAR_BASE + 1;
    } else {
        btn.classList.remove("active");
        icon.className = "fa-regular fa-star";
        count.textContent = STAR_BASE;
    }
})();

function toggleStar() {
    const btn = document.getElementById("starBtn");
    const icon = document.getElementById("starIcon");
    const count = document.getElementById("starCount");

    const yaTieneEstrella = btn.classList.contains("active");

    if (yaTieneEstrella) {
        btn.classList.remove("active");
        icon.className = "fa-regular fa-star";
        count.textContent = STAR_BASE;
        localStorage.setItem("carfa-starred", "0");
    } else {
        btn.classList.add("active");
        icon.className = "fa-solid fa-star";
        count.textContent = STAR_BASE + 1;
        localStorage.setItem("carfa-starred", "1");

        btn.classList.add("pop");
        setTimeout(() => btn.classList.remove("pop"), 450);
    }
}

/* ==================== MODALES ==================== */
function abrirModal(nombre) {
    const modal = document.getElementById("modal-" + nombre);
    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function cerrarModal(nombre) {
    const modal = document.getElementById("modal-" + nombre);
    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

function cerrarModalFuera(event, nombre) {
    if (event.target.id === "modal-" + nombre) {
        cerrarModal(nombre);
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelectorAll(".modal-overlay.active").forEach((m) => {
            m.classList.remove("active");
        });
        document.body.style.overflow = "";
    }
});

/* ==================== CIFRADO ==================== */
function rot13(texto) {
    return texto.replace(/[a-zA-Z]/g, (c) => {
        const base = c <= "Z" ? 65 : 97;
        return String.fromCharCode(
            ((c.charCodeAt(0) - base + 13) % 26) + base,
        );
    });
}

function invertir(texto) {
    return texto.split("").reverse().join("");
}

function codificar() {
    const input = document.getElementById("input").value;
    if (!input.trim()) {
        document.getElementById("result").textContent =
            "// Escribe algo primero";
        return;
    }
    const paso1 = rot13(input);
    const paso2 = invertir(paso1);
    const paso3 = btoa(unescape(encodeURIComponent(paso2)));
    document.getElementById("result").textContent = paso3;
}

function decodificar() {
    const input = document.getElementById("input").value.trim();
    if (!input) {
        document.getElementById("result").textContent =
            "// Pega un mensaje codificado";
        return;
    }
    try {
        const paso1 = decodeURIComponent(escape(atob(input)));
        const paso2 = invertir(paso1);
        const paso3 = rot13(paso2);
        document.getElementById("result").textContent = paso3;
    } catch (e) {
        document.getElementById("result").textContent =
            "// Mensaje inválido o mal codificado";
    }
}

/* ==================== BINARIO ==================== */
function textoABinario(texto) {
    const bytes = new TextEncoder().encode(texto);
    return Array.from(bytes)
        .map((b) => b.toString(2).padStart(8, "0"))
        .join(" ");
}

function binarioATexto(bin) {
    const limpio = bin.replace(/[^01]/g, "");
    if (limpio.length === 0 || limpio.length % 8 !== 0) {
        throw new Error("Longitud inválida");
    }
    const bytes = [];
    for (let i = 0; i < limpio.length; i += 8) {
        bytes.push(parseInt(limpio.substr(i, 8), 2));
    }
    return new TextDecoder().decode(new Uint8Array(bytes));
}

function aBinario() {
    const input = document.getElementById("input").value;
    if (!input.trim()) {
        document.getElementById("result").textContent =
            "// Escribe algo primero";
        return;
    }
    document.getElementById("result").textContent = textoABinario(input);
}

function deBinario() {
    const input = document.getElementById("input").value.trim();
    if (!input) {
        document.getElementById("result").textContent =
            "// Pega un mensaje en binario";
        return;
    }
    try {
        document.getElementById("result").textContent = binarioATexto(input);
    } catch (e) {
        document.getElementById("result").textContent =
            "// Binario inválido (múltiplos de 8 bits: 0 y 1)";
    }
}

function limpiar() {
    document.getElementById("input").value = "";
    document.getElementById("result").textContent =
        "// Aquí aparecerá tu mensaje...";
}

/* ==================== COPIAR ==================== */
function copiarResultado() {
    const texto = document.getElementById("result").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        const btn = document.querySelector(".copy-btn");
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Copiado';
        setTimeout(() => (btn.innerHTML = original), 1500);
    });
}
