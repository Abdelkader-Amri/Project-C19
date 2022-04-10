import React, {Component} from "react";


export default class Converter extends Component  {

  constructor(props){

    super(props);

     this.state = {
      currencies: ["USD", "TND", "GBP", "CHF", "EUR"],
      base: "USD",
      amount: "",
      convertTo: "",
      result: "",
      date: "",
  };
      this.handleSelect = this.handleSelect.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.calculate = this.calculate.bind(this);
      this.handleSwap = this.handleSwap.bind(this);

}


  handleSelect = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = (e) => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null,
      },
      this.calculate
    );
  };
  calculate = () => {
    function exchange(amount,base,result){
      if(this.base == this.result) {
          return amount;
      }
      else{
          if(this.base == "USD"){
              if(resultL=="EUR"){
                return amount*.85;
              }
              else if(this.result=="TND"){
                return amount*3.25;
              }
              else if(this.result=="GBP"){
                return amount*.77;
              }
              else if(this.result=="CHF"){
                return amount*.94;
              }
          }
        }
        
        
  const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.coingecko.com/api/v3/exchange_rates?base=${this.state.base}`)
     
        .then((res) => res.json())
        .then((data) => {
          console.log(data.body)
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          
          this.setState({
            result,
            date,
          });
        });
    }
  

  handleSwap = (e) => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null,
      },
      this.calculate
    );
  };

  render(App) {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="card-body">
              <h5>
                 Money-Vert
              </h5>
              <h2>
                {amount === "" ? "" : result === "" ? "Calculating" : result}
                {""}
                {convertTo}
              </h2>
              <p>{amount === "" ? "Amount Here" : date === null ? "" : date}</p>
              <div className="row">
                <div className="column">
                  <form className="form">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="input"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="Select"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                  <form className="form">
                    <input
                      disabled={true}
                      value={
                        amount === "0"
                          ? ""
                          : result === null
                          ? "Calculating..."
                          : result
                      }
                      className="input"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form"
                    >
                      {currencies.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>
                <div className="column">
                  <h1 onClick={this.handleSwap} className="swap">
                </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


