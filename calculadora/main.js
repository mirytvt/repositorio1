function dis(val){
    const display=document.getElementById('result')
    display.value += val
}
function sin(){
    const display=document.getElementById('result')
    display.value=Math.sin(display.value*(Math.PI/180))
}
function cos(){
    const display=document.getElementById('result')
    display.value=Math.cos(display.value*(Math.PI/180))
}
function tan(){
    const display=document.getElementById('result')
    display.value=Math.tan(display.value*(Math.PI/180))
}
function atan(){
    const display=document.getElementById('result')
    display.value=Math.atan(display.value)
}
function acos(){
    const display=document.getElementById('result')
    display.value=Math.acos(display.value)
}
function asin(){
    const display=document.getElementById('result')
    display.value=Math.asin(display.value)
}
function sqrt(){
    const display=document.getElementById('result')
    let x = Math.sqrt(9)
    let y=eval(x)
    display.value=y
}
/*by me*/
function cuberut(){
    const display=document.getElementById('result')
    let x = Math.cbrt(display.value);
    let y=eval(x)
    display.value=y
}
function log(){
const dislay=document.getElementById('result')
dislay.value=Math.log10(dislay.value)
}
function In(){
    const dislay=document.getElementById('result')
    dislay.value=Math.log(dislay.value)
}
function e(){
    const display=document.getElementById('result')
    display.value=Math.e(display.value,2.718.Infinity)
}
function PI(){
    const display=document.getElementById('result')
    return Math.PI * (radius * 2)
  }
function slove(){
    const display=document.getElementById("result")
    let x=display.value
    let y=eval(x)
    display.value=y
}
function del(){
    const display=document.getElementById("result")
    display.value=""
}
function x2(){
    const display=document.getElementById("result")
    display.value=Math.pow(display.value,2)
}