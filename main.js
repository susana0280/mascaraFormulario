const inputCard=document.querySelector("#inputCard")
const inputDate=document.querySelector("#inputDate")
const inputCVV=document.querySelector("#inputCVV")



const maskNumber="####-####-####-####"
const maskDate="##/##"
const maskCVV="###"


let current=""
let cardNumber=[]
let cardDate=[]
let cardCVV=[]


//_____________Evento listener para Number________________________
inputCard.addEventListener("keydown",e=>{

  
  inputCard.value=cardNumber.join("")
  if(e.key==="Tab"){
    return
  }
  e.preventDefault()
  handlerInput(e.key,cardNumber,maskNumber)
  inputCard.value=cardNumber.join("")


})

//_______________evento para el date________________

inputDate.addEventListener("keydown",e=>{

    if(e.key==="Tab"){
      
        return
    }
    e.preventDefault()
    handlerInput(e.key,cardDate,maskDate)
    inputDate.value=cardDate.join("")
  
})

//___________evento para el CVV________________

inputCVV.addEventListener("keydown",e=>{
    if(e.key==="Tab"){
      
        return
    }
    e.preventDefault()
    handlerInput(e.key,cardCVV,maskCVV)
    inputCVV.value=cardCVV.join("")
})



//_____________Mascara para los input______________________
function handlerInput(key,arr,mask){
    number=["0","1","2","3","4","5","6","7","8","9"]

     if(key==="Backspace" && arr.length>0){
        cardNumber.pop()
       
      }
    if(number.includes(key) && arr.length+1<=mask.length){
    
        for(let i=0; i<=mask.length; i++){
           
           if(mask[arr.length] ==="-" || mask[arr.length] ==="/" ){
           
                arr.push([mask[arr.length]],key)
                
                 return
            }
            else{
                arr.push(key)
                 return
            }
        }
       
    }
   
}

