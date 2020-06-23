//Chapter 21-25


//Task 1


// var first=prompt("Enter Your First Name");
// var last=prompt("Enter Your Last Name");
// var fullName=first +" "+ last
// alert( "Hello"+" "+fullName +" !");


//Task 2


// var phone=prompt("Enter Your Favourite Mobile");
// var length=phone.length;
// document.write("My favourite mobile is :" + phone)
// document.write("<br>"+"Length of string is " + length)



//Task 3



// var country="Pakistani"
// var h2=country.indexOf("n");
// document.write("String:"+ country);
// document.write("<br>"+"Index of n="+ h2);



//Task 4

// var hello="Hello World"
// var h2=hello.lastIndexOf("l")
// document.write("String:"+ hello);
// document.write("<br>"+" Last Index of" +"l ="+ h2);



//Task 5


// var country="Pakistani"
// var h2=country.charAt(5);
// document.write("String:"+ country);
// document.write("<br>"+" Character at Index 5="+ h2);




//Task 6


// var first=prompt("Enter Your First Name");
// var last=prompt("Enter Your Last Name");
// var fullName=first.concat(" "+last);
// alert( "Hello"+" "+fullName +" !");


//Task 7

// var  city="Hyderabad";
// document.write("City:"+city)

//  var n=city.replace("Hyder","Islam")

// document.write("<br>"+" After Replacement:"+n);



//Task 8


// var message = "Ali and Sami are best friends. They play cricket and football together";
// var rep=message.replace(/and/g,"&");
// document.write(rep);




//Task 9

// var str="472";
// document.write("Value:"+ str);
// document.write("<br>"+"Type:"+ typeof(str));

//  var a= Number(str);
//  document.write("<br>"+"Value:"+ a);
//  document.write("<br>"+"Type:"+ typeof(a));




//Task 10
// var input=prompt("Enter word");
// var a=input.toUpperCase();
// document.write("User Input:"+ input);
// document.write("<br>"+"Upper Case:"+ a);


//Task 11

// var input=prompt("Enter word");
// var a=input.slice(0,1);
// var d=a.toUpperCase();
// var b=input.slice(1,);
// var c=b.toLowerCase();
// document.write("User Input:"+ input);
// document.write("<br>"+"Title Case:"+d+c );




//Task 12
// var num=35.67;
// document.write("Number:"+ num)

// var str=num.toString();

// document.write("<br>"+"String:"+ str);


//Task 13


// var username=prompt("Enter Your Username");

// if (username.includes("!")|| username.includes(",") || username.includes(".") || username.includes("@") ){
// 	alert("Enter a valid username")
// } else{
// 	alert("Hello"+ " "+ username+"!")
// };





//Task 14

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input4=prompt("What do you want to order");
//  var input5=input4.toLowerCase();
 
// if (input5==arr[0]){
//     alert(input5 +" is avaiable at index 0 in our bakery");
// } else if (input5==arr[1]){
//     alert(input5 +" is avaiable at index 1 in our bakery");
// }   else if (input5==arr[2]){
//     alert(input5 +" is avaiable at index 2 in our bakery");
// } else if (input5==arr[3]){
//     alert(input5 +" is avaiable at index 3 in our bakery");
// }   else if (input5==arr[4]){
//     alert(input5 +" is avaiable at index 4 in our bakery");
// } else{
//     alert("This item is not available in our bakery")
// };


//Task 15

// var pass=prompt("Enter your password");
// var num=[0,1,2,3,4,5,6,7,8,9];
// Number(num);


// var a=pass.charAt(0);
// console.log(a);


// if(pass.charAt(0)==0 || pass.charAt(0)== 1 || pass.charAt(0)== 2 ||pass.charAt(0)== 3 ||pass.charAt(0)== 4
//  ||pass.charAt(0)== 5 || pass.charAt(0)==6 ||pass.charAt(0)== 7 ||pass.charAt(0)== 8 ||pass.charAt(0)== 9){
//     alert("Password cannot begin with a number")
    
// }
//  else if(pass.length>=7){
//     alert("Password must be 6 characters long")
     
 
// } else{
// 	alert("Password is saved")
// };





//Task 16
// var university = "University of Karachi";
// var i=university.split("");


// document.write(  "<br>" + i  );




//Task 17

