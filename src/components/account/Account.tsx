import React, { useState,useEffect} from 'react';
import { Container, Table,Button } from 'react-bootstrap';
import { Switch,Route,Link } from 'react-router-dom';
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
  useEffect(() => {
  },[])
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
    }
  ]);
  const deleteItem = (id: any) => {
    var dataClone = [...data.filter(item => item.id !== id)]
    setData(dataClone);
  }

  const editItem = (id: any) => {
    console.log('edit', id);
  };
  return (
    <div className="account">
      <form >
        <Container>
          {/* {
            true ? 'a' : 'b'
          } */}
          <Button>
          <Link style={{color:'#fff'}} to={
                        {
                          pathname:`/account`,
                        }
                      }>Add</Link>
          </Button>
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
                data.map(item => <tr key={item.id}>
                  <td >{item.id}</td>
                  <td >{item.account}</td>
                  <td >{item.name}</td>
                  <td >{item.email}</td>
                  <td >{item.phone}</td>
                  <td >
                    <div className="col-md-6">
                      <Link to={
                        {
                          pathname:`/account/${item.id}`,
                          state:{id:item.id}
                        }
                      }>Edit</Link>
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


