import React, { useState, useRef, useEffect, useCallback } from 'react';
import './styles.css';

export interface SliderProps {
  /** Valor actual del slider (0-100 por defecto). */
  value?: number;
  /** Valor inicial para modo no controlado. */
  defaultValue?: number;
  /** Valor mínimo permitido. */
  min?: number;
  /** Valor máximo permitido. */
  max?: number;
  /** Incremento mínimo entre valores. */
  step?: number;
  /** Callback al cambiar el valor. */
  onChange?: (value: number) => void;
  /** Texto descriptivo (label). */
  label?: string;
  /** Si es true, deshabilita la interacción. */
  disabled?: boolean;
  /** Clase CSS adicional. */
  className?: string;
  /** Estilos en línea. */
  style?: React.CSSProperties;
}

/**
 * Slider: Un componente deslizante premium para selección de valores numéricos.
 * Diseñado con estética Byteflow-UI para una experiencia táctil y visual superior.
 */
export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  ({
    value: controlledValue,
    defaultValue = 0,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    label,
    disabled = false,
    className = '',
    style,
    ...props
  }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const trackRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

    // Calcular porcentaje para el posicionamiento visual
    const percentage = ((currentValue - min) / (max - min)) * 100;

    const updateValue = useCallback((clientX: number) => {
      if (!trackRef.current || disabled) return;

      const rect = trackRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;

      let nextPercentage = Math.max(0, Math.min(100, (x / width) * 100));
      let nextValue = min + ((max - min) * nextPercentage) / 100;

      // Aplicar el step
      nextValue = Math.round(nextValue / step) * step;
      nextValue = Math.max(min, Math.min(max, nextValue));

      if (controlledValue === undefined) {
        setInternalValue(nextValue);
      }
      onChange?.(nextValue);
    }, [min, max, step, disabled, controlledValue, onChange]);

    const handleMouseDown = (e: React.MouseEvent) => {
      isDragging.current = true;
      updateValue(e.clientX);
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = useCallback((e: MouseEvent) => {
      if (isDragging.current) {
        updateValue(e.clientX);
      }
    }, [updateValue]);

    const handleMouseUp = useCallback(() => {
      isDragging.current = false;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }, [handleMouseMove]);

    useEffect(() => {
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }, [handleMouseMove, handleMouseUp]);

    // Soporte para teclado (Accesibilidad)
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      let nextValue = currentValue;
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        nextValue = Math.min(max, currentValue + step);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        nextValue = Math.max(min, currentValue - step);
      } else if (e.key === 'Home') {
        nextValue = min;
      } else if (e.key === 'End') {
        nextValue = max;
      }

      if (nextValue !== currentValue) {
        if (controlledValue === undefined) setInternalValue(nextValue);
        onChange?.(nextValue);
      }
    };

    return (
      <div
        ref={ref}
        className={`bf-slider-container ${disabled ? 'bf-slider--disabled' : ''} ${className}`}
        style={style}
        {...props}
      >
        {label && <label className="bf-slider-label">{label}</label>}
        <div
          ref={(node) => {
            // Unir refs si es necesario
            (trackRef as any).current = node;
          }}
          className="bf-slider-track"
          onMouseDown={handleMouseDown}
        >
          <div
            className="bf-slider-range"
            style={{ width: `${percentage}%` }}
          />
          <div
            className="bf-slider-thumb"
            role="slider"
            tabIndex={disabled ? -1 : 0}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            aria-label={label || 'Slider'}
            onKeyDown={handleKeyDown}
            style={{ left: `${percentage}%` }}
          />
        </div>
      </div>
    );
  }
);

Slider.displayName = 'Slider';
