import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
    const date = parseISO(dateString);
    return (
        <time dateTime={dateString}>{format(date, 'LLL do yyyy eee ppp')}</time>
    )
}

