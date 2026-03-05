# @byteflow-ui/command

Componente Command (Paleta de comandos) premium para Byteflow UI. Ideal para búsquedas globales, menús de acciones rápidas (⌘K) o filtrado de colecciones de datos.

## Instalación

```bash
npm install @byteflow-ui/command
```

## Uso

```tsx
import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandSeparator,
  CommandShortcut 
} from '@byteflow-ui/command';
import '@byteflow-ui/command/dist/index.css';

function CommandMenu() {
  return (
    <Command>
      <CommandInput placeholder="Escribe un comando..." />
      <CommandList>
        <CommandEmpty>No se encontraron resultados.</CommandEmpty>
        <CommandGroup heading="Sugerencias">
          <CommandItem onSelect={() => console.log('Calendario')}>
            <span>Calendario</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Búsqueda</span>
            <CommandShortcut>⌘F</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Configuración">
          <CommandItem>Perfil</CommandItem>
          <CommandItem>Ajustes</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
```

## Propiedades

El componente utiliza un sistema de composición para ofrecer máxima flexibilidad. 
    
| Componente | Descripción |
| --- | --- |
| `Command` | Contenedor principal. |
| `CommandInput` | Campo de búsqueda estilizado. |
| `CommandList` | Contenedor para los ítems y grupos. |
| `CommandEmpty` | Se muestra cuando no hay resultados (lógica manejada por el usuario o filtrado dinámico). |
| `CommandGroup` | Agrupador con encabezado opcional. |
| `CommandItem` | Opción seleccionable individualmente. |
| `CommandShortcut` | Etiqueta para atajos de teclado. |
