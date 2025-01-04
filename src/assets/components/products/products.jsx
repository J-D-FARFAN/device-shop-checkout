import "./products.css";

export function Products({
  ImageProduct,
  NameProduct,
  ColorProduct,
  PriceProduct,
}) {
  return (
    <>
      <article className="content_infoProduct">
        <div className="bx-image-product">
          <img src={ImageProduct} alt="" className="product" />
        </div>

        <section className="bx-infoProduct">
          <header className="content-headerInfo">
            <div className="bx-name__and__color-product">
              <span className="nameProduct">{NameProduct}</span>
              <span className="color">{ColorProduct}</span>
            </div>

            <div className="bx-price">
              <span className="price">${PriceProduct}</span>
            </div>
          </header>

          <div className="bx-quantity__and__deleteProduct">
            <span className="quantity">x 1</span>
            <span className="deleteProduct">X</span>
          </div>
        </section>
      </article>
    </>
  );
}