// var input=prompt("Enter word");
// var a=input.length-1;
// Number(a);
// console.log(a);



// var char=input.charAt(a);
// document.write("User Input:"+ " "+ input);
// document.write("<br>"+"Last Word:"+ " "+ char);






//Task 18

// var str="The quick brown fox jumps over the lazy dog.";
// if(str.includes("the")){
// 	alert("There are one occurences of the");
// };






 









//CHAPTERS  26-30


//Task1 

// var integer=prompt("Enter a positive integer");
// document.write("Integer:"+integer);
// var a= Math.round(integer);
// document.write("<br>"+"Round off value:"+a);
// var b= Math.floor(integer);
// document.write( "<br>"+"Floor value:"+b);
// var c= Math.ceil(integer);
// document.write( "<br>"+"Ceil value:"+c);



//Task 2


// var integer=prompt("Enter a negative number");
// document.write("Integer:"+integer);
// var a= Math.round(integer);
// document.write("<br>"+"Round off value:"+a);
// var b= Math.floor(integer);
// document.write( "<br>"+"Floor value:"+b);
// var c= Math.ceil(integer);
// document.write( "<br>"+"Ceil value:"+c);




//Task 3

// var absolute=prompt("Enter value");
//  var c=Math.abs(absolute)
// document.write("The absolute value of"+" "+ absolute+" "+"is"+" " +c);



//Task 4


// var x = Math.floor(Math.random() * 7) 
// document.write("Random dice value:"+ x);


//Task 5

// var x = Math.floor(Math.random() * 2) 
// document.write("Heads value:1")
// document.write("<br>"+"Tails value:1")
// if(x===1){
//     document.write( "<br>"+"Result:"+"Heads")
// } else {
//     document.write( "<br>"+ "Result:"+"Tails")
// };



//Task 6


//  var a = Math.floor(Math.random() * 101);
//  document.write("Random number between 1 and 100:"+" "+ a) 



//Task 7

//not done






//Task 8
// var a=Math.floor(Math.random()*11);

// if(prompt("Guess the secret number")==a){
//     alert("Congrats!You found the secret number")
// } else{
//     alert("Try Again!")
// };




//CHAPTERS 31-34


//Task 1


// var a= new Date();
// document.write(a);


//Task 2

// var a=new Date();
// var b=a.getMonth();
// if(b==0){
// 	alert("Current Month:"+"January") 
// } else if(b==1){
// 	alert( "Current Month:"+"February")
// }
// else if(b==2){
// 	alert( "Current Month:"+"March")
// }  else if(b==3){
// 	alert( "Current Month:"+"April")
// }  else if(b==4){
// 	alert( "Current Month:"+"May")
// }  else if(b==5){
// 	alert( "Current Month:"+"June")
// }  else if(b==6){
// 	alert( "Current Month:"+"July")
// }  else if(b==7){
// 	alert( "Current Month:"+"August")
// }  else if(b==8){
// 	alert( "Current Month:"+"September")
// }  else if(b==9){
// 	alert( "Current Month:"+"October")
// }  else if(b==10){
// 	alert( "Current Month:"+"November")
// }  else if(b==11){
// 	alert( "Current Month:"+"December")
// } 


//Task 3

// var d=new Date();
// var b=d.getDay();
// if(b==0){
// 	alert("Today is Sun") 
// } else if(b==1){
// 	alert( "Today is Mon")
// }
// else if(b==2){
// 	alert( "Today is Tue")
// }  else if(b==3){
// 	alert( "Today is Wed")
// }  else if(b==4){
// 	alert( "Today is Thu")
// }  else if(b==5){
// 	alert( "Today is Fri")
// }  else if(b==6){
// 	alert( "Today is Sat")
// };



//Task 4

//  var d=new Date();
//  var b=d.getDay();
//  if(b==0 || b==6){
// 	 alert("Its FunDay!")
//  } else{
// 	 alert("Today is no FunDay")
//  }; 




//Task 5

// var a=new Date();
// var day=a.getDate();
// if(day<=15){
// 	alert("First fifteen days of the Month")
// } else{
// 	alert("Last days of the month")
// };


//Task 6

// var date=new Date();
// document.write("Current Date:"+ date)
// var b= date.getTime();
// document.write("<br>"+"Milli seconds since Jan 1 1970:"+" "+ b);
// var c=(b/1000*60);
// document.write("<br>"+"Minutes since Jan 1,1970:"+" "+ c);



