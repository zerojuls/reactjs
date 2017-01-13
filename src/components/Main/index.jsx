import React, {Component} from 'react'
import moment from 'moment'
import MessageList from '../MessageList'

class Main extends Component{
  constructor(){
      super()
      this.state={
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

  render(){
    return (
      <MessageList messages={this.state.messages}/>
    )
  }
}

export default Main
