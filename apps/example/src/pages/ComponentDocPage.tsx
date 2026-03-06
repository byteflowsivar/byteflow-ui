import React from 'react';
import type { ComponentDocDefinition } from '../registry/button';
import { PropTable } from '../components/ui/PropTable';
import { CodeBlock } from '../components/ui/CodeBlock';
import { Badge } from '@byteflow-ui/badge';

interface ComponentDocProps {
    definition: ComponentDocDefinition;
}

export const ComponentDoc = ({ definition }: ComponentDocProps) => {
    return (
        <section>
            <div style={{ marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, margin: 0, letterSpacing: '-0.04em' }}>{definition.name}</h1>
                    <Badge variant="primary" size="md">Beta</Badge>
                </div>
                <p style={{ fontSize: '1.2rem', color: 'var(--bf-text-secondary)', maxWidth: '800px', lineHeight: 1.6 }}>
                    {definition.description}
                </p>
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid var(--bf-surface-border)', paddingBottom: '0.5rem' }}>Ejemplos</h2>
                {definition.examples.map((example, i) => (
                    <div key={i} style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '0.5rem' }}>{example.title}</h3>
                        {example.description && (
                            <p style={{ fontSize: '0.95rem', color: 'var(--bf-text-secondary)', marginBottom: '1.5rem' }}>{example.description}</p>
                        )}
                        <div style={{
                            padding: '2.5rem',
                            background: 'var(--bf-canvas-subtle)',
                            borderRadius: '16px',
                            border: '1px solid var(--bf-surface-border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: '200px'
                        }}>
                            {example.render()}
                        </div>
                        <CodeBlock code={example.code} />
                    </div>
                ))}
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid var(--bf-surface-border)', paddingBottom: '0.5rem' }}>Referencia de API</h2>
                <PropTable props={definition.props} />
            </div>

            <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', borderBottom: '1px solid var(--bf-surface-border)', paddingBottom: '0.5rem' }}>Personalización (CSS Variables)</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '1rem' }}>
                    {definition.cssVars.map((v, i) => (
                        <React.Fragment key={i}>
                            <code style={{ color: 'var(--bf-accent)', fontWeight: 600, fontFamily: 'var(--bf-font-mono)', fontSize: '0.85rem' }}>{v.name}</code>
                            <span style={{ color: 'var(--bf-text-secondary)', fontSize: '0.9rem' }}>{v.description}</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};
