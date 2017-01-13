import React, {Component} from 'react'
import  'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component{

  constructor(){
      super()
      this.state={
        user:{
          photoURL:'https://avatars2.githubusercontent.com/u/10110322?v=3&u=57f5fc4b049905cfe691782df19aba2708458fbd&s=400',
          email:'hmendo81@gmail.com',
          onOpenText:false
        }
      }
  }

  render(){
    return(
      <div>
        <Header />
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App
