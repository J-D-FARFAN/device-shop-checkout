import "./button.css";

export function ButtonCheckout({ ValueText }) {
  return (
    <>
      <div className="bx-btn">
        <button type="submit" className="btn-applyCoupon">
          {ValueText}
        </button>
      </div>
    </>
  );
}
