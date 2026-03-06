import type {
    SidebarProps
} from '@byteflow-ui/sidebar';
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarFooter,
    SidebarItem,
    SidebarGroup
} from '@byteflow-ui/sidebar';

interface DocLayoutProps {
    children: React.ReactNode;
    activeComponentId: string;
    onSelectComponent: (id: string) => void;
    categories: { title: string, components: string[] }[];
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
}

export const DocLayout = ({
    children,
    activeComponentId,
    onSelectComponent,
    categories,
    theme,
    onToggleTheme
}: DocLayoutProps) => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bf-canvas)' }}>
            <div style={{ width: '280px', borderRight: '1px solid var(--bf-surface-border)', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
                <Sidebar>
                    <SidebarHeader>
                        <div style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                background: 'var(--bf-accent-gradient)',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontWeight: 800
                            }}>B</div>
                            <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>Byteflow UI</span>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        {categories.map((cat, i) => (
                            <SidebarGroup key={i} label={cat.title}>
                                {cat.components.map(comp => (
                                    <SidebarItem
                                        key={comp}
                                        active={activeComponentId === comp}
                                        onClick={() => onSelectComponent(comp)}
                                    >
                                        {comp.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </SidebarItem>
                                ))}
                            </SidebarGroup>
                        ))}
                    </SidebarContent>
                    <SidebarFooter>
                        <div style={{ padding: '1rem', borderTop: '1px solid var(--bf-surface-border)' }}>
                            <button
                                onClick={onToggleTheme}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    borderRadius: '10px',
                                    border: '1px solid var(--bf-surface-border)',
                                    background: 'var(--bf-canvas-subtle)',
                                    color: 'var(--bf-text-primary)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    fontSize: '0.85rem'
                                }}
                            >
                                {theme === 'light' ? '🌙 Modo Oscuro' : '☀️ Modo Claro'}
                            </button>
                        </div>
                    </SidebarFooter>
                </Sidebar>
            </div>

            <main style={{ flex: 1, padding: '3rem 5rem', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    marginBottom: '1rem',
                    fontSize: '0.85rem'
                }}>
                    <span style={{ color: 'var(--bf-text-muted)' }}>Docs</span>
                    <span style={{ color: 'var(--bf-text-muted)' }}>/</span>
                    <span style={{ color: 'var(--bf-text-secondary)' }}>Componentes</span>
                </div>
                {children}
            </main>
        </div>
    );
};
