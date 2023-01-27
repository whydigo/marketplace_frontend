import React from 'react';
import '../../../styles/rulesUse.css';
import Service from '../Service';

const RulesUse = () => {
    return (
        <>
        <Service />
        <div className='service__container'>
        <div className='h-rulesUse'>
            <div className='m-rulesUse'>
                <h1 className='pay-zagolovok'>Правила пользования торговой площадкой «Electronics»</h1>
                <details className='pay-details'>
                    <summary className='pay-summary'>Термины и определения</summary>
                    <p>В настоящих Правилах, если контекст не требует иного, нижеприведенные термины имеют следующие значения и являются их составной неотъемлемой частью:
                        Торговая площадка — веб-сайт https://www.wildberries.ru и мобильное приложение Wildberries, являющиеся сервисом, предоставляющим доступ к информации о товарах, предназначенной для потенциальных Покупателей (потребителей).
                        Владелец Торговой площадки — ООО «Вайлдберриз» по тексту настоящих Правил — Вайлдберриз (Юридический адрес: 142181 Московская область, г. Подольск, деревня Коледино, Территория Индустриальный парк Коледино, д. 6, стр. 1, ОГРН 1067746062449, email: sales@wildberries.ru).</p>
                </details>
                <details className='pay-details'>
                    <summary className='pay-summary'>Регистрация на сайте</summary>
                    <p>Пользуясь Торговой площадкой, Покупатель соглашается с условиями настоящих Правил.
                        Торговая площадка предоставляет Покупателю безвозмездную возможность поиска информации о Товарах, ознакомления с товарными предложениями Вайлдберриз и других Продавцов, возможность получения (в т.ч. по результатам поиска) товарных предложений и информации, а также иные функциональные возможности.</p>
                </details>
                <details className='pay-details'>
                    <summary className='pay-summary'>Оформление заказа на Торговой площадке</summary>
                    <p>Торговая площадка предназначена для реализации Товаров Вайлдберриз и иных Продавцов, а также услуг Вайлдберриз по доставке указанных Товаров Покупателям.
                        Заказывая на Торговой площадке Товар, реализуемый Вайлдберриз, Покупатель вступает в договорные отношения с Вайлдберриз в рамках договора купли-продажи Товара.
                        Заказывая на Торговой площадке Товар, реализуемый иными Продавцами, Покупатель в рамках договора купли-продажи вступает в договорные отношения непосредственно с Продавцом, реализующим данный Товар. Доставка Товара, а также прием оплаты от Покупателей за Товар, приобретаемый на Торговой площадке осуществляется Вайлдберриз.
                        Взаиморасчеты с Покупателем за Товар, приобретенный им на Торговой площадке, осуществляется Вайлдберриз от своего имени или по поручению непосредственного Продавца от имени последнего.</p>
                </details>
                <details className='pay-details'>
                    <summary className='pay-summary'>Цена и оплата</summary>
                    <p>Неотъемлемым условием оформления Заказа на Торговой площадке является заключение Покупателем с Вайлдберриз договора на оказание услуг доставки Товаров, размещенных на Торговой площадке.
                        В рамках одного Заказа Покупателем может быть заключен договор оказания услуги доставки Товаров нескольких Продавцов, с одновременным заключением нескольких договоров купли-продажи в отношении выбранных Покупателем Товаров. Стоимость курьерской доставки составляет 199 руб.
                        Право собственности на Заказанные Товары переходит к Покупателю с момента фактической передачи Товара Покупателю и оплаты последним полной стоимости Товара, а также услуги доставки Товара. Риск его случайной гибели или повреждения Товара переходит к Покупателю с момента фактической передачи Товара Покупателю.</p>
                </details>
                <details className='pay-details'>
                    <summary className='pay-summary'>Права и обязанности сторон</summary>
                    <p>Обрабатывать персональные данные Покупателя в порядке, установленном действующим законодательством и Политикой Вайлдберриз в отношении организации обработки и обеспечения безопасности персональных данных.
                        В случае достижения цели обработки персональных данных Покупателя, Вайлдберриз обязуется прекратить обработку персональных данных или обеспечить ее прекращение (если обработка персональных данных осуществляется другим лицом, действующим по поручению Вайлдберриз) и уничтожить персональные данные или обеспечить их уничтожение (если обработка персональных данных осуществляется другим лицом, действующим по поручению Вайлдберриз) в срок, не превышающий тридцати дней с даты достижения цели обработки персональных данных, если иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является Покупатель, иным соглашением между Вайлдберриз и Покупателем.
                        В случае отзыва Покупателем согласия на обработку его персональных данных Вайлдберриз обязуется прекратить их обработку или обеспечить прекращение такой обработки (если обработка персональных данных осуществляется другим лицом, действующим по поручению Вайлдберриз) и в случае, если сохранение персональных данных более не требуется для целей обработки персональных данных, уничтожить персональные данные или обеспечить их уничтожение (если обработка персональных данных осуществляется другим лицом, действующим по поручению Вайлдберриз) в срок, не превышающий тридцати дней с даты поступления указанного отзыва, если иное не предусмотрено договором, стороной которого, выгодоприобретателем или поручителем по которому является Покупатель.</p>
                </details>
                <details className='pay-details'>
                    <summary className='pay-summary'>Доставка и возврат товара</summary>
                    <p>Доставка Товара Покупателю осуществляется на условиях, изложенных в настоящих Правилах, и в период времени, автоматически определённый системой при оформлении заказа, который является ориентировочным и может быть увеличен при наступлении обстоятельств, которые не позволяют доставить товар в такой срок. При превышении разумного срока на доставку товара, покупатель имеет возможность осуществить отказ от товара в Личном кабинете. Если Покупатель, при доставке товара в место, указанное Покупателем, не получает заказ в указанный в Личном кабинете срок хранения, Вайлдберриз вправе аннулировать заказ без дополнительного информирования Покупателя. В случае если Заказ предоплачен, денежные средства возвращаются Покупателю в установленный законодательством срок.
                        В случае обнаружения в товаре, за исключением крупногабаритных товаров, доставленных «до двери», явных недостатков в присутствии представителя Вайлдберриз, Покупатель имеет право отказаться от такого товара при получении.
                        Претензии к количеству, комплектности, весу, виду и иным свойствам Товара не принимаются после получения Заказа и проверки товара с учетом положений пп. 2 п. 7.7 и пп. 2 п. 7.8 настоящих Правил, равно как в случаях, когда покупатель во время проверки и получения товара не сообщил своевременно о наличии перечисленных претензий в отношении товара, либо не реализовал своё право на своевременную подачу такой претензии, либо отказался осуществить проверку товара в присутствии представителя Вайлдберриз.
                        При обнаружении недостатков при получении крупногабаритного товара, доставленного «до двери», услуга отказа от товара при получении не предоставляется. Для возврата товара в таком случае необходимо в соответствии с п.п. 7.11 — 7.13 настоящих Правил создать заявку в Личном кабинете.</p>
                </details>
            </div>
            </div>
        </div>
        </>
    );
};

export default RulesUse;