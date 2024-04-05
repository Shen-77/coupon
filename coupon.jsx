import React, {useState}from 'react';
import './coupon.css';

function CouponSlideshow() {
  const coupons = [
    { id: 1, code: 'EID30', description: 'get the 30% off on all our services for first 786 clients. CLICK TO AVAIL NOW', bgColor: '#ffcccc' ,limiteduser:786},
    { id: 2, code: 'FIRST20', description: 'get the 20% off for the first 1000 clients .click t grab .', bgColor: '#ccffcc',limiteduser:1000 },
    { id: 3, code: 'BOGO', description: 'Buy One Get One Free', bgColor: '#ccccff' ,limiteduser:2000}
  ];
  const [clickCount, setClickCount] = useState(0);

  const handleCouponClick = (code, limiteduser) => {
    setClickCount(clickCount + 1);
    if (clickCount < limiteduser) {
      redirectToBooking(code);
    } else {
      alert('Sorry, you are too late. This coupon has been redeemed by the limited number of users.');
    }
  };

  const redirectToBooking = (couponCode) => {
    window.location.href = `appointus?coupon=${couponCode}`;
  };

  return (
    <div>
    
      <div className="slideshow">
      <h5 className='coupon-head'>Claim your coupon for instant savings!</h5>
        <div className="coupons-wrapper">
          {coupons.map(coupon => (
            <div
              key={coupon.id}
              className="coupon"
              onClick={() => handleCouponClick(coupon.code, coupon.limiteduser)}
              style={{ width: '200px', backgroundColor: coupon.bgColor }}
            >
              <div className="code" style={{ borderBottom: '2px solid gray' }}>{coupon.code}</div>
              <div className="description">{coupon.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CouponSlideshow;
