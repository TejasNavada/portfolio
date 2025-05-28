import React, { useContext, useEffect, useRef } from "react";
import Header from '../components/Header'
import logo from '../logo.svg';
import '../App.css';

var mouse = {
    x: 0,
    y: 0,
    held:false,
    dx:0,
    dy:0,
    mass:1000,
    radius:10
}
function movement(event){
    //console.log(event)
    mouse.x=event.x;
    mouse.y=event.y;
}
window.addEventListener("mousemove",movement)
window.addEventListener("mousedown",
    function(e){
        mouse.held = true;
        
})

window.addEventListener("mouseup",
    function(e){
        mouse.held = false;
})



const colorArray = [
    "#bd4219",
    "#d7d5e8",
    "#16a11b",
    "#828c83",
    "#bf735e",
    "#805c36",
    "#c9ad8f",
    "#a1acd4",
    "#3059f0",
    "#ccd955"
];

function rotate(dx,dy, angle) {
    const rotatedVelocities = {
        x: dx * Math.cos(angle) - dy * Math.sin(angle),
        y: dx * Math.sin(angle) + dy * Math.cos(angle)
    };

    return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(circle1, circle2) {
    // Calculate collision normal vector (direction between centers)
    const dx = circle2.x - circle1.x;
    const dy = circle2.y - circle1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // Prevent division by zero in case of exact overlap
    if (distance === 0) return;
    
    const nx = dx / distance;  // Normalized normal vector components
    const ny = dy / distance;

    // Calculate relative velocity
    const rvx = circle2.dx - circle1.dx;
    const rvy = circle2.dy - circle1.dy;

    // Calculate relative velocity along the normal
    const velAlongNormal = rvx * nx + rvy * ny;

    // Only resolve if circles are moving towards each other
    if (velAlongNormal > 0) return;

    // Calculate masses (assuming mass = area = πr², but π cancels out)
    const m1 = circle1.radius * circle1.radius;
    const m2 = circle2.radius * circle2.radius;

    // Calculate impulse scalar (bounciness factor of 0.8 for some energy loss)
    const e = 1;
    const j = -(1 + e) * velAlongNormal / (1/m1 + 1/m2);

    // Apply impulse to velocities
    const impulseX = j * nx;
    const impulseY = j * ny;

    circle1.dx -= impulseX / m1;
    circle1.dy -= impulseY / m1;
    if(circle2 !==mouse){
        circle2.dx += impulseX / m2;
        circle2.dy += impulseY / m2;
    }
    

    // Positional correction to prevent circles from overlapping
    const percent = 1; // How much to correct (80%)
    const slop = 0.00;   // Allow small penetration
    const correction = Math.max((circle1.radius + circle2.radius - distance) - slop, 0) 
                       / (1/m1 + 1/m2) * percent;

    circle1.x -= (correction / m1) * nx;
    circle1.y -= (correction / m1) * ny;
    if(circle2 !==mouse){
        circle2.x += (correction / m2) * nx;
        circle2.y += (correction / m2) * ny;
    }
    
}

function Circle(x,y,radius,dx,dy,borderColor,fillColor,c){
    //console.log(dx)
    //console.log(fillColor)
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.c = c;
    this.borderColor = borderColor;
    this.fillColor = fillColor;
    this.opacity=0;

    this.draw = function(){
        this.c.current.beginPath();
        this.c.current.arc(this.x,this.y,this.radius, Math.PI * 2, false);
        this.c.current.save();
        this.c.current.globalAlpha = this.opacity
        this.c.current.fillStyle= this.fillColor
        this.c.current.fill()
        this.c.current.restore();
        this.c.current.strokeStyle=this.borderColor
        this.c.current.stroke();
        // this.c.current.fillStyle=this.fillColor
        // this.c.current.fill();
    }

    this.update = function(circleArray){
        //console.log(window.innerHeight,y)
        
        for(let iterations = 0; iterations < 3; iterations++) {
            for(let i = 0; i < circleArray.length; i++){
                if(this === circleArray[i]) continue;
                let xDelta = circleArray[i].x-this.x;
                let yDelta = circleArray[i].y-this.y;
                let distance = Math.sqrt(Math.pow(xDelta,2)+Math.pow(yDelta,2))
                if(distance < this.radius + circleArray[i].radius){
                    resolveCollision(this,circleArray[i]);
                }
            }
            if(mouse.held){
                let xDelta = mouse.x-this.x;
                let yDelta = mouse.y-this.y;
                let distance = Math.sqrt(Math.pow(xDelta,2)+Math.pow(yDelta,2))
                if(distance < this.radius + mouse.radius){
                    resolveCollision(this,mouse);
                }
            }
            
        }
        if(this.x + this.radius > window.innerWidth && this.dx > 0){
            this.dx = -this.dx
        }
        else if(this.x - this.radius < 0 && this.dx < 0){
            this.dx = -this.dx
        }
        
        if(this.y + this.radius > window.innerHeight && this.dy > 0){
            this.dy = -this.dy
        }
        else if(this.y - this.radius < 0 && this.dy < 0){
            this.dy = -this.dy
        }
        var mass = mouse.radius * mouse.radius
        let velocity = Math.pow(this.dx,2)+Math.pow(this.dy,2)
        
        const minDistance = 10; // Prevent division by zero
        let xDelta = mouse.x - this.x;
        let yDelta = mouse.y - this.y;
        let distance = Math.sqrt(xDelta*xDelta + yDelta*yDelta);
        if(mouse.held){
            let distanceAdjusted = distance || mouse.radius
            // let xDelta = mouse.x - this.x
            // let yDelta = mouse.y - this.y
            // let distance = Math.sqrt(Math.pow(xDelta,2)+Math.pow(yDelta,2))
            // let xAccel = (9.8*mass*xDelta)/Math.pow(distance,3)
            // let yAccel = (9.8*mass*yDelta)/Math.pow(distance,3)
            // this.dx+=xAccel;
            // this.dy+=yAccel;
            const G = 9.8; // Tune this instead of 9.8!
            
            
            
            // Use inverse-square law with softening
            let force = G * mass / (distanceAdjusted*distanceAdjusted + mouse.radius*mouse.radius);
            
            this.dx += force * xDelta / distanceAdjusted;
            this.dy += force * yDelta / distanceAdjusted;
            velocity = Math.pow(this.dx,2)+Math.pow(this.dy,2)
            
            // if(velocity>100){
            //     this.dx*=100/velocity
            //     this.dy*=100/velocity
            // }

        }
        
        //air resistance
        if(velocity>0&&velocity<1000){
            // Quadratic drag approximation (mass-independent)
            const dragCoefficient = 0.001;
            this.dx -= dragCoefficient * this.dx * Math.abs(this.dx);
            this.dy -= dragCoefficient * this.dy * Math.abs(this.dy);
        }
        this.x+=this.dx;
        this.y+=this.dy;
        if(distance<100&& this.opacity<1){
            this.opacity+=.02
        }
        else if (this.opacity>.02){
            this.opacity-=.02
            this.opacity = Math.max(0,this.opacity)
        }

        this.draw();
    }




}

var circleArray = []
var numCircles = 50
const Canvas = React.memo(() => {
    const canvasRef = useRef(null);
    const c = useRef(null);

    function init(){
        canvasRef.current.width = window.innerWidth
        canvasRef.current.height = window.innerHeight
        circleArray = []

        for(let i = 0; i < numCircles; i++){
            
            var radius = Math.random()*20;
            var x = Math.random()*(window.innerWidth - radius * 2) + radius;
            var y = Math.random()*(window.innerHeight - radius * 2) + radius;
            var dx = Math.pow(-1,Math.floor(Math.random() * 2))*(((Math.random())*.5));
            var dy = Math.pow(-1,Math.floor(Math.random() * 2))*(((Math.random())*.5))

            let collision = false;
            if(i!=0){
                for(let j = 0; j < circleArray.length; j++){
                    let xDelta = circleArray[j].x-x;
                    let yDelta = circleArray[j].y-y;
                    let distance = Math.sqrt(Math.pow(xDelta,2)+Math.pow(yDelta,2))
                    if(distance < radius + circleArray[j].radius){
                        i--;
                        collision=true;
                        break
                    }

                }
            }
            if(!collision){
                circleArray.push(new Circle(x,y,radius,dx,dy,colorArray[i%colorArray.length],colorArray[i%colorArray.length],c))
            }
        }
    }

    useEffect(() => {
        
        if (canvasRef.current) {
            
            canvasRef.current.focus();
            console.log(canvasRef)
            console.log(window.innerWidth,window.innerHeight)
            init();
            c.current = canvasRef.current.getContext("2d")
            console.log(c)
            
            animate();
            window.addEventListener("resize",function(){
                init();
            })
            
          }
    }, []);
    
    
    
    function animate(){
        requestAnimationFrame(animate);
        if(c.current!=null){
            c.current.clearRect(0,0,window.innerWidth, window.innerHeight);
            circleArray.forEach(circle => {
                circle.update(circleArray);
            });
            if(mouse.held){
                c.current.beginPath();
                c.current.arc(mouse.x,mouse.y,mouse.radius, Math.PI * 2, false);
                c.current.strokeStyle="white"
                c.current.stroke();
            }
            
        }
        
    }
    console.log(c)
    // hsla(240, 10%, 3.9%, 1)
  
    return (
        
        <canvas style={{ zIndex:-1, position:"fixed",margin:"0px", padding:"0px", background :"#000000"}} ref={canvasRef}></canvas>
    );
});
  
export default Canvas;