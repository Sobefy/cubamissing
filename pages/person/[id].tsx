import { useRouter } from "next/router";
import usePerson from "../../src/hooks/usePerson";

const PersonPage = () => {
  const router = useRouter();
  const slug = typeof router.query.id === "string" ? router.query.id : "";

  const { filteredPerson } = usePerson(slug);
  const isLoading = !filteredPerson;
  const person =
    !isLoading && filteredPerson.length > 0 ? filteredPerson[0] : null;

  return <p>Person {slug}</p>;
};

export default PersonPage;
