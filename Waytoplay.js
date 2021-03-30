// JavaScript Document
	var ar = ["abcmncba", "xxxxxxxx", "00000000", "00000000", 
		"00000000", "00000000", "yyyyyyyy",  "123pq321"];
	var arr = ["00000000", "00000000", "00000000", "00000000", 
		"00000000", "00000000", "00000000",  "00000000"];
	var hold3=[];
	
	var hold1=9 ,hold2=9;
	var signal1=[];
	var signal2=[];
	var signal3=[];
	var signal4=[];
	var count = 0;
	
	var counteat = [];
	var imgeat = [];
	var ideat = [];
	
	var turn = [];
		
function bam(id)
{
				

	var i=id[0] -0 ;var j=id[1]-0;
	
	delpaint();
	del();
	
	
	if (ar[i][j] == 0)
		return;

	var p =document.getElementById(id).childNodes[1].id[1] +document.getElementById(id).childNodes[1].id[2];
	var o =document.getElementById(id).childNodes[1].id[2];
		
	var k = document.getElementById(id).childNodes[1].id[0];


	
	var danh = 0;
	if( ((count%2) == 1 )    &&  ( document.getElementById(id).childNodes[1].id[0] == 'a' ))
		danh = 1;
	if( ((count%2) == 0 )    &&  ( document.getElementById(id).childNodes[1].id[0] == 'b' ))
		danh = 1;
	if (danh == 1)
	{
     	switch (o) 
		{
 			case '0':
				if( k == 'a')
					pawnb(i,j);
				else
					pawna(i,j);
  				break;
 			default:
				switch(p)
				{
					case '11':
					case '88':
  					rook(i,j,k);
  					break;
					
					case '22':
					case '77':
  					horse(i,j);
  					break;
					
					case '33':
					case '66':
  					bishop(i,j,k);
  					break;
					
					case '55':
  					king(i,j,k);
  					break;
					
					case '44':
  					queen(i,j,k);
  					break;
					
					default:
					break;
									
				}
		}				
			
		

	}

}


///////////////////////////////////////////////////////////
function first (id)
{
		if( hold1 != 9)
		{
			reuse(hold1,hold2);
		}
		
		
		
		if ( (id < '00') || (id > '77'))
		{
			document.getElementById(id).parentElement.style.background="#2c3e50"; ////// has no effect	
			id=document.getElementById(id).parentElement.id;	
/////////////danh an
		}
		else
		{
			document.getElementById(id).style.background="#2c3e50";
			 bam(id);

		}

		hold2 = id[1] - 0;hold1 = id[0] - 0;	
		





}




/////////////////////////////////////////////////////////////////////////////////////
function allowDrop(ev) {
	ev.preventDefault();	
}
function drag(ev) {
	ev.dataTransfer.setData("concac",ev.target.id);
}
function drop(ev) 
{
	
	ev.preventDefault();
	var data = ev.dataTransfer.getData("concac");
	if (ev.target.id[0] == data[0])
		return;
	


	
	count ++;
	turn[count]=1;
	
	signal1[count] = document.getElementById(data).parentElement.id;
	signal3[count] = document.getElementById(data).src;
	signal4[count] = data;
	

		
	var flag  = document.getElementById(ev.target.id).src != undefined ;
	if (flag == true)
	{	
	
		counteat[count] = 1;
		imgeat[count] = document.getElementById(ev.target.id).src;
		ideat[count] = ev.target.id;
		
		document.getElementById(ev.target.id).src = document.getElementById(data).src ;
		ev.target.appendChild(document.getElementById(data));
		document.getElementById(ev.target.id).id = data;
		document.getElementById(ev.target.id).classList = count%2;
		
	}
	else
	{
		ev.target.appendChild(document.getElementById(data))
		counteat[count] = 0;
		imgeat[count] = 0;
		

	}
	first(data);		
	
	signal2[count] = ''+ hold1 + hold2 ;
	hold3[count]=ar[hold1][hold2];

	
	var rp = ar[signal1[count][0]][signal1[count][1]];
	ar[hold1] = ar[hold1].substr(0,hold2) + rp + ar[hold1].slice(hold2 +1 , 11);	///them
	ar[signal1[count][0]] = ar[signal1[count][0]].substr(0,signal1[count][1]) + 0 + ar[signal1[count][0]].slice(signal1[count][1] -0 +1 , 11);	///xoa*/
		
	
	
	 //////////
		
	if(arr[signal2[count][0]][signal2[count][1]] != '#' && arr[signal2[count][0]][signal2[count][1]] != '@')
		Myfunction();
		
	if(hold3[count] == "n" || hold3[count] == "q")
			endgame();////////////////////////////////////////////DAU VAO DE ENDGAME
			
			
			
			
			
			
			
			
	////////////////////////////////////////////DAU VAO DE UPCHESS	////////////////////////////////////////////DAU VAO DE UPCHESS
	if( (signal4[count][2] == 0 && signal2[count][0] == 0))
		choiceb();
	if( (signal4[count][2] == 0 && signal2[count][0] == 7))
		choicea();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// danh la phai an
	/*if(counteat[count] == 1 && arr[signal2[count][0]][signal2[count][1]] == '@')
		Myfunction();*/
	// chi danh k an	
		
		
	delpaint();
	del();
	
		document.getElementById('wth').play();///////////////////sound drop
	
	

 

}

