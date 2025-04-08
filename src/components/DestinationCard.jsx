import React from "react";

const DestinationCard = ({ destination }) => {
  const { name, location, image, description, price } = destination;

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div style={contentStyle}>
        <h3>{name}</h3>
        <p><strong>{location}</strong></p>
        <p>{description}</p>
        <p style={priceStyle}>{price}</p>
      </div>
    </div>
  );
};

// Styles
const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  overflow: "hidden",
  textAlign: "center",
  maxWidth: "300px",
  margin: "auto",
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
};

const contentStyle = {
  padding: "15px",
};

const priceStyle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#2ecc71",
};

export default DestinationCard;
