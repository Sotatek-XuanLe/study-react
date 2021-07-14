import TextField from '@material-ui/core/TextField';
import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Row, } from 'react-bootstrap';
import './AccountDetail.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hook';
import { useAppSelector } from '../../store/hook';
import { saveBeginEdit } from '../../store/account';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
// import { useCookies } from 'react-cookie';

interface Study {
  id?: number,
  name?: string,
  phone?: string,
  email?: string,
}
interface newData {
  saveData(res: any): void;
}
const AccountDetail: React.FC<Study> = (
  prop
) => {


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
    },
    {
      id: 4,
      account: "xuanlh",
      name: "Le Hoang Xuan",
      phone: "0336137311",
      email: "lehoangxuan@gmail.com"
    },
    {
      id: 5,
      account: "hiepmd",
      name: "Mai Danh Hiep",
      phone: "0125252563",
      email: "maidanhhiep@gmail.com"
    }
  ]);
  const [id, setId] = useState();
  const [name, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  // const [cookies] = useCookies([]);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const objActionEdit: any = useAppSelector(state => state.account.obj);
  console.log(1, objActionEdit);

  const saveData = () => {
    console.log(2, objActionEdit);

    let x: any = objActionEdit;
    let id = x && x.id ? x.id : null;
    id = id ? id : null;
    let dataInput: any = dataEmploy.find((item: any) => item.id === id);
    let stringCut;
    let number1: string = '';
    let number2: string = '';
    let number3: string = '';
    if (dataInput) {
      let y = dataInput.name.split(" ");
      number1 = y[0];
      number2 = y[1];
      number3 = y[2];
      stringCut = number3.toLocaleLowerCase() + number1.charAt(0).toLocaleLowerCase() + number2.charAt(0).toLocaleLowerCase();
    } else {
      let y = name.split(" ");
      number1 = y[0];
      number2 = y[1];
      number3 = y[2];
      if (number2 && number3) {
        stringCut = number3.toLocaleLowerCase() + number1.charAt(0).toLocaleLowerCase() + number2.charAt(0).toLocaleLowerCase();
      } else {
        stringCut = name
      }
    };
    let obj = {
      id: objActionEdit.id,
      account: stringCut,
      name: name,
      phone: phone,
      email: email
    };
    console.log('edit', obj);
    // lưu vào storage
    let objStorage = Object.assign({}, obj);
    localStorage.setItem("arrs", JSON.stringify(objStorage));
    // truyen data sang component cha
    dispatch(saveBeginEdit(obj));
    toast.success("Add Success !", {
      position: toast.POSITION.TOP_RIGHT
    });
    // history.push('/account');
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
  const changeId = (data: any) => {
    setId(data)
  }
  useEffect(() => {
    const x: any = Object.assign({}, objActionEdit);
    const dataInput: any = x;
    setFullName(dataInput && dataInput.name ? dataInput.name : '');
    setPhone(dataInput && dataInput.phone ? dataInput.phone : '');
    setEmail(dataInput && dataInput.email ? dataInput.email : '');
    return (() => {
      // clean 
      let obj = {};
      dispatch(saveBeginEdit(obj));
    })
  }, [])
  return (
    <div>
      <form >
        <Container>
          <Row>
            <Col md="4" style={{ display: "none" }}>
              <TextField id="id" defaultValue={id} label="Id" value={id} variant="outlined" />
            </Col>
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



