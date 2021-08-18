import {
  personResponseObjectPattern,
  personResponseObjectProperty,
} from "../consts/consts";
import { person, personsRawResponse } from "../types/types";

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

  switch (key) {
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

export const formatPersonsReponse = (response: personsRawResponse) => {
  const rowData = response?.sheets[0]?.data[0]?.rowData;
  const columns = rowData ? rowData[0]?.values : null;
  const data = rowData ? rowData.slice(1) : [];
  const formattedResponse: any = [];

  if (response && data) {
    data.map((el) => {
      const currentArray = el.values;
      const currentObject = {
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

      currentArray.map((el2, index) => {
        const value = el2.formattedValue;
        const column =
          columns && columns[index] && columns[index].formattedValue
            ? columns[index].formattedValue.toLowerCase().replace(/\s/g, "")
            : "";
        const key = columns ? formatPersonResponseKey(column) : "";
        if (key && value) {
          currentObject[key] = value;
        }
      });

      if (currentObject.id) {
        formattedResponse.push(currentObject);
      }
    });

    return formattedResponse;
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
