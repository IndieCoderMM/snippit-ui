import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchContributors } from "../features/contributors/contributorsSlice";

const Contributors = () => {
  const contributors = useAppSelector((state) => state.contributors);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("Dispatching fetchContributors action...");
    dispatch(fetchContributors());
  }, [dispatch]);

  console.log("Contributors state:", contributors);

  return (
    <div>
      {contributors.data?.map((contributor) => (
        <h1 key={contributor.id}>{contributor.name}</h1>
      ))}
    </div>
  );
};

export default Contributors;
