import type { ComponentDocDefinition } from './button';
import { buttonDoc } from './button';
import { moneyInputDoc } from './money-input';
import { cardDoc } from './card';
import { inputDoc } from './input';
import { checkboxDoc } from './checkbox';
import { badgeDoc } from './badge';
import { avatarDoc } from './avatar';
import { alertDoc } from './alert';
import { progressDoc } from './progress';
import { toastDoc } from './toast';
import { switchDoc } from './switch';
import { sliderDoc } from './slider';

export const componentRegistry: Record<string, ComponentDocDefinition> = {
    'button': buttonDoc,
    'money-input': moneyInputDoc,
    'card': cardDoc,
    'input': inputDoc,
    'checkbox': checkboxDoc,
    'badge': badgeDoc,
    'avatar': avatarDoc,
    'alert': alertDoc,
    'progress': progressDoc,
    'toast': toastDoc,
    'switch': switchDoc,
    'slider': sliderDoc,
};
