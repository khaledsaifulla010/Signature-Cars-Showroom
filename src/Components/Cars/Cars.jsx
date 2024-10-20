import { useEffect } from "react";
import { useState } from "react";

const Cars = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      <h1 className="ubuntu-bold">Signature Cars Showroom</h1>
    </div>
  );
};

export default Cars;
