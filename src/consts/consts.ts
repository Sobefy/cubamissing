export const GOOGLE_API_KEY = process.env.NEXT_GOOGLE_API_KEY || "";
export const personResponseObjectProperty = "$t";
export const googleSpreadsheetsAPIUrl = "https://sheets.googleapis.com";
export const spreadsheetID = "1-38omFpJdDiKTSBoUOg19tv2nJxtNRS3-2HfVUUwtSw";
export const personsAPIUrl = `/v4/spreadsheets/${spreadsheetID}/?key=${GOOGLE_API_KEY}&includeGridData=true`;
export const skeletonCardLength = 20;
export const lastReportArray = [
  { id: "all", label: "Todos" },
  { id: "verificacion", label: "En proceso de verificación" },
  { id: "detencion", label: "En detención " },
  { id: "desaparicion_forzada", label: "En desaparición forzada" },
  { id: "excarcelacion", label: "En excarcelación" },
];
