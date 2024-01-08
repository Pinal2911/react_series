import { createSlice,nanoid } from "@reduxjs/toolkit";

//inital state of slice
const initialState={
    todos:[{
        id:1,
        text:"hello world"
    }]
}
//nanoid creates a random string ID
//slice creation
export const todoSlice=createSlice({
    //name of slice
    name:'todo',
    //initial state
    initialState,
    //reducers
    //syntx: property and function
    reducers:{
        //note:
        //every function has two values mandatory
        //which needs to be handeled
        //state and action
        //state includes current state of application
        //action gives id
        addTodo:(state,action)=>{
            //create new todo
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            //update the current state
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            //consider all except the matching oone and update
            //the state
            state.todos=state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos.filter((todo) => {
               console.log(todo.id)
               console.log("action id",action)
               console.log(state.todos)
               
                if(todo.id == action.payload.id){
                    
                    todo.text="updated text"
                }
            })
        },
        
        
    },
    
})

//export functionalities
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions

export default todoSlice.reducer