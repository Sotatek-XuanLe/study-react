import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import './AccountDetail.scss';
import { useLocation } from 'react-router-dom'
interface Study {
  name?: string,
  phone?: string,
  email?: string,
}
const AccountDetail: React.FC<Study> = (
prop
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
      account: "hoavt",
      name: "Vu Thi Hoa",
      phone: "0987666555",
      email: "vuthihoa@gmail.com"
    }
  ]);

  const [name, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const saveData = () => {
    
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
    let x: any = dataLocation.state;
    let id = x && x.id ? x.id : null;
    let dataInput: any = dataEmploy.find(item => item.id === id);
    setFullName(dataInput.name);
    setPhone(dataInput.phone);
    setEmail(dataInput.email);

  },[])
  return (
    <div>
      <form >
        <Container>
          <Row>
            <Col md="4">
              <TextField id="name" defaultValue={prop.name} label="FullName" variant="outlined" value={name} onChange={(event) => { changeName(event.target.value) }} />
            </Col>
            <Col md="4">
              <TextField id="phone" label="Phone" variant="outlined" value={phone} onChange={(event) => { changePhone(event.target.value) }} />
            </Col >
            <Col md="4">
              <TextField id="email" label="Email" variant="outlined" value={email} onChange={(event) => { changeEmail(event.target.value) }} />
            </Col>
            <Col md="12">
              <Button style={{ display: "block", margin: "10px auto" }} onClick={saveData}>Save</Button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  )
}
export default AccountDetail;


