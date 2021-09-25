var  newdiv = document.createElement('div')
//add classname
newdiv.className ='new';
//add id
newdiv.id ='neww';
//create textnode
var newdivtext = document.createTextNode('LIST')
newdiv.appendChild(newdivtext)
//inserting it to the Dom
var hold =document.querySelector('.my-header')
var  h1 = document.querySelector('.my-header h1')
hold.insertBefore(newdiv, h1)
//styling new div
newdiv.style.backgroundColor == 'white';
newdiv.style.color = 'green';
newdiv.style.fontWeight ='bold'
newdiv.i
console.log(newdiv)
// events
let box = document.querySelector('.output')
let ul = document.querySelector('.ul')
let btn = document.querySelector('#btn')
btn.addEventListener('click',(e)=>{
    inn.innerHTML = e.target.output
})
    /**h1.textContent='changed'
    h1.style.fontSize = '20px'
    hold.style.backgroundColor='red'
    newdiv.style.color='red'
    console.log(e.target.id)
    console.log(e.target.classList)
    document.querySelector('.output').innerHTML='<h3>'+e.target.id+'</h3>'
    console.log(e.clientX)
    console.log(e.clientY)
    console.log(e.ctrlkey);**/
    //console.log('EVENT:'+e.type)
   // btn.addEventListener('dblclick', (e)=>{
     //   console.log('yam')
       // console.log('EVENT:' +e.type)
        //mousedown, mouesdown type and click type
    //})
    
    let inn = document.querySelector('.in')
//box.addEventListener('mouseenter',runevent)
   // box.addEventListener('mouseover', runevent)
  // box.addEventListener('mouseout', runevent)
   //box.addEventListener('mouseleave', runevent)
   box.addEventListener('mousemove', runevent)
    function runevent(b){
        console.log('event:' +b.type )
        inn.innerHTML = '<h3>mouseX:  ' +b.offestX+'</h3> <h3>mouseY:  '+b.offsetY+'</h3>'
    }