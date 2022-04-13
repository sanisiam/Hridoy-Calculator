let outputscreen=document.getElementById('output-screen');
  function  clr(){
  outputscreen.value=''
}

{
  function display(num) {
    outputscreen.value+=num
  }
}

function calculate()  {
  
  if(outputscreen.value!=0) {
    try {
    outputscreen.value=eval(outputscreen.value)
  } catch(err) {
   alert("invlid number")
  }
  }
}

function del() {
  outputscreen.value=outputscreen.value(slice(0,-1))
}

