import type { ComponentDocDefinition } from './button';
import { buttonDoc } from './button';
import { moneyInputDoc } from './money-input';
import { cardDoc } from './card';
import { inputDoc } from './input';
import { checkboxDoc } from './checkbox';

export const componentRegistry: Record<string, ComponentDocDefinition> = {
    'button': buttonDoc,
    'money-input': moneyInputDoc,
    'card': cardDoc,
    'input': inputDoc,
    'checkbox': checkboxDoc,
};
