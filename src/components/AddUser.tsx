import { useContext, useState } from "react";
import { NewUser } from "../types";
import { UserContext } from "../context";

export const AddUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('UserContext is undefined');
    }
    const { users, removeUser } = context;

    const [add, setAdd] = useState<NewUser> ({
        name : "",
        age : 0,
        salary : 0,
        isMarried : false,
    })

    const [error, setError] = useState<string | undefined>(undefined)




    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = event.target;
        setAdd(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();


        if (!add.name || add.age <= 0 || add.salary <= 0) {
            setError('All fields must be filled with valid values');
            return;
        }


        const newUser = {
            ...add,
            id: users.length + 101 
        };
        
        context.setUsers([...users, newUser]);
        setError(undefined); 
        setAdd({ name: '', age: 0, salary: 0, isMarried: false }); 
    };


    return <div>
        <h2>AddUser</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label className="first-lable">Name: </label>
                <input
                    type="text"
                    name="name"
                    placeholder="enter a name"
                    value={add.name}
                    onChange={handleChange}
                />
            </div>
            <div className="input-block">
                <label className="second-lable">Age: </label>
                <input
                    type="number"
                    name="age"
                    placeholder="enter an age"
                    value={add.age === 0 ? "" : add.age}
                    onChange={handleChange}
                />
            </div>
            <div className="input-block">
                <label className="third-lable">Salary: </label>
                <input
                    type="number"
                    name="salary"
                    placeholder="enter your salary"
                    value={add.salary === 0 ? "" : add.salary}
                    onChange={handleChange}
                />
            </div>
            <button className="add">Add</button>
        </form>
    </div>
}
