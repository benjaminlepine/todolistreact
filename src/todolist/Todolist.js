import React, { Component } from 'react';

class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            items: []
        }
    }

    onChange(event){
        this.setState({
            userInput: event.target.value
        })
    }

    addToDo(event){
        event.preventDefault()
        this.setState({
            userInput:'',
            items :[...this.state.items, this.state.userInput]
        }, ()=>console.log(this.state))
    }

    deleteItem(item){
        let array = this.state.items;
        let index = array.indexOf(item)
        array.splice(index,1)
        this.setState({
            items:array
        });
    }

    renderToDo(){
        return this.state.items.map((item)=>{
            return(
                <div key={item}>
                    {item}  <button className="btn btn-secondary"
                                    onClick={this.deleteItem.bind(this, item)}>X
                            </button>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <form>
                    <input
                        className="form-control mb-2"
                        value={this.state.userInput}
                        type="text"
                        placeholder="Renseigner un item"
                        onChange={this.onChange.bind(this)}
                    />
                    <button
                        className="btn btn-primary"
                        onClick={this.addToDo.bind(this)}>Ajouter
                    </button>
                </form>
                <div>
                    {this.renderToDo()}
                </div>
            </div>
        );
    }
}

export default Todolist;