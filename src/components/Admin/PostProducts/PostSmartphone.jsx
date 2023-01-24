import React from "react";
import { useState } from "react";
import PostNavigation from "../PostNavigation";
import { useDispatch } from "react-redux";
import { postCamera } from "../../../features/CameraSlice";
import "../../../styles/admin.css";
import neo from "../../../assets/neo.png";

const PostSmartphone = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [model, setModel] = useState("");
  const [nutrition, setNutrition] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [typeOfMatrix, setTypeOfMatrix] = useState("");
  const [permission, setPermission] = useState("");
  const dispatch = useDispatch();

  const handlePostSmartphone = () => {
    dispatch(
      postCamera({
        name,
        description,
        price,
        discount,
        model,
        nutrition,
        batteryCapacity,
        typeOfMatrix,
        permission,
      })
    );
    console.log(name, description, price, discount, "component");
  };

  return (
    <div className="post-products__container">
      <div className="post-products__header">
        <PostNavigation />
      </div>
      <div className="post-products__main">
        <div className="post-products__left">
            <div className="post-products__title">Смартфон</div>
          <div className="post-products__inputs">
            <div className="post-products__item">
              Название (Т)
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Описание (Т)
              <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Цена (Ч)
              <input
                onChange={(e) => setPrice(e.target.value)}
                value={price}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Скидка (Ч)
              <input
                onChange={(e) => setDiscount(e.target.value)}
                value={discount}
                type="text"
              />
            </div>
            <br />
            <h4>Характеристики</h4>
            <div className="post-products__item">
              Модель (Т)
              <input
                onChange={(e) => setModel(e.target.value)}
                value={model}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Питание (Т)
              <input
                onChange={(e) => setNutrition(e.target.value)}
                value={nutrition}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Емкость аккумулятора (Т)
              <input
                onChange={(e) => setBatteryCapacity(e.target.value)}
                value={batteryCapacity}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Тип матрицы (Т)
              <input
                onChange={(e) => setTypeOfMatrix(e.target.value)}
                value={typeOfMatrix}
                type="text"
              />
            </div>
            <div className="post-products__item">
              Разрешение (Т)
              <input
                onChange={(e) => setPermission(e.target.value)}
                value={permission}
                type="text"
              />
            </div>
            <button className="post-products__btn" onClick={handlePostSmartphone}>
              Добавить
            </button>
          </div>
        </div>
        <div className="post-products__right">
          <div className="neo__title">
            <h1>Ты избранный </h1>
          </div>
          <div className="neo__body">
            <img className="neo__image" src={neo} alt="neo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSmartphone;
