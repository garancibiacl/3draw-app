import { useState } from "react";

export const useCounter = ({stock, onAdd , min, sum ,res  }) => {
    const [count, setCount] = useState(min)
    const [disabledAdd, setDisabledAdd] = useState(false)
    const [disabledRest, setDisabledRest] = useState(false)

  function add(){
    if(count < stock){
        setCount(count + sum)
        setDisabledAdd(false)
        setDisabledRest(false)
    }
    if(count === (stock - 1 )){
        setDisabledAdd(true)
    } 
}

function substract(){
        if(count > min){
            setCount(count - res)
            setDisabledRest(false)
            setDisabledAdd(false)
        }
        if(count === (min + 1) ){
            setDisabledRest(true)
        }
    }


function reset(){
    setCount(min)
}
  return {
    add,
    substract,
    reset,
    count,
    disabledAdd,
    disabledRest
  };
};
