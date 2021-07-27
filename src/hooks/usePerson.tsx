import { useEffect, useState } from "react";
import useSWR from "swr";
import { googleSpreadsheetsAPIUrl, personsAPIUrl } from "../consts/consts";
import { person } from "../types/types";
import { formatPersonsReponse } from "../ultis/format";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const usePerson = (slug?: string) => {
  const { data, error } = useSWR(
    `${googleSpreadsheetsAPIUrl}${personsAPIUrl}`,
    fetcher
  );
  const formattedData = formatPersonsReponse(data);
  const isLoading = !error && !formattedData;
  const [persons, setPersons] = useState<person[] | null>(null);

  useEffect(() => {
    if (formattedData && !persons) {
      setPersons(formattedData);
    }
  }, [formattedData, persons]);

  const filteredPerson =
    persons && slug
      ? persons.filter((person) => {
          return person.id === slug;
        })
      : [];

  return { persons, isLoading, filteredPerson };
};

export default usePerson;
