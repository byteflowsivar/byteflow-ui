# Plan de Implementación de Componentes Byteflow-UI

Este plan define el orden estratégico de creación para el kit de componentes UI, priorizando los elementos fundamentales (Atómicos) que tienen mayor reusabilidad, hasta llegar a los componentes más complejos (Moleculares/Organismos) de uso en casos especializados.

---

## [x] Fase 1: Fundamentos (Core UI - Alta Frecuencia) (Completo)
*Son los componentes atómicos esenciales. Casi todas las páginas y otros componentes complejos dependerán de ellos.*

- [x] 1. **Button:** El componente interactivo más básico y ubicuo.
- [x] 2. **Label:** Base para accesibilidad en todos los formularios.
- [x] 3. **Input:** Interacción de texto fundamental.
- [x] 4. **Checkbox:** Interacción booleana estándar.
- [x] 5. **Switch:** Variante moderna de Checkbox.
- [x] 6. **Radio Group:** Selección única entre pocas opciones.
- [x] 7. **Badge:** Etiquetas e indicadores visuales de estado cortos.
- [x] 8. **Avatar:** Representación visual de usuarios frecuente.
- [x] 9. **Separator:** División estructural visual estándar.
- [x] 10. **Skeleton:** Base para estados de carga amigables.
- [x] 11. **Spinner:** Alternativa simple para estados de carga (fetching).

## [x] Fase 2: Layout & Estructura Básica (Completo)
*Ayudan a organizar la información en pantalla una vez que tenemos los atómicos.*

- [x] 12. **Card:** Contenedor fundamental de agrupar información en tarjetas.
- [x] 13. **Scroll Area:** Manejo nativo de scroll personalizado y consistente.
- [x] 14. **Tabs:** Navegación local entre vistas mutuamente excluyentes.
- [x] 15. **Breadcrumb:** Orientación de navegación jerárquica.
- [x] 16. **Aspect Ratio:** Utilidad para incrustar contenedores reactivos (video, imágenes).
- [x] 17. **Empty:** Estado fundamental para listas o tablas sin contenido.
- [x] 18. **Item:** Utilitario para elementos repetitivos (listas).
- [x] 19. **Field:** Contenedor de Formulario que junta `Label` + `Input` + Errores.

## [x] Fase 3: Inputs Avanzados & Text Extensions (Completo)
*Variantes y adiciones que extienden las capacidades nativas de HTML de captura.*

- [x] 20. **Textarea:** Inputs expansivos.
- [x] 21. **Select:** Selector estándar (usando base nativa accesible).
- [x] 23. **Slider:** Componente análogo para valores acotados numéricamente.
- [x] 24. **Toggle:** Botones con estado on/off.
- [x] 25. **Toggle Group:** Grupos de configuración de switch de vista.
- [x] 26. **Input Group:** Inputs que combinan texto con íconos, botones o prefijos.
- [x] 27. **Input OTP:** Input especializado en contraseñas o pins (One Time Password).

## [x] Fase 4: Overlays y Feedback (Completo)
- [x] 28. **Alert** (READY)
- [x] 29. **Toast** (READY)
- [x] 30. **Sonner** (READY)
- [x] 31. **Progress** (READY)
- [x] 32. **Tooltip** (READY)
- [x] 33. **Hover Card** (READY)
- [x] 34. **Dialog** (READY)
- [x] 35. **Alert Dialog** (READY)
- [x] 36. **Dropdown Menu** (READY)
- [x] 37. **Popover** (READY)
- [x] 38. **Drawer** (READY)
- [x] 39. **Sheet** (READY)
- [x] 40. **ContextMenu** (READY)


## [x] Fase 5: Navegación & Organización Compleja (Completo)
*Manejo de rutas complejas o estructuras profundas en la app.*

- [x] 41. **Accordion:** Modales que revelan contenido vertical.
- [x] 42. **Collapsible:** Control atómico de revelado.
- [x] 43. **Sidebar:** Estructurada para apps dashboard complejas.
- [x] 44. **Pagination:** Páginas múltiples en grid o tabla de base de datos.
- [x] 45. **Navigation Menu:** Menu estilo Headings para eCommerce o documentaciones profundas.
- [x] 46. **Menubar:** Navegación estilo OS desktop (File, Edit, View).

## [x] Fase 6: Data Display & Componentes Especializados (Completo)
*Componentes potentes, pesados o de uso especializado para manipulación selectiva de data.*

- [x] 47. **Command:** Paleta de comandos (Command + K) o Search global en la app.
- [x] 48. **Combobox:** Fusión entre Select y Command (búsqueda y completado).
- [x] 49. **Table:** Despliegue estático de colecciones.
- [x] 50. **Data Table:** Instancia de Table combinada con Pagination, Búsqueda, Filtrado.
- [x] 51. **Calendar:** Componente complejo para renderizar meses e hitos.
- [x] 52. **Date Picker:** Incorpora `Input` + `Popover` + `Calendar`.
- [x] 53. **Carousel:** Componente deslizable para landing pages o galerías.
- [ ] 54. **Chart:** (Opcional) Gráficos estadísticos altamente especializados.
- [x] 55. **Resizable:** Paneles estilo IDE o Split UI que pueden encogerse dinámicamente.
- [x] 56. **Kbd:** Renderizado semántico de botones de atajo en pantalla.
- [ ] 57. **Direction:** (Opcional) Manejo utilitario avanzado LTR/RTL.
