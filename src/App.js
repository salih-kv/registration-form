import {
    Button,
    Card,
    Col,
    Form,
    Row
} from "react-bootstrap";
import {useForm} from "./Hooks";

function App() {
    return (<div className="App">
        <Row style={
            {justifyContent: "center"}
        }>
            <Col xs={4}
                className="mt-5">
                <Card className="p-4">
                    <h1 className="mb-4 text-center">sign up</h1>
                    <RegistrationForm/>
                </Card>
            </Col>
        </Row>
    </div>);
}

export default App;

function RegistrationForm() {
    const {
        values,
        handleInput,
        reset,
        validate,
        errors
    } = useForm();

    const submitForm = (e) => {
        e.preventDefault();
        if (validate()) {
            alert('submitted')
        }
    };

    return (<Form onSubmit={submitForm}>
        <InputField placeholder="Full Name" type="text" name="fullname" label="Enter your Full Name"
            value={
                values.fullname
            }
            onChange={handleInput}
            error={
                errors.fullname
            }/>
        <InputField placeholder="eg:- sample@gmail.com" type="email" name="email" label="Email Address"
            value={
                values.email
            }
            onChange={handleInput}
            error={
                errors.email
            }/>
        <InputField placeholder="Enter a strong Password" type="password" name="password" label="Password"
            value={
                values.password
            }
            onChange={handleInput}
            error={
                errors.password
            }/>
        <InputField placeholder="Repeat Password" type="password" name="confirmPassword" label="Confirm Password"
            value={
                values.confirmPassword
            }
            onChange={handleInput}
            error={
                errors.confirmPassword
            }/>
        <div className="mt-3">
            <Button type="submit">
                Register
            </Button>
            {' '}
            <Button type="submit" variant='outline-secondary'
                onClick={reset}>
                Reset
            </Button>
        </div>
    </Form>);
}

const InputField = ({
    label,
    error,
    ...props
}) => {
    return (<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> {label}</Form.Label>
        <Form.Control {...props}
            className={
                error ? 'is-invalid' : ''
            }/> {
        error && <div className="text-danger"> {error}</div>
    } </Form.Group>);
};
