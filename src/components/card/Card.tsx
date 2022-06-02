import React from 'react'
import './card.scss'
interface IProps {
children?:React.ReactNode;
class?:string;
}
export default function Card(props:IProps){
    return (<div className={'card '+props.class}>{props.children}</div>)
}