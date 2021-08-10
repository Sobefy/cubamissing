import { person } from "../types/types";

export const personResponseObjectPattern = "gsx$";
export const personResponseObjectProperty = "$t";
export const googleSpreadsheetsAPIUrl = "https://spreadsheets.google.com";
export const spreadsheetID = "1-38omFpJdDiKTSBoUOg19tv2nJxtNRS3-2HfVUUwtSw";
export const personsAPIUrl = `/feeds/list/${spreadsheetID}/1/public/values?alt=json`;
export const personsAPIUrlPage2 = `/feeds/list/1Q0ooW6rTiwhBj_WVEKCByqKx_NwrQG-JsKQqhGySFLE/2/public/values?alt=json`;
export const skeletonCardLength = 20;
export const lastReportArray = [
  { id: "all", label: "Todos" },
  { id: "verificacion", label: "En proceso de verificación" },
  { id: "detencion", label: "En detención " },
  { id: "desaparicion_forzada", label: "En desaparición forzada" },
  { id: "excarcelacion", label: "En excarcelación" },
];
