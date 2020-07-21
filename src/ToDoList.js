import React from "react";

import ToDo from "./ToDo";

class ToDoList extends React.Component{
    state = {
        list: [],
        text: ''
    }

    addList = (e)=>{
        const desc = e.target.value;
        const keyDown = e.keyCode;
        if(desc !== '' && keyDown === 13){
            const nlist = {description: desc, id: Date.now()}
            this.setState(p=> ({
                list: p.list.concat(nlist)
            }))
            e.target.value = "";
        }
    }

    handleClick = (e) =>{
        const id = Number(e.target.id);
        this.setState(p=> ({
            list: p.list.filter(e => e.id !== id)
        }));
        console.log(this.state.list);
    }

    render() {
        const l = this.state.list.map(e=>{
            return (
                <div key={e.id} className="toDos">
                    <ToDo t={e.description} onClick={this.handleClick} id={e.id}/>
                </div>
            );
        })
        return (
            <div className="center">
                <div>
                    {l}
                </div>
                <input type="text" onKeyDown={this.addList} />
            </div>
        )
    }
}

export default ToDoList;