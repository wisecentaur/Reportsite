import console from "console"
import React, { useEffect, useState } from"react"
import { GetAllLettersByReciever } from "../../axios/letters"
import Card from "../card/Card"
import MiniLetter from "../letter/MiniLetter"
import "./email.scss"

export default function Email(){
  const [letters, setletters] = useState<ILetter[]>([])
  const [currentletterID, setcurrentletter] = useState<number>(0) 
  const currentletter=letters[currentletterID]
  useEffect(()=>{
    const func = async ()=>{
      setletters(await GetAllLettersByReciever(0))
    } 
    void func()
  },[])
   return(<div className = "Email">
     <Card class = 'EmailLetters'>
       {
         letters.map((letter, ID )=>(
           <div className= {`Click `} onClick= {()=>{setcurrentletter(ID)}}>
          <MiniLetter isselected={ID===currentletterID} nameAndSurname={'letter'} topic={letter.topic}/>
          </div>
         ))
       }
     </Card>
     <Card class = "EmailContent">
       {currentletter && <div>
         <div className = "EmailContentHeader">
           <div className = "EmailContentTopic">{currentletter.topic}</div> 
           <div>{/*currentletter.datesent.toDateString()*/}</div>        
          </div>
         <div>
           {currentletter.content} 
          </div>
       </div>}
     </Card>
   </div>)
}

