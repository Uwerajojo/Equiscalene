function Run() {
    var side1=document.getElementById("fraction").value;
    alert(side1);
    var side2=document.getElementById("decimal").value;
    alert(side2);
    var side3=document.getElementById("integer").value;
    alert(side3);


if ((side1===side2)&&(side2===side3)&&(side1===side3))
{
    alert("Equilateral");
}
    else if((side1===side2)||(side2===side3)||(side3===side1))
  {  alert("Isosceles");
}
    else if((side1!==side2)&&(side2!==side3)&&(side3!==side1))
    {
        alert("Scalene");
    }   
  if sum(side1+side2>side3)&&(side2+side3>side)   
if ((side1===side2)&&(side2===side3)&&(side1===side3))
{
    alert("Equilateral");
}
    else if((side1===side2)||(side2===side3)||(side3===side1))
  {  alert("Isosceles");
}
    else if((side1!==side2)&&(side2!==side3)&&(side3!==side1))
    {
        alert("Scalene");
    }    
{
    alert("not a triangle");
}

}