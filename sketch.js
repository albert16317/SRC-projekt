function setup() 
{
	frameRate(20)
}
let P0 = [100, 300]
let P1 = [150, 100]
let P2 = [250, 100]
let P3 = [300, 300]
let P4 = [400, 300]

let t = 0
let Pr = 5
let kurve = []
let lonni = []
let i
function draw()
{
	createCanvas(1200, 1200);
	background(100);
frameRate[1201]

//punkt A
let Ax = lerp(P0[0],P1[0],t)
let Ay = lerp(P0[1],P1[1],t)
let A = [Ax,Ay]
fill('blue')
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

//maybe||
//punkt F
let Fx = lerp(P3[0],P4[0],t)
let Fy = lerp(P3[1],P4[1],t)
let F = [Fx,Fy]
circle(F[0],F[1],Pr)

//punkt G
let Gx = lerp(C[0],F[0],t)
let Gy = lerp(C[1],F[1],t)
let G = [Gx,Gy]
circle(G[0],G[1],Pr)



//maybe||


//punkt P

let Px = lerp(D[0],E[0],t)
let Py = lerp(D[1],E[1],t)
let P = [Px,Py]
circle(P[0],P[1],Pr)




//punkt H
fill('green')
let Hx = lerp(P[0],G[0],t)
let Hy = lerp(P[1],G[1],t)
let H = [Hx,Hy]
circle(H[0],H[1],Pr)
kurve.push(H)
console.log(Hx,Hy)

//punkter P0-P3
fill('red')
circle(P0[0],P0[1],Pr)
circle(P1[0],P1[1],Pr)
circle(P2[0],P2[1],Pr)
circle(P3[0],P3[1],Pr)
circle(P4[0],P4[1],Pr)

//linjestykker mellem punkter P01234
stroke('black')
strokeWeight(weight=0.5)
line(P0[0],P0[1],P1[0],P1[1])
line(P1[0],P1[1],P2[0],P2[1])
line(P2[0],P2[1],P3[0],P3[1])
line(P3[0],P3[1],P4[0],P4[1])

//linjestykker mellem punkter AB og BC
line(A[0],A[1],B[0],B[1])
line(B[0],B[1],C[0],C[1])

//linjestykker mellem punkter D og E

line(D[0],D[1],E[0],E[1])

//linjestykker mellem punkter F og C
line(F[0],F[1],C[0],C[1])

//linjestykker mellem punkter G og P
line(G[0],G[1],P[0],P[1])



if(t<1){
	t+=0.02
}
if(t>1){
	t=0
	kurve = []
}



//kurve fra start til punkt P
stroke('yellow')
strokeWeight(weight=4)
for(i=0;i<kurve.length;i++){
	if(i>0){
		lonni=kurve[i-1]
	}
	else{
		lonni=kurve[0]
	
	}
line(kurve[i][0],kurve[i][1],lonni[0],lonni[1])
	
}





	if(keyIsPressed){
		if(key==1){
			P0=[mouseX,mouseY]
			t=0
			kurve = []
		}
	}
	
	if(keyIsPressed){
		if(key==2){
			P1=[mouseX,mouseY]
			t=0
			kurve = []
		}
	}
	
	if(keyIsPressed){
		if(key==3){
			P2=[mouseX,mouseY]
			t=0
			kurve = []
		}
	}
	
	if(keyIsPressed){
		if(key==4){
			P3=[mouseX,mouseY]
			t=0
			kurve = []
		}
	}

	if(keyIsPressed){
		if(key==5){
			P4=[mouseX,mouseY]
			t=0
			kurve = []
		}
	}
	//bounding box

//lokal minX og maxX
let minX = Math.min(P0[0], P1[0], P2[0], P3[0], P4[0]);
let maxX = Math.max(P0[0], P1[0], P2[0], P3[0],	P4[0]);
//lokal minY og maxY
let minY = Math.min(P0[1], P1[1], P2[1], P3[1], P4[1]);
let maxY = Math.max(P0[1], P1[1], P2[1], P3[1], P4[1]);



stroke('red');
strokeWeight(0.2);
noFill();
rect(minX, minY, maxX - minX, maxY - minY);

let bbox = [minX, maxX, minY, maxY];


}
