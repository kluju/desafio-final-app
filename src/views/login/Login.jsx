import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Form, FormGroup, Label, Card, Container, Col, Row, CardHeader, CardBody,Alert,CardFooter,Spinner } from 'reactstrap';
import useInput from '../../hooks/userInput';
import { loginActionsAsyncCreator as loginAction } from '../../store/modules/auth/login.actions';
import ModalLoading from '../../components/loading/ModalLoading';

const Login = (props) => {
    const dispatch = useDispatch();
    const jwt = useSelector(store => store.auth.login.data);
    const { error, success, errorMessage, loading } = useSelector((store) => store.auth.login);
    const email = useInput('', 'email');
    const password = useInput('', 'password');
    const buttonIsDisabled = () => password.value === '' || email.value === '';
    useEffect(() => {
        if (jwt !== null && jwt !== undefined) {
            props.history.push('dashboard/users')
        }
    }, [jwt])

    return (
        <Container className="mt-4">
            <ModalLoading loading = {loading} /> 
            <Row>
                <Col sm={{ size: 4, offset: 4}}>
                    <Card>
                        <CardHeader>Inicio de sesión</CardHeader>
                        <CardBody>
                            <Form>
                                <pre className="text-left">
                                </pre>
                                <FormGroup>
                                    <Label>Usuario</Label>
                                    <Input {...email} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Contraseña</Label>
                                    <Input {...password} />
                                </FormGroup>

                                {loading  ?  (<Spinner size="sm" type="grow" animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>): <Button
                                    disabled={buttonIsDisabled()}
                                    onClick={() => dispatch(loginAction(email.value, password.value))}
                                >Iniciar</Button>}
                                
                            </Form>
                        </CardBody>
                        {error && (
                            <CardFooter>
                                {error && (<Alert color="danger">{errorMessage}</Alert>)}
                            </CardFooter>
                        )}
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

export default Login;