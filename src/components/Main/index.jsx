import React, {Component} from 'react'
import moment from 'moment'
import MessageList from '../MessageList'

import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component{
  constructor(){
      super()
      this.state={
        openText:false,
        messages:[{
          text:'Aprendiendo React',
          picture:'https://avatars2.githubusercontent.com/u/10110322?v=3&u=57f5fc4b049905cfe691782df19aba2708458fbd&s=400',
          displayName:'Henry Mendoza Puerta',
          username:'hamp',
          date:Date.now()-180000

        },
        {
          text:'Este es un nuevo mensaje',
          picture:'https://avatars2.githubusercontent.com/u/10110322?v=3&u=57f5fc4b049905cfe691782df19aba2708458fbd&s=400',
          displayName:'Henry Mendoza Puerta',
          username:'hamp',
          date:Date.now()-1800000

        }]
      }
  }

  handleOpenText(event){
    event.preventDefault()
    this.setState({openText:true})
  }

  renderOpenText(){
    if(this.state.openText){
      return  <InputText />
    }
  }

  render(){
    return (
      <div>
        <ProfileBar
          picture={this.props.user.photoURL}
          username={this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages}/>
    </div>
    )
  }
}

export default Main
