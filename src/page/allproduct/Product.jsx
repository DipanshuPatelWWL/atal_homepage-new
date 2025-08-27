import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import API, { IMAGE_URL } from "../../API/Api";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

function Product() {
  const location = useLocation();
  const { category, subcategory } = location.state;

  const [product, setproduct] = useState([]);

  const fetchproduct = async () => {
    try {
      const res = await API.get(`/getProducts/${category}/${subcategory}`);
      setproduct(res.data || []);
      // console.log(res.data);
    } catch (err) {
      console.error("Failed to fetch reviews:", err);
    }
  };
  useEffect(() => {
    fetchproduct();
  }, []);


  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-5 ml-10 font-bold text-2xl">{product.cat_sec}</div>
      <div className="mt-2 ml-10 font-semibold text-lg">
        {product.length} Results
      </div>
      <div className="grid grid-cols-4 px-10 py-8 ml-10">
        {product.map((data, index) => (
          <div
            className="w-64 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col items-center border-red-500 border shadow-gray-200"
            key={index}
          >
            {/* Image */}
            {data.product_image_collection &&
              data.product_image_collection.length > 0 ? (
              <Link to="/cart" state={{ ID: data._id }}>
                <img
                  src={
                    data.product_image_collection[0].startsWith("http")
                      ? data.product_image_collection[0]
                      : `${IMAGE_URL + data.product_image_collection[0]}`
                  }
                  alt={data.product_name}
                  className="w-full h-36 object-contain mb-4 hover:scale-105 hover:cursor-pointer"
                  loading="lazy"
                  decoding="async"
                />
              </Link>
            ) : (
              "No Images"
            )}

            {/* Title and Price */}
            <div className="flex justify-between items-center w-full mt-3">
              <h2 className="font-semibold text-gray-800 text-base capitalize">
                {data.product_name}
              </h2>
              <FaHeart className="mr-1 fill-gray-500 hover:fill-red-600 hover:cursor-pointer text-2xl" />
            </div>

            {/* Rating & Button */}
            <div className="flex justify-between items-center w-full mt-3">
              <div className="flex items-center gap-1">
                <span>From</span>
                <span className="line-through">${data.product_price}</span>
                <span className="text-red-600 font-semibold">
                  ${data.product_sale_price}
                </span>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: data._id,
                      name: data.product_name,
                      price: data.product_sale_price,
                      image: `${IMAGE_URL + data.product_image_collection[0]}`,
                    })
                  );
                  Swal.fire({
                    toast: true,
                    position: "top-end",
                    icon: "success",
                    title: "Product added to cart!",
                    showConfirmButton: false,
                    timer: 3000,
                  });
                }}
                className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:cursor-pointer"
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
