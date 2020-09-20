import React from 'react'
import CharDetails from './CharDetails'
import CharInfTabs from './CharInfTabs'
import { connect } from 'react-redux'
import { compose } from 'redux'

class CharsList extends React.Component{



render(){

    
    var characters = this.props.characters.characters
    //console.log(this.props)
    return(
        <div className="project-list section row">

            {characters && characters.map(chars =>{
                //console.log(chars.role)
                var boxStyle=''
                switch(chars.role){
                    case 'Fighter':
                        boxStyle='fighterShadow'
                    break;
                    case 'Invoker':
                        boxStyle='invokerShadow'
                    break;
                    case 'Ranger':
                        boxStyle='rangerShadow'
                    break;
                    case 'Naturalist':
                        boxStyle='naturalistShadow'
                    break;
                    case 'Doctor':
                        boxStyle='doctorShadow'
                    break;
                    case 'Spy':
                        boxStyle='spyShadow'
                    break;
                    case 'Magician':
                        boxStyle='magicianShadow'
                    break;
                    case 'Wizard':
                        boxStyle='wizardShadow'
                    break;
                    default:
                        boxStyle=''
                }
                //console.log('the box style is')
                //console.log(boxStyle)
                    return(

                            <div key={chars.id} className={boxStyle+" col card grey darken-4 charCards charCol"}>
                                <div>
                                    <CharDetails char={chars} quest_id={this.props.id} editMode={this.props.editMode}/>
                                    <CharInfTabs char={chars} editMode={this.props.editMode}/>
                                </div>
                            </div>
                    )
                })}

        </div>
        
    )
}

}

const mapStateToProps = (state) => {
    return{
        characters: state.firestore.ordered,
        auth: state.firebase.auth
    }
}

/*           var boxStyle = ''
    switch(this.props) {
        case '':
            console.log(this.props)
            break;
        default:
            console.log('no match')
            console.log(this.props)
            break;

    }      */

export default compose(
    connect(mapStateToProps),
)(CharsList)
