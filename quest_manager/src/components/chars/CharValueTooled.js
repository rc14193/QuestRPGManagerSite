import React, { Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {connect} from 'react-redux'
import {removeCharInf} from '../../store/actions/removeCharInf'

class CharValueTooled extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
  }

  handleItemDel = (e) =>{
    this.props.removeCharInf(this.props)
  }

  handleAPMarks = (descString) => {

    return descString.replace(/(^(\d+) |(\d+)(>))/, '<span class="flag-marker">$2$3</span>')
  }

  render(){

    var descPresent = (this.props.item.Description) ? "tooltipped" : ""
    let description = this.handleAPMarks(this.props.item.Description)
    if(this.props.editMode){
      return(
        <td className="attributeVals row center-align">
          <div style={{width:"100%"}}>
          <div className={descPresent+" center-align grey darken-3 itemCards spanVals"}  data-position="right" data-tooltip={description}>{this.props.item.Name}</div>
          <i style={{color:'red'}} className=" pointed tiny material-icons col valign-wrapper center-align" onClick={this.handleItemDel}>cancel</i>
          </div>
        </td>
    )
    }
    else if(!this.props.editMode){
      return(
        <td className="attributeVals row withoutShadow">
          <div style={{width:"100%"}}>
          <div className={descPresent+" center-align grey darken-3 itemCards spanVals"}  data-position="right" data-tooltip={description}>{this.props.item.Name}</div>
          </div>
        </td>
      )
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      removeCharInf: (state) => dispatch(removeCharInf(state))
  }
}

export default connect(null, mapDispatchToProps)(CharValueTooled);


//