function Myfunction1()
{
	document.getElementById('mf').style.display="none";
	document.getElementById('loser').style.display="none";
	var i;
	for( i = count ; i >= 0 ;i --)
	{
		Myfunction();
	}

}


function Myfunction()
{


	
	
	var x = document.createElement("IMG");
	x.setAttribute("src", signal3[count]);
	x.setAttribute("draggable","true");
	x.setAttribute("ondragstart","drag(event)");
	x.setAttribute("id",signal4[count]);


	document.getElementById(signal1[count]).appendChild(x);
	
	var y = document.getElementById(signal2[count]).childNodes;
	y[1].remove();

	if ( counteat[count] == 1)
	{
		var z = document.createElement("IMG");
		z.setAttribute("src", imgeat[count]);
		z.setAttribute("draggable","true");
		z.setAttribute("ondragstart","drag(event)");
		z.setAttribute("id",ideat[count]);

	
		
		document.getElementById(signal2[count]).appendChild(z);	
	}
	
	var va = ar[signal2[count][0]][signal2[count][1]];
	ar[signal1[count][0]] = ar[signal1[count][0]].substr(0,signal1[count][1]) + va + ar[signal1[count][0]].slice(signal1[count][1]-0 +1 , 11);
	ar[signal2[count][0]] = ar[signal2[count][0]].substr(0,signal2[count][1]) + hold3[count] + ar[signal2[count][0]].slice(signal2[count][1]-0 +1 , 11);
	
	signal2[count]='';
	signal1[count]='';
	
	
	
	count --;

}








function paint()
{	
	var x,y;
	delpaint();	
	for(x = 0 ; x < 8 ; x ++)
		for(y = 0 ; y < 8 ; y ++)
		{
			if( arr[x][y] == '#' || arr[x][y] == '@')
				if( ar[x][y] == 0)
					if( ((x + y) % 2) == 0)
						document.getElementById(x+''+y).style.background="#ecf0f1";
					else
						document.getElementById(x+''+y).style.background="#7f8c8d";
		}	
		
}
///////////////////////////////////////////////////////////////////

function del()
{
	var x,y;
	for(x = 0 ; x < 8 ; x ++)	
		for(y = 0 ; y < 8 ; y ++)
		{	
			if( arr[x][y] == '#'  || arr[x][y] == '@')
				arr[x] = arr[x].substr(0,y) + '0' + arr[x].slice(y +1 , 11);	///them
		}
	
}
///////////////////////////////////////////////////////////////////////
function delpaint()
{
	var x,y;
	for(x = 0 ; x < 8 ; x ++)
		for(y = 0 ; y < 8 ; y ++)
		{
			if( arr[x][y] == '#'  || arr[x][y] == '@')
				reuse(x,y);
		}		
}
//////////////////////////////////////////////////////
function reuse(a,b)
{
			if( ((a + b) % 2) == 1)
				document.getElementById(''+a+b).style.background= "#690";      /////////////#2c3e50
			else
				document.getElementById(''+a+b).style.background= "#FFC";		///////// trang	
}






