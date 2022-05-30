import React, { useState, useEffect } from 'react';

// Get localStorage data
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");

    if (lists) {
        return JSON.parse(lists);
    }
    else {
        return [];
    }
};

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);

    // Add the items function
    const addItem = () => {
        if (!inputData) {
            alert("Plz fill the data!");
        }
        else if (inputData && toggleButton) {
            setItems(
                items.map((currElem) => {
                    if (currElem.id === isEditItem) {
                        return { ...currElem, name: inputData };
                    }
                    return currElem;
                })
            );
            setInputData([]);
            setIsEditItem(null);
            setToggleButton(false);
        }
        else {
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            };
            setItems([myNewInputData, ...items]);
            setInputData("");
        }
    };

    // Edit the items
    const editItem = (index) => {
        const item_todo_edited = items.find((currElem) => {
            return currElem.id === index;
        });
        setInputData(item_todo_edited.name);
        setIsEditItem(index);
        setToggleButton(true);
    };

    // Delete the items function
    const deleteItem = (index) => {
        const updatedItems = items.filter((currElem) => {
            return currElem.id !== index;
        });

        setItems(updatedItems);
    };

    //Remove All items
    const removeAll = () => {
        setItems([]);
    }

    // Local Storage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items));
    }, [items]);

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./assests/images/todo2.png" alt="todologo" />
                        <figcaption>Add Your List Here <span>✌</span></figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Item" className='form-control'
                            value={ inputData } onChange={(e) => setInputData(e.target.value) }/>
                        
                        {toggleButton ? (
                            <i className="far fa-edit" onClick={addItem} />
                        ) : (
                            <i className="fa fa-plus add-btn" onClick={addItem} />
                        )}
                    </div>

                    {/* show our items */}
                    <div className="showItems">
                        {items.map((currElem, index) => {
                            return (
                                <div className="eachItem" key={currElem.id}>
                                    <h3>{currElem.name}</h3>
                                    <div className="todo-btn">
                                        <i className="far fa-edit" onClick={() => editItem(currElem.id)}></i>
                                        <i className="far fa-trash-alt"
                                            onClick={() => deleteItem(currElem.id)}></i>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"
                            onClick={removeAll}>
                            <span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;