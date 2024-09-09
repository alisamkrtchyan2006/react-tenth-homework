export interface IUser {
    id : number
    name : string
    age : number
    salary : number
    isMarried? : boolean
}

export interface IContext {
    users : IUser[]
    removeUser : (id:number) => void
    setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}


export type NewUser = Omit<IUser, 'id'>
