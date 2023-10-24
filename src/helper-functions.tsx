import { format, getTime, formatDistanceToNow, parseISO } from "date-fns";

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
