import React, { useState, useMemo } from 'react';
import './styles.css';

export interface CalendarProps {
    className?: string;
    selected?: Date | Date[];
    onSelect?: (date: Date) => void;
    mode?: 'single' | 'range' | 'multiple';
}

const DAYS = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
const MONTHS = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const Calendar: React.FC<CalendarProps> = ({
    className = '',
    selected,
    onSelect,
    mode = 'single',
}) => {
    const today = new Date();
    const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        setViewDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(year, month + 1, 1));
    };

    const isSelected = (date: Date) => {
        if (!selected) return false;
        if (selected instanceof Date) {
            return date.toDateString() === selected.toDateString();
        }
        if (Array.isArray(selected)) {
            return selected.some((d) => d.toDateString() === date.toDateString());
        }
        return false;
    };

    const isToday = (date: Date) => date.toDateString() === today.toDateString();

    const calendarDays = useMemo(() => {
        const days = [];
        // Previous month days to fill the gap
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDayOfMonth - 1; i >= 0; i--) {
            days.push({
                date: new Date(year, month - 1, prevMonthLastDay - i),
                isCurrentMonth: false,
            });
        }
        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                date: new Date(year, month, i),
                isCurrentMonth: true,
            });
        }
        // Next month days to reach 42 (6 rows)
        const remaining = 42 - days.length;
        for (let i = 1; i <= remaining; i++) {
            days.push({
                date: new Date(year, month + 1, i),
                isCurrentMonth: false,
            });
        }
        return days;
    }, [year, month, firstDayOfMonth, daysInMonth]);

    return (
        <div className={`bf-calendar ${className}`}>
            <div className="bf-calendar-header">
                <button className="bf-calendar-nav-btn" onClick={handlePrevMonth} type="button">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94627 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
                <div className="bf-calendar-title">
                    {MONTHS[month]} {year}
                </div>
                <button className="bf-calendar-nav-btn" onClick={handleNextMonth} type="button">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35985 12.0535 6.67627 12.0433 6.86513 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86513 3.15794C6.67627 2.94627 6.35985 2.95648 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
            </div>
            <div className="bf-calendar-grid">
                {DAYS.map((day) => (
                    <div key={day} className="bf-calendar-day-name">{day}</div>
                ))}
                {calendarDays.map((item, idx) => {
                    const selectedDate = isSelected(item.date);
                    const todayDate = isToday(item.date);

                    return (
                        <button
                            key={idx}
                            type="button"
                            className={`bf-calendar-day ${!item.isCurrentMonth ? 'bf-calendar-day--outside' : ''} ${selectedDate ? 'bf-calendar-day--selected' : ''} ${todayDate ? 'bf-calendar-day--today' : ''}`}
                            onClick={() => onSelect?.(item.date)}
                        >
                            {item.date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
