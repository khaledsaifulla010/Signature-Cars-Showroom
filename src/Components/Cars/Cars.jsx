import { useEffect } from "react";
import { useState } from "react";
import CarCard from "../CarCard/CarCard";

const Cars = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleAddToCart = (car)=>{
    console.log(car);
  }

  return (
    <div className="ubuntu-bold">
      <h1>Signature Cars Showroom</h1>

      <h3>Total Cars : {cars.length} </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 650px)",
          gap: "50px",
        }}
      >
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            handleAddToCart={handleAddToCart}
          ></CarCard>
        ))}
      </div>
    </div>
  );
};

export default Cars;
