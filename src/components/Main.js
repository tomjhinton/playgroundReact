//pic size 687*687
import React from 'react'
import {Link} from 'react-router-dom'

let text = 'The sky above the port was the colour of a television tuned to a dead channel.'

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

    this.drawPoints()

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
  drawPoints(){
     const canvas = document.getElementById('points')
     const ctx = canvas.getContext('2d')
     ctx.clearRect(0, 0, canvas.width, canvas.height)
     ctx.globalAlpha = 1
     ctx.fillStyle = 'black'
     ctx.fillRect(0, 0, canvas.width, canvas.height)
     const  FPS = 60

     canvas.addEventListener('mousemove', function(evt) {
       console.log(evt)

       mouse.x = evt.offsetX,
       mouse.y = evt.offsetY

     }, false)

     canvas.addEventListener('mouseleave', function() {

       ctx.fillStyle = 'black'
       ctx.fillRect(0, 0, canvas.width, canvas.height)
     }, false)

     canvas.addEventListener('mouseenter', function() {

     }, false)



     const  mouse = {
       x: 0,
       y: 0,
       vx: 1,
       vy: 1
     }


     let points =  []
     points = []
     for (var i = 0; i < 100; i++) {
       points.push({
         x: Math.random() * canvas.width,
         y: Math.random() * canvas.height,
         radius: Math.random() * 1 + 1,
         vx: Math.floor(Math.random() * 50) - 25,
         vy: Math.floor(Math.random() * 50) - 25
       })
     }

     function drawPointsDots(){


       points.map(x=> {

         ctx.fillStyle = 'rgba(0,255,0,0.5)'
         ctx.beginPath()
         ctx.arc(x.x, x.y, x.radius, 0, 5 * Math.PI)
         ctx.fill()
         ctx.fillStyle = 'black'
         ctx.stroke()
       })



     }
     function drawPaths(){
       ctx.beginPath()
       for (var i = 0, x = points.length; i < x; i++) {

         var pointA = points[i]
         ctx.moveTo(pointA.x,pointA.y)

         if(distance(mouse, pointA) < 150){

           ctx.lineTo(mouse.x, mouse.y)

           for (var j = 0, y = points.length; j < y; j++) {
             var pointB = points[j]
             if(distance(pointA, pointB) < 95) {

               ctx.lineTo(pointB.x,pointB.y)
             }
           }
         }
       }
       ctx.lineWidth = 0.15
       ctx.strokeStyle = 'green'
       ctx.stroke()
     }


     function distance( point1, point2 ){
       var xs = 0
       var ys = 0

       xs = point2.x - point1.x
       xs = xs * xs

       ys = point2.y - point1.y
       ys = ys * ys

       return Math.sqrt( xs + ys )
     }

     function update() {
       for (var i = 0, x = points.length; i < x; i++) {
         var s = points[i]

         s.x += s.vx / FPS
         s.y += s.vy / FPS

         if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx
         if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy
       }
     }
     function tick() {
       ctx.clearRect(0, 0, canvas.width, canvas.height)
       ctx.globalAlpha = 1
       ctx.fillStyle = 'rgba(0,0,0,0)'
       ctx.fillRect(0, 0, canvas.width, canvas.height)
       mouse.x+=mouse.vx
       mouse.y+= mouse.vy
       if (mouse.x < 0 || mouse.x > canvas.width) mouse.vx = -mouse.vx
       if (mouse.y < 0 || mouse.y > canvas.height) mouse.vy = -mouse.vy

       update()
       drawPointsDots()
       drawPaths()
       requestAnimationFrame(tick)
     }

     tick()

   }


  render() {

    console.log(this.state)

    return (
      <div className='main'>


        <div className='block'>
          {text.split(' ').map((x,index)=>{

            return(
              <span key={index} className="split">{x+' '}</span>
            )
          })}
        </div>

        <div className='block second'>
          {text.split(' ').map((x,index)=>{

            return(
              <span key={index} className="split2">{x+' '}</span>
            )
          })}
        </div>

        <div className='block third'>
          {text.split(' ').map((x,index)=>{

            return(
              <span key={index} className="split3">{x+' '}</span>
            )
          })}
        </div>

        <div className='block fourth'>
          {text.split(' ').map((x,index)=>{

            return(
              <span key={index} className="split4">{x+' '}</span>
            )
          })}
        </div>

        <div className='block fifth'>
          {text.split(' ').map((x,index)=>{

            return(
              <span key={index} className="split5">{x+' '}</span>
            )
          })}
        </div>

        <div className='block sixth'>
          {text.split(' ').map((x,index)=>{

            return(
              <span key={index} className="split6">{x+' '}</span>
            )
          })}
        </div>

        <div className='block seventh'>
          {text.split(' ').map((x,index)=>{

            return(
              <span key={index} className="split7">{x+' '}</span>
            )
          })}
        </div>

          <canvas id="points" width={900} height={280}>  </canvas>

      </div>



    )
  }
}
export default Main
