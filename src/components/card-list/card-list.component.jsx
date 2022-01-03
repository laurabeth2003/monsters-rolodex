import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component'
//props is the parameters - declared through <CardList PROPS></Cardlist> or <CardList>PROPS.children</CardList> 
//exporting a function to our main App file.
export const CardList = (props) => (
    
    <div className='card-list'>{
        props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)
    }</div>
)