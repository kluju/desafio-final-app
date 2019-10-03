import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Alert, Table, Card, CardHeader, Modal, ModalHeader, ModalBody, ModalFooter,  CardBody, Container, Row, Col,Spinner ,} from 'reactstrap';
import { getAllActionsAsyncCreator as getAll } from '../../store/modules/user/get-all.actions';
import { deleteActionsAsyncCreator } from '../../store/modules/user/delete.actions';
import { FaTrashAlt,FaRegEye,FaRegUser } from 'react-icons/fa';
import ModalLoading from '../../components/loading/ModalLoading';

const UserList = (props) => {
    const dispatch = useDispatch();
    const { data, error,  errorMessage, loading } = useSelector((store) => store.user.getAll);

    const [userDelete, setUserDelete] = useState(null);

    useEffect(() => {
        dispatch(getAll())
    }, [dispatch]);

    const handlerDelete = () => {
        const id = userDelete.id;
        setUserDelete(null)
        
        dispatch(deleteActionsAsyncCreator(id));
    }

    return (
        <div className="user-list-view">
            <Container>
                <ModalLoading loading = {loading} /> 
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Listado de usuarios
                                <Link to="/dashboard/users/create" className="btn btn-info float-right">+ <FaRegUser/></Link>
                            </CardHeader>
                            <CardBody>
                                
                            {loading  ?  
                                (<Spinner size="sm"  animation="border" role="status"></Spinner>) 
                                : 
                                (<Table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th clospan="2"/>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((e, i) => (
                                            <tr key={e.id}>
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.email}</td>
                                                <td>
                                                    <Link className="btn btn-info" to={`/dashboard/users/view/${e.id}`}><FaRegEye /></Link> 
                                                    <Button className="btn btn-danger " onClick={() => setUserDelete(e)}><FaTrashAlt /></Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                )}
                                
                                
                                {error && (<Alert color="danger">{errorMessage}</Alert>)}
                                {!loading && (<Alert color="success">Lista cargada</Alert>)}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        <Modal isOpen={userDelete !== null} toggle={() => setUserDelete(null)}>
          <ModalHeader toggle={() => setUserDelete(null)}>Eliminar</ModalHeader>
          <ModalBody>
              Esta seguro que desea eliminar {userDelete && userDelete.name}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setUserDelete(null)}>Cancelar</Button>{' '}
            <Button color="primary" onClick={handlerDelete}>Confirmar</Button>
          </ModalFooter>
        </Modal>

        </div>
    );
};

export default UserList;