//Task 7

// var s=new Date();
// var time=s.getHours();
// if(time<=12){
// 	alert("AM")
// } else{
// 	alert("PM")
// }
// document.write(s);


//Task 8

// var laterDate=new Date("December 31, 2020 00:00:00");
// document.write(laterDate);



//Task 9


//  var today=new Date( "April 23 ,2020 00:00:00");
// var milli=today.getTime();
// var day=new Date()
//   var milliday=day.getTime();
//   var diff=milliday-milli;
//   console.log(diff);
//   var daydiff=diff/86400000;
//    var till=daydiff.toFixed(1); 
//  console.log(daydiff);

//  document.write(till+" "+"days have passed till 1st Ramazan");


//Task 10

// var today=new Date( "Jan 1 ,2020 00:00:00");
// var milli=today.getTime();
// var day=new Date()
//   var milliday=day.getTime();
//   var diff=milliday-milli;
//   console.log(diff);
//   var daydiff=diff/1000;
//  console.log(daydiff);
//  document.write(daydiff +" "+"seconds have passed since beginning of 2020 ");











//Task 11

// var date=new Date();
// var time=date.getHours();
// document.write(date);
// date.setHours(time-1);
// document.write("<br>"+"1 hour ago, it was"+" "+date);


//Task 12


// var date=new Date();
// var time=date.getFullYear();
// document.write("Current date:"+" "+date);
// date.setFullYear(time-100);
// document.write("<br>"+"100 years back, it was"+" "+date);




//Task 13

//  var input=prompt("Enter your age");
//  var date=new Date();
//  var year=date.getFullYear();
//  console.log(year);
//  var age=(year-input);
//  document.write("Your Birth Year is :"+ " "+ age);




//Task 14

// document.write("<b>K-Electric Bill</b>");
// document.write("<br>"+"Customer name:ABD customer");
// var date=new Date();
// var b=date.getMonth();
// if(b==0){
// 	document.write("<br>"+"Current Month:"+"January") 
// } else if(b==1){
// 	document.write(  "<br>"+"Current Month:"+"February")
// }
// else if(b==2){
// 	document.write(  "<br>"+"Current Month:"+"March")
// }  else if(b==3){
// 	document.write(  "<br>"+"Current Month:"+"April")
// }  else if(b==4){
// 	document.write(  "<br>"+"Current Month:"+"May")
// }  else if(b==5){
// 	document.write(  "<br>"+"Current Month:"+"June")
// }  else if(b==6){
// 	document.write(  "<br>"+"Current Month:"+"July")
// }  else if(b==7){
// 	document.write(  "<br>"+"Current Month:"+"August")
// }  else if(b==8){
// 	document.write(  "<br>"+"Current Month:"+"September")
// }  else if(b==9){
// 	document.write(  "<br>"+"Current Month:"+"October")
// }  else if(b==10){
// 	document.write(  "<br>"+"Current Month:"+"November")
// }  else if(b==11){
// 	document.write(  "<br>"+"Current Month:"+"December")
// };
// var units=532;
//  var charges=16;
//  var net=units*charges;
//  var extra=400;
//  var gross=+(net+extra)
//  document.write( "<br>"+"Number of units:"+" "+units);
//  document.write( "<br>"+"Charges per unit:"+" "+charges);
//  document.write( "<br>"+"Net Amount(Within Due Date):"+" "+net);
//  document.write("<br>"+"Late payment charges:"+" "+ extra);
//  document.write("<br>"+"Gross Amount(after Due Date):"+" "+ gross);















//Task 14 (Second Way)

// document.write("<b>K-Electric Bill</b>");
// document.write("<br>"+"Customer name:ABD customer");
// var date=new Date();

// var monthNames = ["January", "February", "March", "April", "May", "June", "July","August",
// "September","October","November","December"];
//  var now = new Date(); 
//  var month = now.getMonth();
//  var nameOfToday = monthNames[month];
//  document.write("<br>"+"Current Month:"+  " "+ nameOfToday);
// var units=532;
//  var charges=16;
//  var net=units*charges;
//  var extra=400;
//  var gross=+(net+extra)
//  document.write( "<br>"+"Number of units:"+" "+units);
//  document.write( "<br>"+"Charges per unit:"+" "+charges);
//  document.write( "<br>"+"Net Amount(Within Due Date):"+" "+net);
//  document.write("<br>"+"Late payment charges:"+" "+ extra);
//  document.write("<br>"+"Gross Amount(after Due Date):"+" "+ gross);




