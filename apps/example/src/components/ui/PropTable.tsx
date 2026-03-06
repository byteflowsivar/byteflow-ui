import type { PropRow } from '../../registry/button';

export const PropTable = ({ props }: { props: PropRow[] }) => {
    return (
        <div style={{ overflowX: 'auto', marginTop: '1.5rem', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
                <thead>
                    <tr style={{ borderBottom: '2px solid var(--bf-surface-border)' }}>
                        <th style={{ padding: '1rem', color: 'var(--bf-text-muted)' }}>Prop</th>
                        <th style={{ padding: '1rem', color: 'var(--bf-text-muted)' }}>Tipo</th>
                        <th style={{ padding: '1rem', color: 'var(--bf-text-muted)' }}>Default</th>
                        <th style={{ padding: '1rem', color: 'var(--bf-text-muted)' }}>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {props.map((prop, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--bf-surface-border)' }}>
                            <td style={{ padding: '1rem', fontWeight: 600, color: 'var(--bf-accent)', fontFamily: 'var(--bf-font-mono)' }}>{prop.name}</td>
                            <td style={{ padding: '1rem', color: 'var(--bf-text-secondary)', fontFamily: 'var(--bf-font-mono)', fontSize: '0.8rem' }}>{prop.type}</td>
                            <td style={{ padding: '1rem', color: 'var(--bf-text-muted)', fontFamily: 'var(--bf-font-mono)' }}>{prop.defaultValue}</td>
                            <td style={{ padding: '1rem', color: 'var(--bf-text-secondary)' }}>{prop.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
