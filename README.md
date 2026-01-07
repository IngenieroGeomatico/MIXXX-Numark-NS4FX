# MIXXX – Numark NS4FX

Mapeo (MIDI/HID) para usar el controlador **Numark NS4FX** con **Mixxx**. Este repositorio busca ofrecer una configuración enfocada en **4 decks**, pads de rendimiento, loops y controles básicos de mezcla, aprovechando la arquitectura de presets XML y (opcionalmente) scripts en JavaScript de Mixxx.

> Estado del proyecto: En desarrollo activo. Este README describe cómo instalar, probar y colaborar en el mapeo.

---

## Tabla de contenidos

- #características
- #requisitos
- #instalación
- #uso-rápido
- #estructura-del-repositorio
- #cómo-contribuir
- #preguntas-frecuentes
- #créditos-y-referencias
- #licencia

---

## Características

- **Soporte para 4 decks** (canales 1–4) con asignaciones de transporte (Play/Pause, Cue), pitch fader y controles de loop.
- **Pads de rendimiento**: hotcues, loops y funciones asignables según los modos del NS4FX.
- **Diseño modular**: preset XML + scripts JS (cuando sea necesario) para acciones avanzadas, incluyendo gestión de Shift y retroalimentación de LEDs.
- **Documentación del hardware** enlazada para consultar panel superior, frontal y trasero del NS4FX, y sus funciones principales.

---

## Requisitos

- **Mixxx** (2.5 o superior recomendado).
- **Numark NS4FX** con firmware estable y conexión USB.

---

## Instalación

1. **Clona o descarga** este repositorio.
2. Copia los archivos de mapeo (`.xml` y, si aplica, `.js`) a la **carpeta de mapeos del usuario de Mixxx**.
3. Conecta el **NS4FX** y, en **Mixxx**, ve a *Preferencias → Controladoras*; habilítalo y selecciona el preset **Numark NS4FX**.
4. Verifica que los controles básicos (Play, Cue, pitch, loops, pads) respondan en cada deck.

> Tip: El Asistente de aprendizaje de Mixxx permite mapear rápidamente controles no cubiertos.

---

## Uso rápido

- **Escucha**: Usa *Play/Pause*, *Cue* y el **pitch fader** para control de tempo en cada canal (1–4).
- **Loops**: Botones para *loop in/out*, *halve/double* según el deck y estado de Shift.
- **Pads (Hotcues)**: Disparo y gestión de hotcues 1–4 por deck; con Shift puedes redefinir o borrar.
- **Navegación y biblioteca**: Usa el *Browse knob* del NS4FX para moverte por crates y librería.

---

## Estructura del repositorio

```
MIXXX-Numark-NS4FX/
├─ README.md                 # Este documento
├─ .gitignore
├─ mappings/
│  ├─ Numark-NS4FX.midi.xml  # Preset principal
│  └─ Numark-NS4FX-scripts.js# Scripts JS opcionales
└─ docs/
   └─ notas.md               # Notas de implementación y TODOs

```

---

## Cómo contribuir

1. **Issues**: Reporta problemas de asignación y describe tu sistema (SO, versión de Mixxx).
2. **Pull Requests**: Aceptamos PRs con mejoras de mapeo, limpieza de código y documentación.
3. **Estilo y referencias**: Sigue el **formato de presets de Mixxx** y comenta el propósito de cada binding.

---

## Preguntas frecuentes

**¿Dónde está mi carpeta de mapeos de Mixxx?**

Mixxx crea y usa una carpeta de “controller mappings” en el directorio de usuario.

**¿Puedo usar funciones avanzadas del NS4FX (pantallas, modos FX, etc.)?**

Sí, pero la mayoría requiere **scripting en JS** además del XML.

**¿Necesito el manual del NS4FX?**

Recomendado. Te ayuda a identificar botones, modos y conexiones correctas.

---

## Créditos y referencias

- **Repositorio**: [IngenieroGeomatico/MIXXX-Numark-NS4FX](https://github.com/IngenieroGeomatico/MIXXX-Numark-NS4FX)
- **Formato de mapeos y guía**: *Mixxx – MIDI Controller Mapping File Format*
- **Manual del NS4FX** (Numark, v1.3 PDF)

---

## Licencia

Este proyecto se publica bajo la **Licencia MIT** (o la que prefieras). Si reutilizas o modificas el mapeo, por favor **mantén los créditos** y referencias.