function horse(a,b)
{	
	var x,y;
	x=a-2; y=b-1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a-2; y=b+1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a-1; y=b-2;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a-1; y=b+2;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a+1; y=b-2;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a+1; y=b+2;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a+2; y=b-1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a+2; y=b+1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them

	paint();
}
//////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function pawna(a,b)
{
	var d=1;
	if(a == 6)	
		for(d =1; d < 3; d++)
		{
			if(ar[a-d][b] !=0)
				break;
			else
				if(ar[a-d][b] ==0)
					arr[a-d] = arr[a-d].substr(0,b) + '@' + arr[a-d].slice(b +1 , 11);	///them
		}
	else
		for(d=1;d<2;d++)
		{
			if(ar[a-d][b] ==0)
				arr[a-d] = arr[a-d].substr(0,b) + '@' + arr[a-d].slice(b +1 , 11);	///them
		}
		
	d=1;
	if(ar[a-d][b-d] !=0 && b-d >=0)
		arr[a-d] = arr[a-d].substr(0,b-d) + '#' + arr[a-d].slice(b-d +1 , 11);	///them
	if(ar[a-d][b+d] !=0 && b+d < 8)
		arr[a-d] = arr[a-d].substr(0,b+d) + '#' + arr[a-d].slice(b+d +1 , 11);	///them		
		
	paint();
}
//////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function pawnb(a,b)
{
	var d=1;
	if(a == 1)	
		for(d =1; d < 3; d++)
		{
			if(ar[a+d][b] !=0)
				break;
			else
				if(ar[a+d][b] ==0)
					arr[a+d] = arr[a+d].substr(0,b) + '@' + arr[a+d].slice(b +1 , 8);	///them
		}
	else
		for(d=1;d<2;d++)
		{
			if(ar[a+d][b] ==0)
				arr[a+d] = arr[a+d].substr(0,b) + '@' + arr[a+d].slice(b +1 , 8);	///them
		}
		
	d=1;
	if(ar[a+d][b-d] !=0 && b-d >= 0)
		arr[a+d] = arr[a+d].substr(0,b-d) + '#' + arr[a+d].slice(b-d +1 , 8);	///them
	if(ar[a+d][b+d] !=0 && b+d < 8)
		arr[a+d] = arr[a+d].substr(0,b+d) + '#' + arr[a+d].slice(b+d +1 , 8);	///them		
		
	paint();
}
//////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function rook(a,b,c)
{
	var d;
	for(d = a+1 ; d<8; d++)//////////////////////////////////////xuong
	{
		if(ar[d][b] !=0)
		{
			if(c == document.getElementById(d+''+b).childNodes[1].id[0])
				break;
			else
			{
				arr[d] = arr[d].substr(0,b) + '#' + arr[d].slice(b +1 , 8);	///them
				break;
			}
		}
		else
			arr[d] = arr[d].substr(0,b) + '@' + arr[d].slice(b +1 , 8);	///them
	}
		
	for(d = a-1 ; d>=0; d--)///////////////////////////////////////len
	{
		if(ar[d][b] !=0 )
		{

			if(c == document.getElementById(d+''+b).childNodes[1].id[0])
				break;
			else
			{
				arr[d] = arr[d].substr(0,b) + '#' + arr[d].slice(b +1 , 8);	///them
				break;
			}

		}
		else
			arr[d] = arr[d].substr(0,b) + '@' + arr[d].slice(b +1 , 8);	///them
	}
	
	for(d = b-1 ; d>=0; d--)////////////////////////////////////trai
	{
		if(ar[a][d] !=0 )
		{

			if(c == document.getElementById(a+''+d).childNodes[1].id[0])
				break;
			else
			{
				arr[a] = arr[a].substr(0,d) + '#' + arr[a].slice(d +1 , 8);	///them
				break;
			}

		}
		else
			arr[a] = arr[a].substr(0,d) + '@' + arr[a].slice(d +1 , 8);	///them
	}

	for(d = b+1 ; d<8; d++)////////////////////////////////////phai
	{
		if(ar[a][d] !=0 )
		{

			if(c == document.getElementById(a+''+d).childNodes[1].id[0])
				break;
			else
			{
				arr[a] = arr[a].substr(0,d) + '#' + arr[a].slice(d +1 , 8);	///them
				break;
			}

		}
		else
			arr[a] = arr[a].substr(0,d) + '@' + arr[a].slice(d +1 , 8);	///them
	}
	
	
	paint();
}
//////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function bishop (a,b,c)
{
	var d;
	var m,n;
	for(m=a+1,n=b+1 ; m<=7&&n<=7; m++,n++)//////////////////////////////////////bottom right
	{
		if(ar[m][n] !=0)
		{
			if(c == document.getElementById(m+''+n).childNodes[1].id[0])
				break;
			else
			{
				arr[m] = arr[m].substr(0,n) + '#' + arr[m].slice(n +1 , 8);	///them
				break;
			}
		}
		else
			arr[m] = arr[m].substr(0,n) + '@' + arr[m].slice(n +1 , 8);	///them
	}
			
	for(m=a-1,n=b-1 ; m>=0&&n>=0; m--,n--)//////////////////////////////////////top left
	{
		if(ar[m][n] !=0)
		{
			if(c == document.getElementById(m+''+n).childNodes[1].id[0])
				break;
			else
			{
				arr[m] = arr[m].substr(0,n) + '#' + arr[m].slice(n +1 , 8);	///them
				break;
			}
		}
		else
			arr[m] = arr[m].substr(0,n) + '@' + arr[m].slice(n +1 , 8);	///them
	}
	

	
	for(m=a-1,n=b+1 ; m>=0&&n<=7; m--,n++)//////////////////////////////////////top right
	{
		if(ar[m][n] !=0)
		{
			if(c == document.getElementById(m+''+n).childNodes[1].id[0])
				break;
			else
			{
				arr[m] = arr[m].substr(0,n) + '#' + arr[m].slice(n +1 , 8);	///them
				break;
			}
		}
		else
			arr[m] = arr[m].substr(0,n) + '@' + arr[m].slice(n +1 , 8);	///them
	}
	
	
	for(m=a+1,n=b-1 ; m<=7&&n>=0; m++,n--)//////////////////////////////////////top right
	{
		if(ar[m][n] !=0)
		{
			if(c == document.getElementById(m+''+n).childNodes[1].id[0])
				break;
			else
			{
				arr[m] = arr[m].substr(0,n) + '#' + arr[m].slice(n +1 , 8);	///them
				break;
			}
		}
		else
			arr[m] = arr[m].substr(0,n) + '@' + arr[m].slice(n +1 , 8);	///them
	}





	paint();
}

