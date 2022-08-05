import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './Dashboard.css'

const Dashboard = () => {

  const [list, setList] = useState()
  const [checked, setChecked] = useState()
  const [time, setTime] = useState()
  const [show, setShow] = useState(false)
  const [results, setResults] = useState({
    president: {
      tiwari: 0,
      chenaram: 0
    }, 
    vicePresident: {
      tiwari: 0,
      chenaram: 0
    }, 
    secretary1: {
      chandan: 0,
      vinit: 0
    }
  })

  const [disabled, setDisabled] = useState(false)

  useEffect(() => {

    axios.get('https://voting-ballot.herokuapp.com/admin/viewVoters')
    .then(res => setList(res.data))
    .catch(err => console.log(err))

  }, [])

  const debounceFunc = (func, delay) => {
    let timer;
     return function(...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay)
      }
 }

  const handleChange = (e) => {
    
    axios.get('https://voting-ballot.herokuapp.com/admin/viewVoters?searchItem='+e.target.value)
    .then(res => setList(res.data))
    .catch(err => console.log(err))

  }

  const optimisedSearchHandler = debounceFunc(handleChange, 500)

  const handleCheck = () => {
    setChecked(!checked)
  }

  const generateToken = (voter) => {

    axios.post('https://voting-ballot.herokuapp.com/admin/createPassword', {
      name: voter.name,
      pehchaanId: voter.pehchaanId,
      emailId: voter.emailId
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }

  const showResults = () => {

      setDisabled(true)

      const date = new Date()
      const time = date.toTimeString()

      setShow(true)
      setTime(time.substr(0, time.indexOf(' ')))

      axios.get('https://voting-ballot.herokuapp.com/admin/viewResults')
      .then(res => {
        setResults({
          president: {
            tiwari: res.data[0].tiwariPresident,
            chenaram: res.data[0].chenaPresident
          }, 
          vicePresident: {
            tiwari: res.data[0].tiwariVicePresident,
            chenaram: res.data[0].chenaVicePresident
          }, 
          secretary1: {
            chandan: res.data[0].chandan,
            vinit: res.data[0].vinit
          }
        })
      })
      .catch(err => console.log(err))

      setTimeout(() => setDisabled(false), 300000)

  }

  return (
    <div className="dashboard">

      <Button variant="primary" disabled={disabled} onClick={showResults}>View Results</Button>
      {
        (show)?
      <div className="results">
        <p><h4>Results as of now ({time}): </h4></p>
      <p>
        <h5>President</h5>
        <ul>
          <li>Katyayani Tiwari : {results.president.tiwari} </li>
          <li>Chenaram Kumawat : {results.president.chenaram} </li>
        </ul>
      </p> 
      <p>
        <h5>Vice President</h5>
        <ul>
          <li>Katyayani Tiwari : {results.vicePresident.tiwari} </li>
          <li>Chenaram Kumawat : {results.vicePresident.chenaram} </li>
        </ul>
      </p> 
      <p>
        <h5>Secretary 1</h5>
        <ul>
          <li>Chandan Kumar Yadav : {results.secretary1.chandan} </li>
          <li>Vinit Kujur : {results.secretary1.vinit} </li>
        </ul>
      </p> 
      </div>
      : null
      }

    <div className="filter">
        <input id="searchbar" type="text" placeholder="Search a name" onChange={optimisedSearchHandler}/> 
        <label>
        <input className="checkbox" type="checkbox" checked={checked} onChange={handleCheck}/>
          Not Voted
        </label>
        
    </div>

      {
        (list)?
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th>Name</th>
          <th>Send Token</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          list.map((voter, index) => {
            if(checked) {
              if(!voter.voted) {
                return <tr>
                  <td>{index+1}</td>
                  <td>{voter.name}</td>
                  <td><Button variant="primary" onClick={(voter) => generateToken(voter)}>Send Token</Button></td>
                  <td><strong>{(voter.voted)?"Voted":"-"}</strong></td>
                </tr>
              }
            }
            
              return <tr>
                <td>{index+1}</td>
                <td>{voter.name}</td>
                <td><Button variant="primary" onClick={(voter) => generateToken(voter)}>Send Token</Button></td>
                <td><strong>{(voter.voted)?"Voted":"-"}</strong></td>
              </tr>
            
        })
        }
      </tbody>
    </Table>
    : null
    }
    </div>
  )
}

export default Dashboard