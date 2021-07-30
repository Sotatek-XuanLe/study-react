import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useAppSelector } from '../../store/hook';
import { useAppDispatch } from '../../store/hook';
import { getAccountClick } from '../../store/account';
import './Account.scss';

interface Study {
  id?: any,
  name?: string,
  account?: string,
  phone?: string,
  email?: string,
}
const Account: React.FC<Study> = (
  prop,
) => {
  const [data2] = useState([localStorage.getItem('arrs')]);
  const [data, setData] = useState([
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
  const history = useHistory();
  const dispatch = useAppDispatch();
  // nhan data tu component con
  const objAccount: any = useAppSelector(state => state.account.obj);
  useEffect(() => {
    // edit
    let index = data.findIndex(item => item.id === objAccount.id);
    if (index > -1) {
      let objClone = {
        name: objAccount.name,
        phone: objAccount.phone,
        email: objAccount.email,
      };
      let dataClone = [...data];
      dataClone[index].name = objClone.name;
      dataClone[index].phone = objClone.phone;
      dataClone[index].email = objClone.email;
      setData(dataClone)
    } else {
      // add
      if (objAccount && objAccount.name && objAccount.phone && objAccount.email) {
        let dataCloneAdd = [...data];
        dataCloneAdd.push(objAccount);
        setData(dataCloneAdd)
      }
    }
    return (() => {
      // clean state
      let obj = {};
      dispatch(getAccountClick(obj));
    })
  }, [])

  const deleteItem = (id: any) => {
    var dataClone = [...data.filter(item => item.id !== id)]
    setData(dataClone);
  };
  const addItem = () => {
    history.push('/account/new');
  }
  const editItem = (id: any) => {
    let obj: any = data.find(item => item.id === id);
    // truyen data sang component con
    dispatch(getAccountClick(obj));
    history.push(`/account/${obj.id}`)

  }
  return (
    <div className="account">
      <form >
        <Container>
          {/* {
            true ? 'a' : 'b'
          } */}
          <div>
            <button type="button" className="btn-add" onClick={e => addItem()}>Add Item</button>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="center">Order</th>
                <th>Account</th>
                <th>FullName</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((item, index) => <tr key={item.id}>
                  <td >{index + 1}</td>
                  <td >{item.account}</td>
                  <td >{item.name}</td>
                  <td >{item.email}</td>
                  <td >{item.phone}</td>
                  <td >
                    <div className="col-md-6">
                      {/* <Link to={
                        {
                          pathname: `/account/${item.id}`,
                          state: { id: item.id }
                        }
                      }>Edit</Link> */}

                      <button type="button" className="btn-edit" onClick={e => editItem(item.id)}>Edit</button>
                    </div>
                    <div className="col-md-6">
                      <button type="button" className="btn-delete" onClick={e => deleteItem(item.id)}>Delete</button>
                    </div>
                  </td>
                </tr>)
              }
            </tbody>
          </Table>
        </Container>
      </form>
    </div>
  )
}
export default Account;


