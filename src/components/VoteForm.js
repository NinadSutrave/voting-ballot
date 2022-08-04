import React from 'react'
import './VoteForm.css'

const VoteForm = () => {
  return (
    <>
    <h4 className="tagline">May the deserving candidates win! 🎉</h4> 
  <div className="form-wrapper">
    <h2 className="heading">Voting Ballot</h2>
    <form action="submit" className="voter-form">
      <div className="contents">

        <label for="lname">Pehchaan ID <span className="mandatory">*</span></label><br/>
        <input required="required" type="text" id="pehchaanID" name="pehchaanID" placeholder="Enter your Pehchaan ID" /><br/><br/>

        <label for="fname">Secret Token <span className="mandatory">*</span></label><br/>
        <input required="required" type="text" id="secretToken" name="secretToken" placeholder="Enter the Secret Token" /><br/><br/>

        <label>Contesting candidates for <strong>President</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="tiwari" name="president" value="Katyayani Tiwari" />
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
            <input required="required" type="radio" id="chandan" name="secretary1" value="Sonali" />
            <label for="html">Sonali</label><br/><br/>

        <label>Contesting candidates for <strong>Treasurer</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="chandan" name="secretary1" value="Kallol Saha" />
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