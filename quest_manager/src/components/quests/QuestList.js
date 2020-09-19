import React from 'react'
import QuestSummary from './QuestSummary'

const QuestList = ({quests, editMode}) => {

    return(
        <div className="project-list section">
           {quests && quests.map(quest =>{
               return(
                   <div key={quest.id}>
                    <QuestSummary quest={quest} editMode={editMode} />
                   </div>
               )
           })}
        </div>
        
    )
}

export default QuestList