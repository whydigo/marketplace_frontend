//страница возврата товара
import React from "react";
import "../../../styles/ServiceReturn.css";
import Service from "../Service";

const ServiceReturn = () => {
  return (
    <>
      <Service />
      <div className="service__container">
        <div className="parent">
          <h4>Возврат товара надлежащего качества</h4>
          <p className="purchase_returns">Условия возврата</p>
          <p>
            Товар принимается к возврату только в полной комплектации, со всеми
            упаковками и наклейками, в неношеном/неиспользованном виде
          </p>
          <p className="purchase_returns">Причины возврата</p>
          <p>- Не подошел размер, фасон, цвет, длина и т.п. </p>
          <p>
            - Оттенок полученного товара отличается от оттенка модели с
            фотографии на сайте
          </p>
          <p className="purchase_returns">Срок возврата</p>
          <p>
            Срок возврата товара надлежащего качества составляет 14 дней с
            момента получения товара, если иное не было оговорено при продаже
            товара
          </p>
          <p className="purchase_returns">Как вернуть товар</p>
          <p className="return_point">
            1. В пункты выдачи/возврата Electronics
          </p>
          <p>
            Покупатель может самостоятельно вернуть неподошедший товар в наши
            фирменные <spann className="pointe">пункты выдачи/возврата</spann>
          </p>
          <p className="return_point">2. Курьером Electronics</p>
          <p>
            Услуга доступна для населенных пунктов, куда осуществляется доставка
            курьером
          </p>
          <p>
            Курьером можно вернуть не более 10 позиций в день. Количество
            товаров для возврата в пункты выдачи не ограничено
          </p>
          <h4>Возврат товара ненадлежащего качества</h4>
          <p className="purchase_returns">Причина возврата</p>
          <p>Производственный недостаток (брак) товара</p>
          <p className="purchase_returns">Срок возврата</p>
          <p>
            Покупатель может вернуть товар в течение гарантийного срока,
            установленного производителем. <br />
            Если гарантийный срок производителем не установлен, срок для
            возврата составляет 2 (два) года.
          </p>
          <p className="purchase_returns">Как вернуть товар</p>
          <p>
            - Оформить заявку в Личном кабинете. Срок рассмотрения заявки не
            превышает 7 (семь) рабочих дней
          </p>
          <p>
            - В случае, если по результату рассмотрения заявки продавцом принято
            положительное решение, покупатель может вернуть товар в Пункт выдачи
            Wildberries
          </p>
          <p>
            {" "}
            -В случае отклонения заявки, покупатель вправе обратиться в
            независимую экспертизу. В случае, если независимой экспертизой будет
            подтверждено право покупателя
            <br />
            на возврат товара, все расходы покупателя, связанные с проведением
            независимой экспертизы подлежат возмещению продавцом
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceReturn;
