import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Navbar from './Navbar';
import Contact from './Contact';

function App() {

  const [receiver, setReceiver] = useState('')
  const [amount, setAmount] = useState('')
  const [validSelect, setValidSelect] = useState(true)
  const [validAmount, setValidAmount] = useState(true)
  const [giverName, setGiverName] = useState('')
  const [people, setPeople] = useState(['Stephen','Marvin','Casper'])

  const submit = () => {
    if (receiver !== '' && isNumeric(amount) && amount > 0) {
      let thankyou = "Thank you"
      if (giverName === '') {
        thankyou = thankyou.concat('!')
      } else {
        thankyou = thankyou.concat(` ${giverName}!`)
      }
      let url = `https://venmo.com/givernorthwestern...?txn=pay&note=For ${receiver}. ${thankyou} – Giver&amount=${amount}`

      // https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react
      const newWindow = window.open(url, "_blank", 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
      alert('Submitted!')
      // console.log('submit')
    } else if (receiver === '') {
      setValidSelect(false)
      alert('Please select a receiver.')
    } else {
      setValidAmount(false)
      alert('Enter a valid amount')
    }
  }

  function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  return (
    <div className="App">
      <Navbar />
      <body className="form">
        <div className="give-title">
          Give today
          <div className="give-body">
            Submitting this form will redirect you to Venmo.
            <br></br>
          100% of money donated will be liquidated and given to the individual in need.
          </div>
        </div>
        <FormControl style={{minWidth: 150}} error={!validSelect}>
          <InputLabel id="demo-simple-select-standard-label">Receiver</InputLabel>
          <Select
            autoFocus
            value={receiver}
            label="Receiver"
            onChange={(e) => {
              if (e.target.value === '') {
                setValidSelect(false)
                setReceiver(e.target.value)
              }
              else {
                setValidSelect(true)
                setReceiver(e.target.value)
              }
            }}
          >
            <MenuItem value="">None</MenuItem>
            {people.map((p, i) => {
              return (<MenuItem value={p} key={i}>{p}</MenuItem>)
            })}
          </Select>
        </FormControl>
        <TextField 
          label="Your name (optional)"
          name="name"
          onChange={(e) => setGiverName(e.target.value)}
        />
        <TextField 
          label="Amount"
          name="amount"
          onChange={(e) => {
            if (isNumeric(e.target.value)) {
              setValidAmount(true)
              setAmount(e.target.value)
            } else {
              setAmount(e.target.value)
              setValidAmount(false)
            }
          }}
          error={!validAmount}
        />
        <Button size='large' onClick={() => submit()}>
          Submit
        </Button>
      </body>
      <Contact />
    </div>
  );
}

export default App;