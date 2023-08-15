
const allSquares=document.getElementsByClassName("square");
//console.log(allSquares);
const clickedElements=[];
for(const x of allSquares){
    //console.log(x);
    
    //BELOW LINE:the getAttribute() method is used to access
    // the value of a specific attribute.
    
    x.addEventListener("click",function(){
        const idOfElement=x.getAttribute("id");
        //console.log(idOfElement);
        //console.log(x.id);
        const innerHTMLOfElement=document.getElementById(idOfElement).innerHTML;
        //console.log(innerHTMLOfElement);
        //console.log(typeof(innerHTMLOfElement));
        if(clickedElements.length>0){
            clickedElements[0].removeAttribute("style");
            clickedElements.length=0; 
            /*
            clickedElements.length=0;means  to reset the length property
            of an array called clickedElements to zero.
            In JavaScript, the length property of an array represents
            the number of elements in that array. By setting it to
            zero (0), you effectively remove all the elements from 
            the array.
            */
            
        }

        if(innerHTMLOfElement.includes("black") ||
         innerHTMLOfElement.includes("white")
        ){
            //console.log("yellow..");//if we click on empty squares no change.
            document.getElementById(idOfElement).style.backgroundColor="yellow";
            clickedElements.push(x);
  
        }

    });
}
