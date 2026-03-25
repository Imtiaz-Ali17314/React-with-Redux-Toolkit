import { useSelector } from "react-redux";

const DispalyCounter = () => {
  const {counter} = useSelector(store => store.counter);

  return (
    <p className="lead mb-4">
     Counter Current Value: {counter}
    </p>
  );
};

export default DispalyCounter;
