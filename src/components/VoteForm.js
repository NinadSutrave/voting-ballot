import React, { useState } from 'react'
import './VoteForm.css'

const VoteForm = () => {

  const [formDetails, setFormDetails] = useState({
    pehchaanId: "",
    secretToken: "",
    president: "",
    vicePresident: "",
})
  

  const handleSubmit = (e) => {
    e.preventDefault()
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
                    console.log(e)
                  }}
            />
            <label for="html">Katyayani Tiwari</label><br/>
            <input required="required" type="radio" id="chenaram" name="president" value="Chenaram Kumawat" />
            <label for="css">Chenaram Kumawat</label><br/><br/>


        <label>Contesting candidates for <strong>Vice President</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="tiwari" name="vicepresident" value="Katyayani Tiwari" />
            <label for="html">Katyayani Tiwari</label><br/>
            <input required="required" type="radio" id="chenaram" name="vicepresident" value="Chenaram Kumawat" />
            <label for="css">Chenaram Kumawat</label><br/><br/>


        <label>Contesting candidates for <strong>Secretary 1</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="chandan" name="secretary1" value="Chandan Kumar Yadav" />
            <label for="html">Chandan Kumar Yadav</label><br/>
            <input required="required" type="radio" id="vinit" name="secretary1" value="Vinit Kujur" />
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