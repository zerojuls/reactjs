import React, {Component} from 'react'

class ProfileBar extends Component{

  constructor(){
    super()
  }

  render(){
      <div className={styles.root}>
        <figure>
            <img className={styles.avatar} src={this.props.picture}/>
        </figure>
        <span className={styles.username}>Hola @{this.props.username}!</span>
        <button onClick={this.props.onOpenText} className={styles.button}>
          <span className="fa fa-lg fa-edit"></span> Twee!
        </button>
      </div>
  }
}

export default ProfileBar
