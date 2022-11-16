
/* 
 El useReducer es un hook que nos permite manejar estados complejos de una manera más sencilla y escalable. 


*/

import React, { useReducer } from "react";

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload];
        default:
            return state;
    }

}

const TodoApp = () => {
    
        const [todos, dispatch] = useReducer(reducer, initialState);
        console.log(todos);
    
        const handleAddTodo = () => {
            const newTodo = {
            id: new Date().getTime(),
            todo: 'Nueva tarea',
            done: false
        }
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
    }   
    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {
                            
                            todos.map((todo, i) => (
                                <li
                                    key={todo.id}
                                    className="list-group-item"
                                >
                                    <p className="text-center">{i + 1}. {todo.todo}</p>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender ..."
                            autoComplete="off"
                        />
                        <button
                            className="btn btn-outline-primary mt-1 btn-block"
                            type="submit"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp;

    
