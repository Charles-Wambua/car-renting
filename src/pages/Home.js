import "./Home.css";
import "../subpages/book.css";
import { Link } from "react-router-dom";
export const Home = () => {
  const bookRide = () => {};
  return (
    <div className="homecontainer">
      <h1>TRIP<span>WHEELS</span> </h1>
      <h3 className="hostlink">
        <Link to="/car-owners">Become a host</Link>
      </h3>
      <div class="dropdown">
        <div class="dropbtn">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div class="dropdown-content">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/learn-more">Support</a>
        </div>
      </div>

      <div className="homepage">
        <div>
          <h4>Plan your trip now</h4> <br />
          <h2>
            SAVE <span>BIG</span> WITH OUR CAR RENTAL
          </h2>{" "}
          <h5>
            Rent the car of your dreams. Unbeatable prizes, unlimited miles,
            flexible pick-up options and much more
          </h5>
          <br />
          <button>
            <Link to="/book-ride">Book Ride</Link>
          </button>
          <button>
            <Link to="/learn-more">Learn More</Link>
          </button>
        </div>

        <div className="image">
          <img
            src="https://www.mansory.com/sites/default/files/styles/1170_x_full_box_image/public/2022-12/Urus-GreyMatt-52edit.jpg?itok=2UAF6P-6"
            alt=""
          />
        </div>
      </div>

      <div className="bookCar">
        <h4>Book a car</h4>
        <div className="carbook">
          <div>
            <label for="type">Select car type</label>
            <select name="car-type" id="car-type">
              <option value="mercedes">Mercedes</option>
              <option value="golf-r">Golf R</option>
              <option value="toyota-prado">Toyota Prado</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="ford-mustang">Ford Mustang</option>
              <option value="honda-civic">Honda Civic</option>
              <option value="jeep-wrangler">Jeep Wrangler</option>
              <option value="porsche-911">Porsche 911</option>
            </select>
            <label for="date">Pick-Up date:</label>
            <input type="date" id="date" name="date" />
          </div>
          <div>
            <label for="pickup">Pick-up</label>
            <select>
              <option value="mks">Machakos</option>
              <option value="Nairobi">Nairobi, CBD</option>
              <option value="Kiserian">Kiserian</option>
              <option value="Wendani">Kahawa Wendani</option>
              <option value="Limuru">Limuru</option>
              <option value="La">LA, Lang'ata</option>
            </select>
            <label for="date">Drop-of Date</label>
            <input type="date" id="date" name="date" />
          </div>
          <div>
            <label for="pickup">Drop-of</label>
            <select>
              <option value="mks">Machakos</option>
              <option value="Nairobi">Nairobi, CBD</option>
              <option value="Kiserian">Kiserian</option>
              <option value="Wendani">Kahawa Wendani</option>
              <option value="Limuru">Limuru</option>
              <option value="La">LA, Lang'ata</option>
            </select>
            <button type="">Search</button>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <h6>Plan your trip now!</h6>
        <h3>Quick & easy car rental</h3>
        <div className="head">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#ff8c00"
              class="bi bi-check2-circle"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
            </svg>
            <h5>Select Car</h5>
            <h6>
              We offer big range of vehicles for all you driving needs. We have
              the perfect car to meet your needs
            </h6>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="#ff8c00"
              class="bi bi-person-rolodex"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              <path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
            </svg>
            <h5>Contact Operator</h5>
            <h6>
              Our knowledgable and friendly operators are always ready to help
              with any questions and concerns
            </h6>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill=" #ff8c00"
              class="bi bi-ev-front"
              viewBox="0 0 16 16"
            >
              <path d="M9.354 4.243a.188.188 0 0 0-.085-.218.186.186 0 0 0-.23.034L6.051 7.246a.188.188 0 0 0 .136.316h1.241l-.673 2.195a.188.188 0 0 0 .085.218c.075.043.17.03.23-.034l2.88-3.187a.188.188 0 0 0-.137-.316H8.572l.782-2.195Z" />
              <path d="M4.819 2A2.5 2.5 0 0 0 2.52 3.515l-.792 1.848a.807.807 0 0 1-.38.404c-.5.25-.855.715-.965 1.262L.05 8.708a2.5 2.5 0 0 0-.049.49v.413c0 .814.39 1.543 1 1.997V13.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.338c1.292.048 2.745.088 4 .088s2.708-.04 4-.088V13.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1.892c.61-.454 1-1.183 1-1.997v-.413c0-.165-.016-.329-.049-.49l-.335-1.68a1.807 1.807 0 0 0-.964-1.261.807.807 0 0 1-.381-.404l-.792-1.848A2.5 2.5 0 0 0 11.181 2H4.82ZM3.44 3.91A1.5 1.5 0 0 1 4.82 3h6.362a1.5 1.5 0 0 1 1.379.91l.792 1.847a1.8 1.8 0 0 0 .853.904c.222.112.381.32.43.564l.336 1.679c.02.097.029.195.029.294v.413a1.48 1.48 0 0 1-1.408 1.484c-1.555.07-3.786.155-5.592.155-1.806 0-4.037-.084-5.592-.155A1.479 1.479 0 0 1 1 9.611v-.413c0-.099.01-.197.03-.294l.335-1.68a.807.807 0 0 1 .43-.563c.383-.19.685-.511.853-.904l.792-1.848Z" />
            </svg>
            <h5>Let's Drive</h5>
            <h6>
              Whether you are hitting the open road, we've got you covered with
              our wide rnge of cars
            </h6>
          </div>
        </div>
      </div>
      <div className="vehicleModels">
        <br />
        <h6>Vehicle Models</h6>
        <h3>Our Rental fleet</h3>
        <h6>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </h6>
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
                  <h5 class="card-title">
                    <Link to="/rides?cartype=tesla">Tesla</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="carsavailable">
              <div></div>
              <div className="card">
                <img
                  src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F06%2Fbrabus-900-rocket-edition-mercedes-amg-g63-g-wagon-tuned-custom-900hp-power-speed-0.jpg?w=960&cbr=1&q=90&fit=max"
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 className="card-title">
                    <Link to="/rides?cartype=mercedes">Mercedes</Link>{" "}
                  </h5>
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
                  <h5 class="card-title">
                    <Link to="/rides?cartype=audi">Audi</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="save-big">
        <div>
          <div className="save">
            <h2>Save big with our cheap car rental!</h2>
            <h5>
              Top Airports. Local suppliers . <span>24/7</span> customer support
            </h5>
          </div>
          <div className="image">
            <img
              src="https://i.insider.com/5eac3e4248d92c0bf849a878?width=1200&format=jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="ChooseUs">
        <div>
          <h6>Why choose Us</h6>
          <h5>Best valued for you will ever find</h5>
          <h6>
            Discover the best deals with our unbeatable offers. We havve decided
            to be providing you with the best value for money, so you can enjoy
            top-quality services and products without breaking the bank. Our
            deals are designed to give you the ultimate renting experience, so
            don't miss out this chance to save big!
          </h6>
          <button>
            <Link to="/find-details">Find Details</Link>
          </button>
        </div>
        <div>
          <h5>Cross Country Drive</h5>
          <h6>
            Take your driving experience to the neext level with our top-notch
            vehicles for your cross-country adventures
          </h6>
          <h5>All inclusive pricing</h5>
          <h6>
            Get everything you need in your conviniennce. Transparent pricing in
            with all our inclusive pricing policy{" "}
          </h6>
          <h5>No hidden Charges</h5>
          <h6>
            Enjoy piece of mind with no hidden charges policy. We believe in
            transparency and honest pricing
          </h6>
        </div>
      </div>
      <div className="testimonials">
        <h6>Reviewed by people</h6>
        <h5>Clients' Testimonials</h5>
        <h6>
          Discover the positive impact we've made on our clients by reading
          through teir testimonials. Our clients have experienced the service
          and seen te good results, and they are eager to share the positive
          results with you
        </h6>

        <div className="people">
          <div>
            <h6>
              {" "}
              we rented a car from this website and had an amazing experience.
              The bookking was easy and rental rates very affordable!
            </h6>
            @<span>mcj</span>
          </div>
          <div>
            <h6>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website"
            </h6>{" "}
            @<span>JkRowlings</span>
          </div>
        </div>
      </div>
      <div className="Faqs">
        <h6>FAQ</h6>
        <h5>Frequently asked questions</h5>
        <h6>
          Freqentl asked questions about car Rental booking process on our
          platform
        </h6>
        <div className="faq">
          <div className="image">
            <img
              src="https://www.telegraph.co.uk/content/dam/cars/2022/09/07/TELEMMGLPICT000308270066_trans_NvBQzQNjv4BqDhV2K8uQsCbKQWf5axWl7oBj75DBKCPNxMKpPUzduMI.jpeg"
              alt=""
            />
          </div>
          <div>
            <h6>What is special about comparing car deals?</h6>
            <h6>How do I find the car rental deals?</h6>
            <h6>How do I find such low car rental prices?</h6>
          </div>
        </div>
      </div>
      <div className="getApp">
        <div className="playstore">
          <h5>Download our App to get the most out of it</h5>
          <h6>
            Trhown shy denot 10 ladies ask so, or by his going o hink to get the
            music, Get ou app from the google playstore , click below
          </h6>
        </div>
        <div className="image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaDEbrjDLvViwrvCPGsv-5CFZ7-TXlMzKKDw&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <div className="footer">
        <div className="part">
          <h5>
            Car <span>Rental</span>
          </h5>
          <h6>
            We offer a big range of vehicles for all our driving needs.
            <br /> We have the perfect car to meet your needs
          </h6>
          <span>+254115652533</span>
          <br />
          <span>cm329006@gmail.com</span>
        </div>
        <div className="part">
          {" "}
          <h5>Company</h5>
          <h6>Nairobi-Ke</h6>
          <h6>Careers</h6>
          <h6>Mobile</h6>
          <h6>Blog</h6>
          <h6>How we work</h6>
        </div>
        <div className="part">
          <h5>Working hours</h5>
          <h6>mon-fri 7-6pm</h6>
          <h6>sat: 6-12pm</h6>
          <h6>sun: closed</h6>
        </div>
        <div className="part">
          <h5>Subscription</h5>
          <h6>
            Subscribe your email address for latest updaes and information
          </h6>
          <input type="email" name="" placeholder="Enter your email" /> <br />
          <button type="">Subscribe</button>
        </div>
      </div>
    </div>
  );
};
