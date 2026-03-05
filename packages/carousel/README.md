# @byteflow-ui/carousel

Componente Carousel premium para Byteflow UI. Implementado con motores nativos de scroll (scroll-snap) para un rendimiento excepcional y transiciones fluidas tanto en escritorio como en móviles.

## Instalación

```bash
npm install @byteflow-ui/carousel
```

## Uso

```tsx
import { Carousel, CarouselItem, CarouselPrevious, CarouselNext } from '@byteflow-ui/carousel';
import '@byteflow-ui/carousel/dist/index.css';

function Gallery() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <Carousel>
        <CarouselItem>
          <div className="p-4 border rounded-xl bg-slate-100 h-64 flex items-center justify-center">Slide 1</div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 border rounded-xl bg-slate-100 h-64 flex items-center justify-center">Slide 2</div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-4 border rounded-xl bg-slate-100 h-64 flex items-center justify-center">Slide 3</div>
        </CarouselItem>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
```

## Propiedades

El componente utiliza un sistema de composición.

| Componente | Descripción |
| --- | --- |
| `Carousel` | Contenedor principal y proveedor de contexto. |
| `CarouselItem` | Un slide individual. Por defecto ocupa el 100% del ancho. |
| `CarouselPrevious` | Botón para retroceder. |
| `CarouselNext` | Botón para avanzar. |
