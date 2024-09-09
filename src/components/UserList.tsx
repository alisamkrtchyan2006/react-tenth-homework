import { useContext } from "react"
import { UserContext } from "../context"

export const UserList = () => {

    const context = useContext(UserContext)
    if(!context) {
        throw new Error ("error");
    }
    const{users, removeUser} = context

    return <>
        <h2>UserList</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.salary}</td>
                            <td>
                                <button className="remove" onClick={() => removeUser(user.id)}>x</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </>
}