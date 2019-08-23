import React, {useEffect, useState} from 'react';
import { Dispatch } from 'redux';
import {connect} from 'react-redux';
import {fetchTodos} from '../../store/actions';
import {StateType, UserType, UserTableProps, UserTodoType} from '../../store/types';
import './usertable.css';

import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CloseIcon from '@material-ui/icons/Close';

import Filter from '../filter';

const UserTable: React.FC<UserTableProps> = props => {
    let [users, setUsers] = useState([]);
    let [modalUser, setModalUser] = useState<UserType>();
    let [open, setOpen] = useState(false);

    const modalToggle = (user: UserType) => {
        fetchTodos(props.dispatch as Dispatch, user.id as number);
        setModalUser(user);
        setOpen(true);
    };

    return (
        <div className="usertable">
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>name</TableCell>
                        <TableCell className="MuiTableCell-filter">
                            <Filter field="username" />
                        </TableCell>
                        <TableCell>email</TableCell>
                        <TableCell className="MuiTableCell-filter">website</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.filteredUsers && props.filteredUsers.map( (user: UserType, i: number) => (
                        <TableRow onClick={() => {modalToggle(user)}} key={i}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.website}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Modal open={open}>
                <div className="modalContent">
                    <CloseIcon className="modalContent__close" onClick={() => {setOpen(false)}}/>
                    <br></br>
                    <Typography variant="h5" gutterBottom>Информация о пользователе</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Paper>
                                <b>Имя: </b> {modalUser && modalUser.name} <br></br>
                                <b>Имя пользователя: </b> {modalUser && modalUser.username} <br></br>
                                <b>Email: </b> {modalUser && modalUser.email} <br></br>
                                <b>Телефон: </b> {modalUser && modalUser.phone} <br></br>
                                <b>Сайт: </b> {modalUser && modalUser.website} <br></br>
                                <b>Компания: </b> {modalUser && modalUser.company && modalUser.company.name} <br></br>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper>
                                <b>Город: </b> {modalUser && modalUser.address && modalUser.address.city} <br></br>
                                <b>Улица: </b> {modalUser && modalUser.address && modalUser.address.street} <br></br>
                                <b>Дом: </b> {modalUser && modalUser.address && modalUser.address.suite} <br></br>
                                <b>Почтовый код: </b> {modalUser && modalUser.address && modalUser.address.zipcode} <br></br>
                                <b>Координаты: </b> lat: {modalUser && modalUser.address  && modalUser.address.geo && modalUser.address.geo.lat}  lng: {modalUser && modalUser.address  && modalUser.address.geo && modalUser.address.geo.lng} <br></br>
                            </Paper>
                        </Grid>
                    </Grid>
                    <br></br>
                    <Typography variant="h5" gutterBottom>Список дел</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper>
                                <List>
                                    {props.userTodos && props.userTodos.map( (todo: UserTodoType, i: number) => (
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon className={todo.completed ? 'modalContent__complete' : 'modalContent__incomplete'} />
                                            </ListItemIcon>
                                            <ListItemText key={todo.id}>{++i}.{todo.title}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Modal>
        </div>
    )
}

function mapStateToProps(state: StateType) {
    return {
        userTodos: state.userTodos,
        filteredUsers: state.filteredUsers,
    };
}
export default connect(mapStateToProps, null)(UserTable);
