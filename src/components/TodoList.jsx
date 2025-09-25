import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TodoItem from './TodoItem';
import ListGroup from 'react-bootstrap/ListGroup';


let initialList = [
    { id: 1, text: 'clean the house', done: true },
    {id: 2, text: 'buy milk', done: false },
    {id: 3, text: 'create todo app using react', done: false }
];

const TodoList = () => {

    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState("");

    const markAsDone = (id) => {
        const newList = list.map((item) => {
            if(item.id === id){
                item.done = true;
            }
            return item;
        });
        setList(newList);
    }

    const handleTextInput = e => {
        setTextInput(e.target.value);
    }

    const addTodoItem = () => {
        let newTodo = {
            id: list[list.length - 1].id + 1,
            text: textInput,
            done:false
        };

        setList((prevList) => [...prevList, newTodo]);
        setTextInput("");
    }

    let todoItems = list.map((item, index) => {
        return <TodoItem key={index} markAsDone={markAsDone} todo = {item} />;
    });


    return (
        <Card>
            <Card.Header>TodoList</Card.Header>
            <ListGroup variant='flush'>
                {todoItems}
            </ListGroup>
            <Card.Footer>
                <input type='text' onChange={handleTextInput} value={textInput} />
                <Button variant='primary' className='float-end'>Add</Button>
            </Card.Footer>
        </Card>
    );
};

export default TodoList;