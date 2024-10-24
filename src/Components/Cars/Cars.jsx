import { useEffect } from "react";
import { useState } from "react";
import CarCard from "../CarCard/CarCard";
import {
  carCartAddToLocalStorage,
  getStoredCart,
} from "../../utilities/localStorage";

const Cars = () => {
  const [cars, setCars] = useState([]);

  const [carCart, setCarCart] = useState([]);

  useEffect(() => {
    fetch("cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  // Load acr cart from Local Storage

  useEffect(() => {
    console.log(cars.length);

    if (cars.length) {
      const storedCart = getStoredCart();
      console.log(storedCart);

      const savedCart = [];

      for (const id of storedCart) {
        const car = cars.find((car) => car.id === id);
        if (car) {
          savedCart.push(car);
        }
      }
      console.log(savedCart);
      setCarCart(savedCart);
    }
  }, [cars]);

  const handleAddToCart = (car) => {
    const newCarCart = [...carCart, car];

    setCarCart(newCarCart);
    carCartAddToLocalStorage(car.id);
  };

  return (
    <div className="ubuntu-bold">
      <h1>Signature Cars Showroom</h1>

      <h3>Total Cars : {cars.length} </h3>

      <h4>My Cart : {carCart.length} </h4>

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
