import * as react from 'react'
import React from "react"
import './Admin.scss'
import Card from '../card/Card'
interface IProps {

}
export default function Admin(props:IProps){
    return (<div className='adminpage'>
        <Card class='adminpage-categories'></Card>
        <Card class='adminpage-content'></Card>
    </div>)
}


