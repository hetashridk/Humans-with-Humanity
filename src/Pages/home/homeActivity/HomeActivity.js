import { useState, useEffect } from 'react';
import "./homeActivity.css"

function HomeActivity() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (value1 < 4000) {
        setValue1(value1 + 10);
      }
    }, 3);

    const interval2 = setInterval(() => {
      if (value2 < 100) {
        setValue2(value2 + 2);
      }
    }, 5);

    const interval3 = setInterval(() => {
      if (value3 < 1000) {
        setValue3(value3 + 5);
      }
    }, 5);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [value1, value2, value3]);

  return (
    <div className="counter-container">
      <div className="counter">
        <div className="counter-box">
        <div className="counter-value">{value1}+ <br/>
        <p>ANIMALS RESCUED</p></div>
        </div>
      </div>
      <div className="counter">
        <div className="counter-box">
        <div className="counter-value">{value2}+ <br/>
        <p>VOLUNTEER</p></div>
        </div>
      </div>
      <div className="counter">
        <div className="counter-box">
        <div className="counter-value">{value3}+<br/>
        <p>ACTION TAKEN AGAINST <br/> ANIMAL CRUILTY</p></div>
        </div>
      </div>
    </div>
  );
}

export default HomeActivity;