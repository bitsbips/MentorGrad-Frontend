import { format, getTime, formatDistanceToNow, parseISO } from "date-fns";
import { isSameDay, isToday, isYesterday } from "date-fns";

export const isEmptyObject = (obj: object) => {
  return Object.keys(obj).length === 0;
};

export function jwtDecode(token: any) {
  if (token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  }
}

export function formatDate(date: string | undefined, newFormat: string) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export const formatDateInWords = (date: string) => {
  return format(new Date(date), "MMM d', ' YYY");
};

export const formatDateInNum = (date: string) => {
  return format(new Date(date), "dd/MM/yy");
};

export const formatTime = (date: string) => {
  return format(new Date(date), "h':'mm a");
};

export const formatToYesterDay = (date: string) => {
  return isToday(new Date(date))
    ? "Today"
    : isYesterday(new Date(date))
    ? "Yesterday"
    : formatDateInWords(date);
};

export const formatRecentDate = (date: string) => {
  const first = isToday(new Date(date))
    ? "Today"
    : isYesterday(new Date(date))
    ? "Yesterday"
    : formatDateInNum(date);

  return first.concat(` at ${formatTime(date)}`);
};

export const sameDay = (prevDate: string, currentDate: string) => {
  return isSameDay(new Date(prevDate), new Date(currentDate));
};

export const getErrorMsg = (err: any) => {
  if (err.graphQLErrors[0]?.message) {
    return err.graphQLErrors[0].message;
  } else {
    return err?.message;
  }
};

export const truncateString = (string: string, maxCharLimit: any) => {
  return string.length < maxCharLimit
    ? string
    : string.slice(0, maxCharLimit) + "...";
};

export const getCurrencyFormat = (val: any, n: any, x: any) => {
  const re = "\\d(?=(\\d{" + (x || 3) + "})+" + (n > 0 ? "\\." : "$") + ")";
  return parseFloat(val)
    .toFixed(Math.max(0, ~~n))
    .replace(new RegExp(re, "g"), "$&,");
};
