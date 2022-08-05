import React, { useState } from 'react'
import axios from 'axios'
import './VoteForm.css'

const VoteForm = () => {

  const [formDetails, setFormDetails] = useState({
    pehchaanId: "",
    secretToken: "",
    president: "",
    vice: "",
    secretary: ""
})
  

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch('https://voting-ballot.herokuapp.com/admin/updateVote', formDetails)
    .then(res => {
      if(res.data === "Successful") {
        setFormDetails({
          pehchaanId: "",
          secretToken: "",
          president: "",
          vice: "",
          secretary: ""
        })
        alert("Successfully Submitted")
      }
      else if(res.data === "Voted") {
        setFormDetails({
          pehchaanId: "",
          secretToken: "",
          president: "",
          vice: "",
          secretary: ""
        })
        alert("You can only vote once!")
      }
      else {
        alert("Invalid credentials")
      }
    })
    .catch(err => {
      alert("Something went wrong")
    })

  }

  return (
    <>
    <h4 className="tagline">May the deserving candidates win! 🎉</h4> 
  <div className="form-wrapper">
    <h2 className="heading">Voting Ballot</h2>
    <form action="submit" className="voter-form" onSubmit={handleSubmit}>
      <div className="contents">

        <label for="lname">Pehchaan ID <span className="mandatory">*</span></label><br/>
        <input 
          required="required" 
          type="text" 
          id="pehchaanID" 
          name="pehchaanID" 
          placeholder="Enter your Pehchaan ID" 
          onChange={(e) => {
            let prev = {...formDetails}
            prev.pehchaanId = e.target.value
            setFormDetails(prev)
          }}
        /><br/><br/>

        <label for="fname">Secret Token <span className="mandatory">*</span></label><br/>
        <input 
          required="required" 
          type="text" 
          id="secretToken" 
          name="secretToken" 
          placeholder="Enter the Secret Token" 
          onChange={(e) => {
            let prev = {...formDetails}
            prev.secretToken = e.target.value
            setFormDetails(prev)
          }}
        /><br/><br/>

        <label>Contesting candidates for <strong>President</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="tiwari" name="president" value="Katyayani Tiwari" 
                   onChange={(e) => {
                    let prev = {...formDetails}
                    prev.president = "tiwari"
                    setFormDetails(prev)
                  }}
            />
            <label for="html">Katyayani Tiwari</label><br/>
            <input required="required" type="radio" id="chenaram" name="president" value="Chenaram Kumawat" 
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.president = "chena"
                    setFormDetails(prev)
                  }}
            />
            <label for="css">Chenaram Kumawat</label><br/><br/>


        <label>Contesting candidates for <strong>Vice President</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="tiwari" name="vicepresident" value="Katyayani Tiwari"
                   onChange={(e) => {
                    let prev = {...formDetails}
                    prev.vice = "tiwari"
                    setFormDetails(prev)
                  }}
            />
            <label for="html">Katyayani Tiwari</label><br/>
            <input required="required" type="radio" id="chenaram" name="vicepresident" value="Chenaram Kumawat" 
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.vice = "chena"
                    setFormDetails(prev)
                  }}
            />
            <label for="css">Chenaram Kumawat</label><br/><br/>


        <label>Contesting candidates for <strong>Secretary 1</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="chandan" name="secretary1" value="Chandan Kumar Yadav" 
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.secretary = "chandan"
                    setFormDetails(prev)
                  }}
            />
            <label for="html">Chandan Kumar Yadav</label><br/>
            <input required="required" type="radio" id="vinit" name="secretary1" value="Vinit Kujur" 
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.secretary = "vinit"
                    setFormDetails(prev)
                  }}
            />
            <label for="css">Vinit Kujur</label><br/><br/>

        <label>Contesting candidates for <strong>Secretary 2</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="sonali" name="secretary2" value="Sonali" />
            <label for="html">Sonali</label><br/><br/>

        <label>Contesting candidates for <strong>Treasurer</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="kallol" name="treasurer" value="Kallol Saha" />
            <label for="html">Kallol Saha</label><br/><br/>

      </div>
      <div className="submitButton">
        <input type="submit" value="Submit" />
      </div>
    </form>
    </div>
    </>

  )
}

export default VoteForm