
export const reducer = (state,{type,value})=>{
    switch(type){
        case "Increment":{
            state.count = state.count+Number(value)
            return {...state}
        }
        case "Decrement":{
            state.count = state.count-Number(value)
            return{...state}
        }
        case "Multiply":{
            state.count = state.count*Number(value)
            return{...state}
        }
        case "Divide":{
            state.count = Math.floor(state.count/Number(value))
            return{...state}
        }
        default:{
            return state
        }

    }
}