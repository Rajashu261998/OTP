import React,{forwardRef} from 'react'

const PinInput = forwardRef(
    ({maxLength,onChangeFunc,backspaceFunc},ref) => {
    const handleKeyUp=(e)=>{
        console.log(e)
    


    // if the user has clicked on the backspace button, thenb perform the backspace 

    if(e.keyCode===8 && !e.target.value){
        backspaceFunc(e)
    }
    else{
       onChangeFunc(e)
    }
}

  return (
    
        <input 
        ref={ref} 
        maxLength={maxLength} 
        onKeyUp={handleKeyUp} 
        // onChange={onChangeFunc} 
        />
   
  )
})

export default PinInput