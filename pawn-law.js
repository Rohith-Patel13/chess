//console.log(fileNameArray);

const arrayOfPawn=[];

for (const i of fileNameArray){
    arrayOfPawn.push(document.getElementById(i+2));
}
for (const j of fileNameArray){
    arrayOfPawn.push(document.getElementById(j+7));
}

/* 
const highlightCircle=function([first,second]){
    let circle=document.createElement("div");
    let circle2=document.createElement("div");
    circle.setAttribute("class","circle");
    circle2.setAttribute("class","circle"); 
    first.appendChild(circle);
    second.appendChild(circle2);
    first.classList.add("flex");
    second.classList.add("flex");

}
*/


const undoCircle=function(circlesArray){
    circlesArray.forEach((cur)=>{
        cur.innerHTML="";
        cur.classList.remove("flex");
    });
};

//array to track circles
const insertedCircle=[];

//add circles to each elements of passed array
const highlightCircle=function(attachCircles,clickedElement){
    //console.log(attachCircles);
    if(insertedCircle.length>0){
        undoCircle(insertedCircle);
    }
    //console.log(attachCircles);
    //create child element
    /*
    below line:JavaScript variable declaration using the const keyword.
    It assigns a string value to the variable child.
    The string represents an HTML element, specifically a div element
    with a class attribute set to "circle". This element, when rendered
    in a web page, would likely be displayed as a circle due to custom
    CSS styling applied to elements with the "circle" class.
    */
    const child= '<div class="circle"></div>';
    /*
    ES6 stands for ECMAScript 6; ECMAScript is another official name
    for Javascript,since the organization ECMA International
    creates the standard

    ES6 and JavaScript belong to "Languages" category of the tech stack.
    "ES6 code is shorter than traditional JS" is the top reason why over
    98 developers like ES6, while over 1556 developers mention "Can be
    used on frontend/backend" as the leading cause for choosing
    JavaScript
    */ 
    attachCircles.forEach((i)=>{
        //i.classList.add("circle"); //do not do like this.
        i.innerHTML=child;
        i.classList.add("flex");
        insertedCircle.push(i);
        
        i.addEventListener("click",function(){
            //console.log(i);
            i.innerHTML=clickedElement.innerHTML;
            removeCircleFromThis=attachCircles.filter((el)=>el!==i)
            removeMyCircle(removeCircleFromThis);
            clickedElement.innerHTML="";
            //console.log(i.innerHTML);
        });
    });

};

for (const i of arrayOfPawn){
    //console.log(i);
    i.addEventListener("click",()=>{ //"function()" can write as "()=>"
        //console.log(i);
        const clickedElement=i;
        //console.log(clickedElement);

        const currentid=i.getAttribute("id");// also "i.id" can be used.
        //console.log(currentid);
        //console.log(typeof(currentid));//string
        //console.log(currentid[1]);//Geting A Character from a String
        let change=parseInt(currentid[1]);//Geting A Character from a String
        //const stepsSquare=[];
        const addCircleToElements=[];
        for (let i =0;i<2;i++){
            change++;
            //console.log(change);
            //console.log(currentid[0]+change);
            //stepsSquare.push(document.getElementById(currentid[0]+change));
            addCircleToElements.push(document.getElementById(currentid[0]+change));
        } 
        //console.log(stepsSquare);
        /*
        for(const j of stepsSquare){
            console.log(j);
        }S
        */
       highlightCircle(addCircleToElements,clickedElement);
    })
} 
 
const removeMyCircle=function(removalArray){
    console.log(removalArray);
    removalArray.forEach((i)=>{
        i.innerHTML="";
        i.classList.remove("flex");
    });
};