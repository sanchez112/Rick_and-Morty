import { useReducer } from "react"

function counterREducer (state, action) {
    switch(action.type){
        case 'increment':
            return{
                count: state.count +1,
            }
            default:
                return state
    }
}
function Counter () {
    const[state,dispatch] = useReducer(counterREducer, 
        {count: 1})
}
return(
    <>
    <p>count: [state.count]</p>
    <button onClick={()=> dispatch({type: 'increment'})}>+ </button>
    
    
    </>
)