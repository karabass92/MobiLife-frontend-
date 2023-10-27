import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import style from './Guarantee.module.scss';


const Guarantee = () => {
    return (
        <main className={style.main}>
            <BreadCrumbs header='Гарантия' />
            <h2>
                На все товары предоставляется гарантия? 
            </h2>
            <p>
                На товары в нашем магазине предоставляется гарантия, 
                сроком от 30 дней до 10-ти лет, в зависимости от сервисной 
                политики производителя. Срок гарантии указан в товаре на нашем 
                сайте.
            </p>
            <h2>
                Я могу обменять или вернуть товар?
            </h2>
            <p>
                Да, вы можете обменять или вернуть товар в течение 30 дней 
                после покупки. Это право гарантирует вам «Закон о защите прав 
                потребителя».
                Чтобы использовать эту возможность, пожалуйста убедитесь что:
            </p>
            <ul>
                <li>
                    Товар не имеет следов использования: царапин, сколов, 
                    потёртостей;
                </li>
                <li>
                    Товар полностью укомплектован и не нарушена целостность 
                    упаковки;
                </li>
                <li>
                    Сохранены все ярлыки и заводская маркировка.
                </li>
            </ul>
            <h2>
                В каких случаях гарантия не предоставляется?
            </h2>
            <ul>
                <li>
                    Присутствуют механические или иные повреждения, которые 
                    возникли вследствие Умышленных или неосторожных действий 
                    покупателя или третьих лиц;
                </li>
                <li>
                    Нарушены правила использования, изложенные в эксплуатационных 
                    документах;
                </li>
                <li>
                    Было произведено несанкционированное вскрытие, ремонт или 
                    изменены внутренние коммуникации и компоненты товара, 
                    изменена конструкция или схемы товара
                </li>
            </ul>
        </main>
    )
};


export default Guarantee;