const CarCard = ({ car, handleAddToCart }) => {
  const { id, name, model, price, description, year, image } = car;

  return (
    <div
      style={{
        marginTop: "100px",
        border: "1px solid pink",
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

      <button
        className="ubuntu-bold"
        style={{
          padding: "8px",
          marginBottom: "10px",
          fontSize: "16px",
          borderRadius: "10px",
          background: "tomato",
          color: "white",
          border: "none",
        }}
        onClick={() => handleAddToCart(car)}
      >
        Purchase
      </button>
    </div>
  );
};

export default CarCard;
