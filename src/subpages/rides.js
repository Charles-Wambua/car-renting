import { useEffect, useState } from "react";
import axios from "axios";
import "./rides.css";

export const Rides = () => {
  const [cars, setCars] = useState([]);
  const [carSelected, setCarSelected] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let url = "http://localhost:3001/getCars/getCars";
        const searchParams = new URLSearchParams(window.location.search);
        const carType = searchParams.get("cartype");
        if (carType) {
          url += `?cartype=${carType}`;
        }
        const res = await axios.get(url);
        setCars(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchCars();
  }, []);

  const handleSelectCar = (car) => {
    setCarSelected(car);
  };

  let filteredCars = cars;
  if (carSelected) {
    filteredCars = cars.filter((car) => car._id === carSelected._id);
  }

  return (
    <div>
      <h4>Discover TripWheels, <br/> World's largest car sharing marketplace</h4>
      <h2>Rent a {carSelected ? carSelected.carname : "car"}</h2>
      <div>
        <div className="car-list">
          {filteredCars.map((car) => (
            <div
              key={car._id}
              className={carSelected && car._id === carSelected._id ? "card selected" : "card"}
              onClick={() => handleSelectCar(car)}
            >
              <img src={car.images[0]} alt={car.carname} />
              <div className="card-body">
                <h5 className="card-title">{car.carname}</h5>
                <p className="card-text">
                  Type: {car.cartype}
                  <br />
                  Price: {car.price}
                  <br />
                  Pick up: {car.pickup}
                  <br />
                  Drop off: {car.dropoff}
                  <br />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
