import * as Actions from './action'

const initalseState = {

    employees: [],
    roles: []

}

const reducer = (state = initalseState, action) => {

    switch (action.type) {


        case Actions.GET_EMPLOYEES:
            return { ...state, employees: action.payload }
        case Actions.ADD_EMPLOYEE:
            const employees = [...state.employees];
            employees.push(action.payload);
            return { ...state, employees }
        case Actions.EDIT_EMPLOYEE: {
            const employees = [...state.employees];
            const findIndex = employees.findIndex(x => x.id == action.payload.id);
            console.log(findIndex, "findIndex")
            employees[findIndex] = action.payload;
            return { ...state, employees }
        }
        case Actions.DELETE_EMPLOYEE: {
            const employees = state.employees.filter(x => x.id !== action.payload.id)
            return { ...state, employees }
        }
        case Actions.GET_ROLES:
            return { ...state, roles: action.payload }
        case Actions.ADD_ROLE:
            const roles = [...state.roles];
            roles.push(action.payload);
            return { ...state, roles }
        default: return { ...state }
    }
}

export default reducer;