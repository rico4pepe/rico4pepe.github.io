
import './App.css';
import {useState} from 'react'
import Select from 'react-select';

function App() {
let [bill, setBill] = useState("");
let [tip, setTip] = useState("");
let [people, setPeople] = useState("");


const options = [
  { value: 0.3, label: '(Outstanding Service (30 %))' },
  { value: 0.2, label: '(Good Service (20 %))' },
  { value: 0.1, label: '(Just Okay (10 %))' },
  { value: 0.05, label: '(Bad Service (5 %))' },
  { value: 0.00, label: '(No Tip (0 %))' },
];

const calculate = () => {
  const totalBill = ((parseInt(bill)  * parseFloat(tip.value)) + parseInt(bill)).toFixed(2)
  const tipAmount =  (parseInt(bill) *  parseFloat(tip.value)).toFixed(2)
  const individualBill = (totalBill / people).toFixed(2)
  const tipPerInd  =  (parseFloat(tip.value) / people).toFixed(2) 
  const result = {
    tb: totalBill,
    ta: tipAmount,
    ib: individualBill,
    tp: tipPerInd
  }
  return result;
}

const resetForm = () => {
  setBill("");
  setTip("");
  setPeople("");
}




console.log(calculate().tb, calculate().ta, calculate().ib);


  return (

    <div className = "container"> 
    <div className="center-app">
        <h1>Tip Calculator</h1>
        <form>
          <div className = "space_form_component">
          <label > Bill Amount:</label>
            <input type="number" placeholder = {0.00} className='myInputs'  value = {bill} onChange={e => setBill(e.target.value)} />
        </div>
        <div className = "space_form_component">
        <label> No of People:</label>
            <input type='number'  className='myInputs'  value = {people} onChange={e => setPeople(e.target.value)} />
        </div>
        <div className = "space_form_component">
        <label> Tip:</label>
            <Select placeholder = {0.00} options={options} className='myInputs added_space'  value = {tip} onChange={setTip} />
        </div>
        <br />
        <button type='button' onClick={calculate}> Calculate .....</button>

        <button type='button' onClick={resetForm}> Result .....</button>
        </form>

        <div className = "result">
          <div className='displayResult'>
            <div className='box blue_color'>
                Total Bill (Bill Inclusive) <br />
                {isNaN(calculate().tb) ? 'NGN 0.00' : 'NGN' + calculate().tb} 
                
            </div>

            <div className='box blue_color'>
                Tip Amount <br />
                {isNaN(calculate().ta ) ? 'NGN 0.00' : 'NGN' + calculate().ta } 
            
            </div>
          </div>

          <div className='displayResult'>
            <div className='box blue_color'>
            Tip per individual <br />
            {isNaN(calculate().tp ) ? 'NGN 0.00' : 'NGN' + calculate().tp } 
            </div>

            <div className='box red_color'>
               Individual Tip <br />
               {isNaN(calculate().ib ) ? 'NGN 0.00' :'NGN' + calculate().ib } 
               
            </div>
          </div>
        </div>
    </div>
    </div>
   
  );
}

export default App;
