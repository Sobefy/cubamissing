import {
  personResponseObjectPattern,
  personResponseObjectProperty,
} from "../consts/consts";
import { person, personsResponse } from "../types/types";

const formatPersonResponseKey = (key: string) => {
  let newKey:
    | "id"
    | "firstName"
    | "lastName"
    | "province"
    | "lastSeen"
    | "stopHour"
    | "stopDate"
    | "lastReport"
    | "verification"
    | "gender"
    | "birthDate"
    | "age"
    | "profession"
    | "skinTone"
    | "image"
    | "" = "";
  let replacedKey = key.replace(personResponseObjectPattern, "");

  switch (replacedKey) {
    case "nombre":
      newKey = "firstName";
      break;
    case "apellidos":
      newKey = "lastName";
      break;
    case "provincia":
      newKey = "province";
      break;
    case "lugardondefuevistoporúltimavez":
      newKey = "lastSeen";
      break;
    case "horadedetención":
      newKey = "stopHour";
      break;
    case "fechadedetención":
      newKey = "stopDate";
      break;
    case "últimoreporte":
      newKey = "lastReport";
      break;
    case "verificación":
      newKey = "verification";
      break;
    case "género":
      newKey = "gender";
      break;
    case "fechadenacimientoedad":
      newKey = "birthDate";
      break;
    case "edad":
      newKey = "age";
      break;
    case "profesión":
      newKey = "profession";
      break;
    case "pielbnm":
      newKey = "skinTone";
      break;
    case "fotografía":
      newKey = "image";
      break;
    case "id":
      newKey = "id";
      break;
    default:
      break;
  }
  return newKey;
};

export const formatPersonsReponse = (data: personsResponse) => {
  if (data) {
    const formatted = [];
    const rows = data.feed.entry;
    for (const row of rows) {
      const newRow = {
        id: "",
        firstName: "",
        lastName: "",
        lastSeen: "",
        province: "",
        stopHour: "",
        stopDate: "",
        lastReport: "",
        verification: "",
        gender: "",
        birthDate: "",
        age: "",
        profession: "",
        skinTone: "",
        image: "",
      };
      for (const key in row) {
        const newKey = formatPersonResponseKey(key);
        const newValue = row[key][personResponseObjectProperty];
        if (newKey) {
          newRow[newKey] = newValue;
        }
      }
      formatted.push(newRow);
    }
    return formatted;
  }
  return null;
};

export const searchByProperty = (
  searchTerm: string,
  persons: person[] | null,
  property: "search" | "province" | "initial" | "last_report"
) => {
  const results =
    searchTerm && persons && searchTerm !== "all"
      ? persons.filter((person) => {
          const { firstName, lastName, province, lastReport } = person;
          let searchCriteria = "";
          if (property === "search") {
            searchCriteria = `${firstName} ${lastName}`;
          }
          if (property === "province") {
            searchCriteria = `${province
              .trim()
              .toLowerCase()
              .replace(/\s/g, "-")}`;
          }
          if (property === "initial") {
            const firstLetter = firstName
              ? firstName.charAt(0).toLowerCase()
              : "";
            return firstLetter === searchTerm.toLowerCase();
          }
          if (property === "last_report") {
            const trimmedLastReport = lastReport.trim();
            return (
              (trimmedLastReport === "En proceso de verificación" &&
                searchTerm === "verificacion") ||
              (trimmedLastReport === "En detención" &&
                searchTerm === "detencion") ||
              (trimmedLastReport === "En desaparición forzada" &&
                searchTerm === "desaparicion_forzada") ||
              (trimmedLastReport === "En excarcelación" &&
                searchTerm === "excarcelacion")
            );
          }
          return searchCriteria
            .trim()
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        })
      : [];
  return results;
};

export const getAlphabet = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphaetArray = [];
  alphaetArray.push({ id: "all", label: "Todas" });
  alphabet.map((letter) => {
    const currentLetter = {
      id: letter,
      label: letter.toUpperCase(),
    };
    alphaetArray.push(currentLetter);
  });

  return alphaetArray;
};

export const getUniqueProvinces = (persons: person[]) => {
  const provinces = persons.map((person) => person.province.trim());
  const filteredProvinces = provinces.filter(function (province) {
    return province != "";
  });
  const uniqueProvinces = Array.from(
    new Set(filteredProvinces.map((province) => province))
  );
  const provincesList = [];
  provincesList.push({ id: "all", label: "Todas" });
  uniqueProvinces.map((province) => {
    const currentProvince = {
      id: province.trim().toLowerCase().replace(/\s/g, "-"),
      label: province,
    };
    provincesList.push(currentProvince);
  });
  return provincesList;
};

export const slugify = (...args: (string | number)[]): string => {
  const value = args.join(" ");

  return value
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, "-"); // separator
};
