import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import './AccountDetail.scss';
import { useLocation } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';

interface Study {
  name?: string,
  phone?: string,
  email?: string,
}
const AccountDetail: React.FC<Study> = (
  prop?: any
) => {

  const [id] = useState<any>();
  const [dataEmploy, setData] = useState([
    {
      id: 1,
      account: "anhnv",
      name: "Nguyen Van Anh",
      phone: "033888999",
      email: "nguyenvananh@gmail.com"
    },
    {
      id: 2,
      account: "linhtt",
      name: "Tran Thi Linh",
      phone: "0987666555",
      email: "tranthilinh@gmail.com"
    },
    {
      id: 3,
      account: "haitq",
      name: "Tran Quang Hai",
      phone: "0987666555",
      email: "tranquanghai@gmail.com"
    }
  ]);

  const [name, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  // const [pass,setPass] = useState({text:"123456"});
  // const [color,setColor] = useState(()=>{
  //   const colorRender = 'blue';
  //   return colorRender
  // })
  const saveData = () => {
    console.log(prop)
    console.log(name)
    console.log(phone)
    console.log(email)
  };
  // set value name
  const changeName = (data: any) => {
    setFullName(data)
  }
  const changePhone = (data: any) => {
    setPhone(data)
  }
  const changeEmail = (data: any) => {
    setEmail(data)
  }
  const dataLocation = useLocation();
  useEffect(() => {
    console.log(11111);

    let x: any = dataLocation.state;
    let id = x && x.id ? x.id : null;
    let dataInput: any = dataEmploy.find(item => item.id === id);
    setFullName(dataInput && dataInput.name ? dataInput.name : '');
    setPhone(dataInput && dataInput.phone ? dataInput.phone : '');
    setEmail(dataInput && dataInput.email ? dataInput.email : '');
    // setPass({...pass,text:'abc123'})
  }, [])
  return (
    <div>
      <form >
        <Container>
          <Row>
            <Col md="4">
              <TextField id="name" defaultValue={prop.name} label="FullName" variant="outlined" value={name} onChange={(event) => { changeName(event.target.value) }} />
            </Col>
            <Col md="4">
              <TextField id="phone" defaultValue={prop.phone} label="Phone" variant="outlined" value={phone} onChange={(event) => { changePhone(event.target.value) }} />
            </Col >
            <Col md="4">
              <TextField id="email" defaultValue={prop.email} label="Email" variant="outlined" value={email} onChange={(event) => { changeEmail(event.target.value) }} />
            </Col>
            <Col md="12" style={{ display: "flex", justifyContent: "center", margin: "10px auto" }}>
              <Button className="btn-save" onClick={saveData}>Save</Button>
              <Button className="btn-back" style={{ marginLeft: "10px" }}>
                <Link style={{ color: "#333" }} to="/account">Back</Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </div >
  )
}
export default AccountDetail;


