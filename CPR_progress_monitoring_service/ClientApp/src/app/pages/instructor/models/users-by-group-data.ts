
export interface UsersByGroupData {
  users: User[]
}

export interface User{
  uid: number,
  email: string
  name: string,
  lastname: string,
  group: string,
}
