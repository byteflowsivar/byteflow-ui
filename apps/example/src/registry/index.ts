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
import { tabsDoc } from './tabs';
import { scrollAreaDoc } from './scroll-area';
import { breadcrumbDoc } from './breadcrumb';
import { emptyDoc } from './empty';
import { itemDoc } from './item';
import { fieldDoc } from './field';
import { dialogDoc } from './dialog';
import { popoverDoc } from './popover';
import { dropdownMenuDoc } from './dropdown-menu';
import { sheetDoc } from './sheet';
import { hoverCardDoc } from './hover-card';
import { tooltipDoc } from './tooltip';

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
    'tabs': tabsDoc,
    'scroll-area': scrollAreaDoc,
    'breadcrumb': breadcrumbDoc,
    'empty': emptyDoc,
    'item': itemDoc,
    'field': fieldDoc,
    'dialog': dialogDoc,
    'popover': popoverDoc,
    'dropdown-menu': dropdownMenuDoc,
    'sheet': sheetDoc,
    'hover-card': hoverCardDoc,
    'tooltip': tooltipDoc,
};