//////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function king(a,b,c)
{
	var x,y;
	x=a-1; y=b-1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a-1; y=b;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a-1; y=b+1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a; y=b-1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a; y=b+1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a+1; y=b-1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a+1; y=b;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them
	x=a+1; y=b+1;
	if((x < 8) && ( y < 8) && (x > -1) && ( y > -1))
		arr[x] = arr[x].substr(0,y) + '#' + arr[x].slice(y +1 , 11);	///them

	paint();	
}
//////////////////////@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function queen(a,b,c)
{
	rook(a,b,c);
	bishop(a,b,c);
}



/*///////////////////////////////////////  ////////////////////////////////////    ////////// NUT BAM   */

function choiceb()
{
	document.getElementById("winner").style.top = "40%";
}

function choicea()
{
	document.getElementById("winer").style.top = "40%";
}

function choice3a(X,Y)
{
	var i = 0;
	for( i = 0 ; i < 8 ; i ++)
	{

		if(ar[7][i] == 'x' && (document.getElementById('7' + i).childNodes[1].id[2] == 0))
		{
			document.getElementById('7' + i).childNodes[1].src= X; 
			document.getElementById('7' + i).childNodes[1].id = Y;
			document.getElementById("winer").style.top = "-20%";
		}


	}
}
function choice3b(X,Y)
{
	var i = 0;
	for( i = 0 ; i < 8 ; i ++)
	{
		if(ar[0][i] == 'y' && (document.getElementById('0' + i).childNodes[1].id[2] == 0))
		{
			document.getElementById('0' + i).childNodes[1].src= X; 
			document.getElementById('0' + i).childNodes[1].id = Y;
			document.getElementById("winner").style.top = "-20%";
		}
	}
}


/*///////////////////////////////////////  ////////////////////////////////////   SET-TIME UNVEIL   */




	setTimeout(later, 1800);
	function later(){
		document.getElementById("unveil").style.display="none";
	}




