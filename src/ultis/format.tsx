import { v4 as uuid_v4 } from "uuid";

import {
  personResponseObjectPattern,
  personResponseObjectProperty,
} from "../consts/consts";
import { person, personsResponse } from "../types/types";

const formatPersonResponseKey = (key: string) => {
  let newKey:
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
      const newRow: person = {
        id: uuid_v4(),
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
        if (key.startsWith(personResponseObjectPattern)) {
          const newKey = formatPersonResponseKey(key);
          const newValue = row[key][personResponseObjectProperty];
          if (newKey) {
            newRow[newKey] = newValue;
          }
        }
      }
      formatted.push(newRow);
    }
    return formatted;
  }
  return null;
};

export const searchByName = (searchTerm: string, persons: person[] | null) => {
  const results =
    searchTerm && persons
      ? persons.filter((person) => {
          const { firstName, lastName } = person;
          const fullName = `${firstName} ${lastName}`;
          return fullName
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase());
        })
      : [];
  return results;
};