//Chapters 35-38



//Task 1

// function date(){
// 	var date=new Date();
// 	document.write(date);
// }

// date();



//Task 2


// function name(){
// 	var first=prompt("Enter your first name");
// 	var last=prompt("Enter your last name");
// 	alert("Hello"+" "+ first+" "+last+"!");
	
// }
// name();


//Task 3


// function sum(){
// 	var input1=+prompt("Enter first number");
// 	var input2=+prompt("Enter second number");
// 	var sum=(input1+input2);
// 	document.write(sum);
// }
// sum();




//Task 4

// function calc(num1,opr,num2){
	
//          if(opr=="+"){	
// 			 		 document.write(num1+num2);
// 		 }  else if(opr=="-"){	
// 			document.write(num1-num2);
//          }  else if(opr=="*"){	
// 			document.write(num1*num2);
//          }  else if(opr=="/"){	
// 			document.write(num1/num2);
//          } else{
// 			 alert("Enter correct operator");
// 		 }
		 
		 
// }

// calc(28,"/",7);



//Task 5

// function sqr(num){
	 
// 	var a=num* num;
// 	document.write("Square of number:"+ " "+a);
// }
// sqr(11);


//Task 6


// function fact(number){
// 	document.write("Factorial of "+" "+ number+"!" +"<br>");
	
// 		  var j=number-1;
// 		  while(j>=0){
             
// 			  document.write(number+ "*"+ j + "="+number*j+"<br>");
		
			
		
			
			  
			
// 			  j--;
				  
// 		  }
		  
// 		 }
					
// fact(8);







//Task 7

// function count(){
// 	var start=prompt("Enter start number");
// 	var end=prompt("Enter end number");
// 	for (i=start;i<=end;i++){
// 		document.write(i+"<br>");
// 	}

// }
// count();


//Task 8

// function calculateHypotenuse(base,perp){
// 	base=prompt("Enter base");
// 	perp=prompt("Enter perpendicular");
// 	function calcSquare(){
// 		var m=base*base;
// 		var n=perp*perp;
// 		 var hypo=+(m+n);
// 		 document.write("Base square:"+" "+m)
// 		 document.write("<br>"+"Perpendicular  square:"+" "+n)

// 		document.write("<br>"+"Hypotenuse square:"+" "+m+" +"+n+"="+ hypo);
		
// 		var hyp=Math.sqrt(hypo);
// 		document.write( "<br>"+"The hypotenuse is :"+ " "+ hyp)
// 	}

// 	calcSquare();

// }


// calculateHypotenuse();

//Task 9

// 1
// function area(num1,num2){
// 	  num1=5;
// 	  num2=6;
// 	  var area=num1*num2;
// 	  document.write("Area of rectangle"+" "+area);

// }

// area();
// 2
// function area1(num1,num2){
	
// 	var area=num1*num2;
// 	document.write("<br>"+"Area of rectangle"+" "+area);

// }

// area1(8,7);





//Task 10


//  function palindrome(){
//  	var word=prompt("Enter word");
// 	  var split=word.split("");
// 	  console.log(split);
	  
// 	 var reverse=split.reverse("");
// 	 console.log(reverse);
// 	 var join=reverse.join("");
// 	 console.log(join);
// 	 if (join===word){
// 		 alert("It is a palindrome word");
// 	 } else{
// 		 alert("Not a palindrome word");
// 	 }


//  }
//  palindrome();















//Task 11

// function upper(text){
// 		   var string=text.toString();
		   
		  
// }
// upper("")

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("the quick brown fox"));



//Task 12




	  
	  

	  







//Task 13








//Task 14


// function calcCircumference(rad ){
// 	var circ=2*3.142*rad;
// 	document.write("The Circumference is"+" "+ circ);
// }
// calcCircumference(4);



// function calcArea(rad){
// 	var area=3.142*rad*rad;
// 	document.write("Area is"+" "+ area);
// }
// calcArea(4);