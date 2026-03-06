import { useState } from 'react';

export const CodeBlock = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ position: 'relative', marginTop: '1rem', marginBottom: '1.5rem' }}>
            <button
                onClick={handleCopy}
                style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '0.5rem',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '4px',
                    color: '#fff',
                    padding: '0.25rem 0.5rem',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    zIndex: 1
                }}
            >
                {copied ? '¡Copiado!' : 'Copiar'}
            </button>
            <pre style={{
                background: '#1e1e1e',
                color: '#d4d4d4',
                padding: '1.5rem',
                borderRadius: '12px',
                overflowX: 'auto',
                fontFamily: 'var(--bf-font-mono)',
                fontSize: '0.85rem',
                lineHeight: '1.5',
                margin: 0
            }}>
                <code>{code}</code>
            </pre>
        </div>
    );
};
