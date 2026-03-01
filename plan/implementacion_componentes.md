# Plan de Implementación de Componentes Byteflow-UI

Este plan define el orden estratégico de creación para el kit de componentes UI, priorizando los elementos fundamentales (Atómicos) que tienen mayor reusabilidad, hasta llegar a los componentes más complejos (Moleculares/Organismos) de uso en casos especializados.

---

## Fase 1: Fundamentos (Core UI - Alta Frecuencia)
*Son los componentes atómicos esenciales. Casi todas las páginas y otros componentes complejos dependerán de ellos.*

1. **Button:** El componente interactivo más básico y ubicuo.
2. **Label:** Base para accesibilidad en todos los formularios.
3. **Input:** Interacción de texto fundamental.
4. **Checkbox:** Interacción booleana estándar.
5. **Switch:** Variante moderna de Checkbox.
6. **Radio Group:** Selección única entre pocas opciones.
7. **Badge:** Etiquetas e indicadores visuales de estado cortos.
8. **Avatar:** Representación visual de usuarios frecuente.
9. **Separator:** División estructural visual estándar.
10. **Skeleton:** Base para estados de carga amigables.
11. **Spinner:** Alternativa simple para estados de carga (fetching).

## Fase 2: Layout & Estructura Básica
*Ayudan a organizar la información en pantalla una vez que tenemos los atómicos.*

12. **Card:** Contenedor fundamental de agrupar información en tarjetas.
13. **Scroll Area:** Manejo nativo de scroll personalizado y consistente.
14. **Tabs:** Navegación local entre vistas mutuamente excluyentes.
15. **Breadcrumb:** Orientación de navegación jerárquica.
16. **Aspect Ratio:** Utilidad para incrustar contenedores reactivos (video, imágenes).
17. **Empty:** Estado fundamental para listas o tablas sin contenido.
18. **Item:** Utilitario para elementos repetitivos (listas).
19. **Field:** Contenedor de Formulario que junta `Label` + `Input` + Errores.

## [x] Fase 3: Inputs Avanzados & Text Extensions (Completo)
*Variantes y adiciones que extienden las capacidades nativas de HTML de captura.*

20. **Textarea:** Inputs expansivos.
21. **Select:** Selector estándar (usando base nativa accesible).
23. **Slider:** Componente análogo para valores acotados numéricamente.
24. **Toggle:** Botones con estado on/off.
25. **Toggle Group:** Grupos de configuración de switch de vista.
26. **Input Group:** Inputs que combinan texto con íconos, botones o prefijos.
27. **Input OTP:** Input especializado en contraseñas o pins (One Time Password).

## Fase 4: Sobrecargas (Overlays), ContextOS & Feedback
*Elementos que flotan, interactúan por encima del DOM o ofrecen notificaciones persistentes.*

28. **Alert:** Banner visual estático de advertencias o feedback en la página.
29. **Toast:** Feedback efímero no obtrusivo (esquina de la pantalla).
30. **Sonner:** Variante de toast más moderna empilada (estilo Radix/Sonner).
31. **Progress:** Barra de visualización de progreso continua.
32. **Tooltip:** Pequeña descripción con hover en otros elementos (muy usado).
33. **Hover Card:** Tarjetas enriquecidas al posar el mouse (similar a tooltip pero complejo).
34. **Dialog:** Fundamental. Modal superpuesto (imperativo).
35. **Alert Dialog:** Dialog específico para acciones destructivas en flujos críticos.
36. **Dropdown Menu:** Acciones modales desencadenadas por botones (fundamental en UX).
37. **Popover:** Dialog enriquecido pero relativo/anclado al trigger.
38. **Drawer:** Diálogos inferiores optimizados para UX responsivo móvil.
39. **Sheet:** Paneles superpuestos laterales (off-canvas).
40. **ContextMenu:** Menú desencadenado en click derecho para acciones avanzadas.

## Fase 5: Navegación & Organización Compleja
*Manejo de rutas complejas o estructuras profundas en la app.*

41. **Accordion:** Modales que revelan contenido vertical.
42. **Collapsible:** Control atómico de revelado.
43. **Sidebar:** Estructurada para apps dashboard complejas.
44. **Pagination:** Páginas múltiples en grid o tabla de base de datos.
45. **Navigation Menu:** Menu estilo Headings para eCommerce o documentaciones profundas.
46. **Menubar:** Navegación estilo OS desktop (File, Edit, View).

## Fase 6: Data Display & Componentes Especializados
*Componentes potentes, pesados o de uso especializado para manipulación selectiva de data.*

47. **Command:** Paleta de comandos (Command + K) o Search global en la app.
48. **Combobox:** Fusión entre Select y Command (búsqueda y completado).
49. **Table:** Despliegue estático de colecciones.
50. **Data Table:** Instancia de Table combinada con Pagination, Búsqueda, Filtrado (suele ser el más complejo u orquestador).
51. **Calendar:** Componente complejo para renderizar meses e hitos.
52. **Date Picker:** Incorpora `Input` + `Popover` + `Calendar`.
53. **Carousel:** Componente deslizable para landing pages o galerías.
54. **Chart:** Gráficos estadísticos altamente especializados, raramente usados excepto en dashboards (suele delegarse a Recharts, Chart.js).
55. **Resizable:** Paneles estilo IDE o Split UI que pueden encogerse dinámicamente.
56. **Kbd:** Renderizado semántico de botones de atajo en pantalla.
57. **Direction:** Manejo utilitario avanzado LTR/RTL, uso casi exclusivo localizaciones asiáticas o de idiomas específicos.
