//pic size 687*687
import React from 'react'
import {Link} from 'react-router-dom'

let text = 'The sky above the port was the colour of a television tuned to a dead channel.'.split('')

class Main extends React.Component{
  constructor(){
    super()
    this.state = {
      data: {},
      error: ''

    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.wordSplit = this.wordSplit.bind(this)


  }


  componentDidMount(){



  }

  componentDidUpdate(prevProps){



  }

  wordSplit(e){
    // console.log(e.target.textContent)
    // let arr = e.target.textContent.split(' ')
    // //arr = arr.map(x=> x= x.toString())
    //
    // e.target.innerHTML =  arr.map(x=>{
    //
    //   return(
    //     <span key={arr.indexOf(x)} className="split">{x}</span>
    //   )
    // })
  }



  render() {

    console.log(this.state)

    return (
      <div className='main'>
        <div className='block' onMouseOver={this.wordSplit}>
          {text.map(x=>{

            return(
              <span key={text.indexOf(x)} className="split">{x}</span>
            )
          })}
        </div>

        <div className='block'>
        The sky above the port was the colour of a television tuned to a dead channel.
        </div>

        <div className='block'>
        The sky above the port was the colour of a television tuned to a dead channel.
        </div>

        <div className='block'>
        The sky above the port was the colour of a television tuned to a dead channel.
        </div>

        <div className='block'>
        The sky above the port was the colour of a television tuned to a dead channel.
        </div>

        <div className='block'>
        The sky above the port was the colour of a television tuned to a dead channel.
        </div>

      </div>



    )
  }
}
export default Main
