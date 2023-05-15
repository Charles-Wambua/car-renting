import "./book.css";
import { Link } from "react-router-dom";
export const BookRide = () => {
  return (
    <div className="bookContainer">
      <h5>
        Welcome to <span>our</span> booking website
      </h5>
      <div className="prompts">
        <div className="process">
          <h6>
            You will need to follow the simple steps below to complete <br />
            the booking process!
          </h6>
          <li>Search for the car you want to ride</li>
          <li>Compare it with other cars to ensure you choose the best</li>
          <li>Select the car you've decided on</li>
          <li>Click Reservve Now</li>
        </div>
        <div className="image">
          <img
            src="https://phenomenalvinyl.com/wp-content/uploads/2015/12/Nissan-GTR-Satin-Pearl-White-7.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="ourfleet">
        <h3>Find Your Drive</h3>
        <div className="noma">
        <div className="carsavailable">
          <div className="card">
            <img
              src="https://media.ed.edmunds-media.com/tesla/model-s/2021/oem/2021_tesla_model-s_sedan_plaid_fq_oem_1_1600.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title"><Link to="/rides?cartype=tesla">Tesla</Link></h5>
            </div>
          </div>
        </div>
        <div className="carsavailable">
          <div>
            
          </div>
          <div className="card">
            <img
              src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F06%2Fbrabus-900-rocket-edition-mercedes-amg-g63-g-wagon-tuned-custom-900hp-power-speed-0.jpg?w=960&cbr=1&q=90&fit=max"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 className="card-title"><Link to="/rides?cartype=mercedes">Mercedes</Link> </h5>
            </div>
          </div>
        </div>
        <div className="carsavailable">
          <div className="card">
            <img
              src="https://s.abcnews.com/images/Business/audi-q8-01-ht-jef-190206_hpMain_16x9_1600.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title"><Link to="/rides?cartype=audi">Audi</Link></h5>
            </div>
          </div>
          </div>
          
        </div>

      </div>
      <div className="here">
        <h2>Book here!</h2>

        <div className="vehicle">
          <div className="buttons">
            <button>Mercedes</button>
            <button>Ford Mustang</button>
            <button>Audi</button>
            <button>BMW</button>
            <button>Porsche 911</button>
            <button>Maserati</button>
          </div>
          <div className="image">
            <img
              src="https://www.stablevehiclecontracts.co.uk/uploads/2019/07/volkswagen-golf-r-colour-white.jpg"
              alt=""
            />
          </div>
          <div className="button">
            <table>
              <tr>
                <td>Mercedes</td>
                <td>GLC</td>
              </tr>
              <tr>
                <td>Audi</td>
                <td>A3</td>
              </tr>
              <tr>
                <td>BMW</td>
                <td>X5</td>
              </tr>
              <tr>
                <td>Porsche</td>
                <td>911</td>
              </tr>
              <tr>
                <td>Toyota</td>
                <td>Camry</td>
              </tr>
              <tr>
                <td>Honda</td>
                <td>Civic</td>
              </tr>
              <tr>
                <td>Mazda</td>
                <td>CX-5</td>
              </tr>
              <tr>
                <td>Ford</td>
                <td>Mustang</td>
              </tr>
            </table>
            <button type="">Reserve now</button>
          </div>
        </div>
      </div>
      <div className="footere">
        <h2>Enjoy your moments with your Ride!!</h2>
      </div>
    </div>
  );
};
