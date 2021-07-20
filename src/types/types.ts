export interface person {
  id: string;
  firstName: string;
  lastName: string;
  lastSeen: string;
  province: string;
  stopHour: string;
  stopDate: string;
  lastReport: string;
  verification: string;
  gender: string;
  birthDate: string;
  age: string;
  profession: string;
  skinTone: string;
}

export interface cardTranslations {
  province: string;
  lastSeen: string;
  stopHour: string;
  stopDate: string;
  lastReport: string;
  verification: string;
}

export interface stringObject {
  [key: string]: string;
}

export interface personUnformatted {
  [key: string]: stringObject;
}

export interface personsResponse {
  feed: {
    entry: personUnformatted[];
  };
}
