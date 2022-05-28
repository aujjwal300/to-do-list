import React from 'react';

const Todo = () => {
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./assests/images/todo2.png" alt="todologo" />
                        <figcaption>Add Your List Here <span>✌</span></figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Item" className='form-control' />
                        <i className="fa fa-plus add-btn"/>
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All">
                            <span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;