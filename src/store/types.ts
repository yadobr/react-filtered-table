import { Dispatch } from 'redux';

export interface StateType {
    users?: Array<UserType>,
    userTodos?: Array<UserTodoType>
    filteredUsers?: Array<UserType>
}

export interface ActionType {
    type: string;
    payload?: any;
}

export interface UserType {
    id?: number;
    name?: string;
    username?: string;
    email?: string;
    address?: {
        street?: string;
        suite?: string;
        city?: string;
        zipcode?: string;
        geo?: {
            lat?: string;
            lng?: string;
        };
    };
    phone?: string;
    website?: string;
    company?: {
        name?: string;
        catchPhrase?: string;
        bs?: string;
    };
}
export interface UserTodoType {
    userId?: number;
    id?: number;
    title?: string;
    completed?: boolean;
}
export interface UserTableProps {
    filteredUsers?: Array<Object>;
    dispatch?: Dispatch;
    userTodos?: Array<UserTodoType>;
}

export interface FilterProps {
    field?: string;
    dispatch?: Dispatch;
}

export interface LayoutProps {
    main?: React.ReactNode;
}
