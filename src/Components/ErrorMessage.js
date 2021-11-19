import {Alert} from 'react-bootstrap';
const AlertMessage = (props)=>{

    <Alert variant={props.variant} style={{fontSize:20}}>
        <strong>{props.children}</strong>
        </Alert>

}

export default AlertMessage;