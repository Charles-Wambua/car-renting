import { useState } from "react";
import axios from "axios";

export const PostCar = () => {
  const [cartype, setCartpe] = useState("");
  const [carname, setCarname] = useState("");
  const [price, setPrice] = useState(0);
  const [pickup, setPickup] = useState("");
  const [dropoff, setdropoff] = useState("");
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [listofCars, setListofCars] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("cartype", cartype)
    formData.append("carname", carname)
    formData.append("price", price)
    formData.append("pickup", pickup)
    formData.append("dropoff", dropoff)
    images.forEach((image) => {
      formData.append("images", image, image.name)
    })

    try {
      const res = await axios.post("http://localhost:3001/postCar/postCar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Car posted");
      setListofCars([...listofCars, res.data]);
    } catch (error) {
     alert (error.message)
    }
  };

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);
    const selectedImageUrls = selectedImages.map((image) =>
      URL.createObjectURL(image)
    );
    setImageUrls(selectedImageUrls);
  };

  return (
    <div className="auth">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="cartype">Car Type</label>
          <input
            type="text"
            name="cartype"
            required
            onChange={(event) => {
              setCartpe(event.target.value);
            }}
          />
          <label htmlFor="carname">Car Name</label>
          <input
            type="text"
            name="carname"
            required
            onChange={(event) => {
              setCarname(event.target.value);
            }}
          />
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            required
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <label htmlFor="pickup">Pick up location</label>
          <input
            type="text"
            name="pickup"
            required
            onChange={(event) => {
              setPickup(event.target.value);
            }}
          />
          <label htmlFor="dropoff">Drop off location</label>
          <input
            type="text"
            name="dropoff"
            required
            onChange={(event) => {
              setdropoff(event.target.value);
            }}
          />
          <label htmlFor="file">Choose Images</label>
          <input
            type="file"
            accept="image/*"
            required
            name="file"
            onChange={handleImageChange}
            multiple

          />
          <button type="">Submit</button>
        </form>
      </div>
    </div>
  );
};
