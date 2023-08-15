/*
"Const" is another keyword to declare a variable
when you do not want to change the value of that 
variable for the whole program. 
The difference is just that var is for normal variable
declaration whose value can be changed, whereas a variable
value declared using const keyword cannot be changed 
*/

/*
BELOW LINE: SELECTING FILES like file-a,file-b...so on file-h
using DOM and storing in to array 

const arrayOfFiles=document.querySelectorAll(".square");



ABOVE LINE:
the querySelectorAll method to select
all elements with the class name "square" in the document and store 
them in the arrayOfFiles constant. This code assumes that you have HTML
elements with the class name "square" in your document.

Once executed, the arrayOfFiles constant will contain a NodeList object,
which is similar to an array and holds references to all the selected
elements. You can then use various methods and properties available for
NodeList objects to manipulate or access the selected elements.

//console.log(arrayOfFiles.length);//64 

*/
const arrayOfFiles=document.querySelectorAll(".files");

const fileNameArray=["a","b","c","d","e","f","g","h"];
let fileNumber=0
for(const i of arrayOfFiles){
    //console.log(i);
    let counter=1;

    for(const el of i.children){
        //console.log(fileNameArray[fileNumber]+counter);
        el.setAttribute("id",fileNameArray[fileNumber]+counter);
        //console.log(el);
        counter++;
    }
    fileNumber++;

}