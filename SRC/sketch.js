function setup() 
{
	createCanvas(400, 400);
	frameRate(20)
}
let P0 = [100, 300]
let P1 = [150, 100]
let P2 = [250, 100]
let P3 = [300, 300]

let t = 0.5



function draw()
{
//punkt A
let Ax = lerp(P0[0],P1[0],t)
let Ay = lerp(P0[1],P1[1],t)
circle(Ax,Ay,10)

//punkter P0-P3
circle(P0[0],P0[1],20)
circle(P1[0],P1[1],20)
circle(P2[0],P2[1],20)
circle(P3[0],P3[1],20)

//linjestykker mellem punkter
line(P0[0],P0[1],P1[0],P1[1])
line



}
