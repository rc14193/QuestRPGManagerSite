import React from 'react'

const RollingDiceInfo = ({handleClick}) => {
    const triumph = "This is an exciting moment. You automatically succeed at what you were trying to do, and you may even find added fortune. If you’re dealing damage, double it."
    const success = "You accomplish what you were trying to do without any compromises. If you're dealing damage, you deal the standard amount."
    const toughChoice = " You succeed in your action, but there's a cost. The Guide will give you a choice between two setbacks."
    const failure = " You fail your intended action and face a setback of the Guide's choice. You might lose equipment, take damage from an enemy counterattack, or face some other misfortune."
    const catastrophe = "Oh no. You automatically fail, and you may suffer a severe setback."
    return(
        <div className="row rollRowStyle">
            <div className="switch right editSwitch">
                <label className="editSwitch">
                Edit Mode
                <input type="checkbox"></input>
                <span className="lever" onClick={handleClick}></span>
                </label>
            </div> 
            <div className="col rollItemStyle left">
                <ul>
                    <li className="col">Rolling the Dice:</li>
                    <li className="col card grey darken-4 withoutShadow tooltipped diceInfo" data-tooltip={triumph}>20 Triumph</li>
                    <li className="col card grey darken-4 withoutShadow tooltipped diceInfo" data-tooltip={success}>11-19 Success</li>
                    <li className="col card grey darken-4 withoutShadow tooltipped diceInfo" data-tooltip={toughChoice}>6-10 Tough Choice</li>
                    <li className="col card grey darken-4 withoutShadow tooltipped diceInfo" data-tooltip={failure}>2-5 Failure</li>
                    <li className="col card grey darken-4 withoutShadow tooltipped diceInfo" data-tooltip={catastrophe}>1 Catastrophe</li>
                    <li className="col offset-l2">
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default RollingDiceInfo