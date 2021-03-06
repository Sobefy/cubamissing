export const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "";
export const personResponseObjectProperty = "$t";
export const googleSpreadsheetsAPIUrl = "https://sheets.googleapis.com";
export const spreadsheetID = "1MpzgaydeGO9OSkkvifmQYJF2gIG1T3qQxG8ge0lVP0A";
export const personsAPIUrl = `/v4/spreadsheets/${spreadsheetID}/?key=${GOOGLE_API_KEY}&includeGridData=true`;
export const skeletonCardLength = 20;
export const lastReportArray = [
  { id: "all", label: "Todos" },
  { id: "verificacion", label: "En proceso de verificación" },
  { id: "detencion", label: "En detención " },
  { id: "desaparicion_forzada", label: "En desaparición forzada" },
  { id: "excarcelacion", label: "En excarcelación" },
];
