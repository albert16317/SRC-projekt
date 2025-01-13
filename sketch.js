function setup() 
{

	frameRate(20)
}
let P0 = [100, 300]
let P1 = [150, 100]
let P2 = [250, 100]
let P3 = [300, 300]

let t = 0
let Pr = 10
let kurve = []
let lonni = []
let i
function draw()
{
	createCanvas(400, 400);

frameRate(60)

//punkt A
let Ax = lerp(P0[0],P1[0],t)
let Ay = lerp(P0[1],P1[1],t)
let A = [Ax,Ay]
circle(A[0],A[1],Pr)

//punkt B
let Bx = lerp(P1[0],P2[0],t)
let By = lerp(P1[1],P2[1],t)
let B = [Bx,By]
circle(B[0],B[1],Pr)


//punkt C
let Cx = lerp(P2[0],P3[0],t)
let Cy = lerp(P2[1],P3[1],t)
let C = [Cx,Cy]
circle(C[0],C[1],Pr)

//punkt D
let Dx = lerp(A[0],B[0],t)
let Dy = lerp(A[1],B[1],t)
let D = [Dx,Dy]
circle(D[0],D[1],Pr)

//punkt E
let Ex = lerp(B[0],C[0],t)
let Ey = lerp(B[1],C[1],t)
let E = [Ex,Ey]
circle(E[0],E[1],Pr)

//punkt P
let Px = lerp(D[0],E[0],t)
let Py = lerp(D[1],E[1],t)
let P = [Px,Py]
circle(P[0],P[1],Pr)
kurve.push(P)

console.log(Px,Py)


//punkter P0-P3
fill('red')
circle(P0[0],P0[1],Pr)
circle(P1[0],P1[1],Pr)
circle(P2[0],P2[1],Pr)
circle(P3[0],P3[1],Pr)

//linjestykker mellem punkter P0123
line(P0[0],P0[1],P1[0],P1[1])
line(P1[0],P1[1],P2[0],P2[1])
line(P2[0],P2[1],P3[0],P3[1])

//linjestykker mellem punkter AB og BC
line(A[0],A[1],B[0],B[1])
line(B[0],B[1],C[0],C[1])

//linjestykker mellem punkter D og E

line(D[0],D[1],E[0],E[1])





if(t<1){
	t+=0.01
}
if(t>1){
	t=0
	kurve = []
}



//kurve fra start til punkt P
for(i=0;i<kurve.length;i++){
	if(i>0){
		lonni=kurve[i-1]
	}
	else{
		lonni=kurve[0]
	
	}
	stroke('red')
	line(kurve[i][0],kurve[i][1],lonni[0],lonni[1])
	
	}
}
