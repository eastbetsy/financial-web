import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import creditcardimg from '../img/creditcards.jpeg';
import studentloansimg from '../img/studentloans.jpeg';
import emergencyfundimg from '../img/emergencyfund.jpg';
import houseimg from '../img/house.jpeg';
import orderimg from '../img/order.jpeg';
import vacationimg from '../img/vacation.jpeg';

function Goals() {
  return (
    <div className="d-flex text-center justify-content-center align-items-center min-vh-100">
      <center>
      <div>
        <h1 className="text-center">Choose A Goal</h1>
        <figure className="text-center">
          <blockquote className="blockquote">
            <p>“A goal without a plan is just a wish.”</p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Antoine de Saint-Exupéry
          </figcaption>
        </figure>
      
        <div className="row row-cols-1 row-cols-md-1">
          {/* Goal 1 */}
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Pay off Credit Cards</h5>
                <img src={creditcardimg} alt="" className="card-img-top" />
                <p className="card-text">
                  Connect your credit cards to analyze your spending and autogenerate a budget.
                </p>
                <button type="button" className="btn btn-outline-dark">
                  Choose this goal
                </button>
              </div>
            </div>
          </div>

          {/* Goal 2 */}
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Pay off Student Loans</h5>
                <img src={studentloansimg} alt="" className="card-img-top" />
                <p className="card-text">
                  Manually enter and keep track of your student loans plus use the built-in budget calculator all in one place.
                </p>
                <button type="button" className="btn btn-outline-dark">
                  Choose this goal
                </button>
              </div>
            </div>
          </div>

          {/* Goal 4 */}
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Emergency Savings</h5>
                <img src={emergencyfundimg} alt="" className="card-img-top" />
                <p className="card-text">
                  Use savings rules with a focus on emergencies while having enough for necessities.
                </p>
                <button type="button" className="btn btn-outline-dark">
                  Choose this goal
                </button>
              </div>
            </div>
          </div>

          {/* Goal 5 */}
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Buy/Rent A House</h5>
                <img src={houseimg} alt="" className="card-img-top" />
                <p className="card-text">
                  Savings plan for a home.
                </p>
                <button type="button" className="btn btn-outline-dark">
                  Choose this goal
                </button>
              </div>
            </div>
          </div>

          {/* Goal 6 */}
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Big Purchase</h5>
                <img src={orderimg} alt="" className="card-img-top" />
                <p className="card-text">
                  Calculate savings and budget to buy something big. ($100+)
                </p>
                <button type="button" className="btn btn-outline-dark">
                  Choose this goal
                </button>
              </div>
            </div>
          </div>

          {/* Goal 7 */}
          <div className="col">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Vacation</h5>
                <img src={vacationimg} alt="" className="card-img-top" />
                <p className="card-text">
                  Savings rules and budget for a vacation.
                </p>
                <button type="button" className="btn btn-outline-dark">
                  Choose this goal
                </button>
              </div>
            </div>
          </div>
        </div> 
        {/* progress bar */}
        <div className=".bottom-div" >
          <progress value={1} max={3}/>
          <p>1</p>
          <a href="pages/rules.js"><button type="button" class="btn btn-info">Next</button></a>
        </div>
      </div>
      </center>
      </div>
  );
}

export default Goals;