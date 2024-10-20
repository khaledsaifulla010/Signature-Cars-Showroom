const CarCard = ({ car, handleAddToCart }) => {
  const { id, name, model, price, description, year, image } = car;

  return (
    <div
      style={{
        marginTop: "100px",
        border: "2px solid pink",
        borderRadius: "20px",
        backgroundColor: "#f0fdf4",
      }}
    >
      <img
        style={{
          width: "650px",
          height: "300px",
          borderStartEndRadius: "20px",
          borderTopLeftRadius: "20px",
          objectFit: "cover",
        }}
        src={image}
      />

      <h3>Name : {name} </h3>
      <h4>Model: {model} </h4>

      <button onClick={() => handleAddToCart(car)}>Purchase</button>
    </div>
  );
};

export default CarCard;
