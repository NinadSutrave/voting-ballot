import React, { useState } from 'react'
import axios from 'axios'
import './VoteForm.css'

const VoteForm = () => {

  const [formDetails, setFormDetails] = useState({
    secretToken: "",
    president: "",
    vice: "",
    secretary: ""
})

const [checked, setChecked] = useState(new Array(8).fill(false))
  

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formDetails)
    axios.patch(process.env.REACT_APP_BACKEND_URL + 'admin/updateVote', formDetails)
    .then(res => {
      if(res.data === "Successful") {
        setFormDetails({
          secretToken: "",
          president: "",
          vice: "",
          secretary: ""
        })
        setChecked(new Array(8).fill(false))
        alert("Successfully Submitted")
      }
      else if(res.data === "Voted") {
        setFormDetails({
          secretToken: "",
          president: "",
          vice: "",
          secretary: ""
        })
        setChecked(new Array(8).fill(false))
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
    <h2 className="form-heading">Voting Ballot</h2>
    <form action="submit" className="voter-form" onSubmit={handleSubmit}>
      <div className="contents">

        <label for="fname">Secret Token <span className="mandatory">*</span></label><br/>
        <input 
          required="required" 
          type="text" 
          id="secretToken" 
          name="secretToken" 
          placeholder="Enter the Secret Token" 
          value={formDetails.secretToken}
          onChange={(e) => {
            let prev = {...formDetails}
            prev.secretToken = e.target.value
            setFormDetails(prev)
          }}
        /><br/><br/>

        <label>Contesting candidates for <strong>President</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="tiwari" name="president" value="Katyayani Tiwari" 
                  checked={checked[0]}
                   onChange={(e) => {
                    let prev = {...formDetails}
                    prev.president = "tiwari"
                    setFormDetails(prev)
                    prev = [...checked]
                    prev[0] = true 
                    prev[1] = false
                    setChecked(prev)
                  }}
            />
            <label for="html">Katyayani Tiwari</label><br/>
            <input required="required" type="radio" id="chenaram" name="president" value="Chenaram Kumawat" 
                  checked={checked[1]}
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.president = "chena"
                    setFormDetails(prev)
                    prev = [...checked]
                    prev[1] = true 
                    prev[0] = false
                    setChecked(prev)
                  }}
            />
            <label for="css">Chenaram Kumawat</label><br/><br/>


        <label>Contesting candidates for <strong>Vice President</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="tiwari" name="vicepresident" value="Katyayani Tiwari"
                  checked={checked[2]}
                   onChange={(e) => {
                    let prev = {...formDetails}
                    prev.vice = "tiwari"
                    setFormDetails(prev)
                    prev = [...checked]
                    prev[2] = true 
                    prev[3] = false
                    setChecked(prev)
                  }}
            />
            <label for="html">Katyayani Tiwari</label><br/>
            <input required="required" type="radio" id="chenaram" name="vicepresident" value="Chenaram Kumawat" 
                  checked={checked[3]}
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.vice = "chena"
                    setFormDetails(prev)
                    prev = [...checked]
                    prev[3] = true 
                    prev[2] = false
                    setChecked(prev)
                  }}
            />
            <label for="css">Chenaram Kumawat</label><br/><br/>


        <label>Contesting candidates for <strong>Secretary 1</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="chandan" name="secretary1" value="Chandan Kumar Yadav" 
                  checked={checked[4]}
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.secretary = "chandan"
                    setFormDetails(prev)
                    prev = [...checked]
                    prev[4] = true 
                    prev[5] = false
                    setChecked(prev)
                  }}
            />
            <label for="html">Chandan Kumar Yadav</label><br/>
            <input required="required" type="radio" id="vinit" name="secretary1" value="Vinit Kujur" 
                  checked={checked[5]}
                  onChange={(e) => {
                    let prev = {...formDetails}
                    prev.secretary = "vinit"
                    setFormDetails(prev)
                    prev = [...checked]
                    prev[5] = true 
                    prev[4] = false
                    setChecked(prev)
                  }}
            />
            <label for="css">Vinit Kujur</label><br/><br/>

        <label>Contesting candidates for <strong>Secretary 2</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="sonali" name="secretary2" value="Sonali" 
              checked={checked[6]}
              onChange={(e) => {
                let prev = [...checked]
                prev[6] = true
                setChecked(prev)
              }}
            />
            <label for="html">Sonali</label><br/><br/>

        <label>Contesting candidates for <strong>Treasurer</strong> <span className="mandatory">*</span></label><br/>
            <input required="required" type="radio" id="kallol" name="treasurer" value="Kallol Saha"
              checked={checked[7]}
              onChange={(e) => {
                let prev = [...checked]
                prev[7] = true
                setChecked(prev)
              }}
             />
            <label for="html">Kallol Saha</label><br/><br/>

      </div>
      <div className="submitButton">
        <input className="button-color" type="submit" value="Submit" />
      </div>
    </form>
    </div>
    </>

  )
}

export default VoteForm