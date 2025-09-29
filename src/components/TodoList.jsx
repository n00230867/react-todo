import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import TodoItem from './TodoItem';

let initialList = [
    { id: 1, text: 'Clean the house', done: true },
    { id: 2, text: 'Buy milk', done: false },
    { id: 3, text: 'Create react todo app', done: false }
];

export default function TodoList() {
    const [list, setList] = useState(initialList);
    const [textInput, setTextInput] = useState('');

    const handleChange = e => {
        setTextInput(e.target.value);
    };

    const addTodoItem = () => {

        if (textInput.length > 3) {
            let newTodo = {
                id: list[list.length - 1].id + 1,
                text: textInput,
                done: false
            };

            setList([...list, newTodo]);
            setTextInput("");
        }
    };

    const markAsDone = (id) => {
        const updatedList = list.map(item => {
            if (item.id === id) {
                return { ...item, done: true };
            }
            return item;
        });
        setList(updatedList);
    };

    let todoItems = list.map((item) => {
        return <TodoItem key={item.id} todo={item} markAsDone={markAsDone}/>
    });

    return (
        <Card>
            <Card.Header>TodoList</Card.Header>
            <Card.Body>
                <ListGroup>
                    {todoItems}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <input type='text' onChange={handleChange} value={textInput} />
                <Button onClick={addTodoItem} variant='primary' className='float-end'>Add</Button>
            </Card.Footer>
        </Card>
    );

};