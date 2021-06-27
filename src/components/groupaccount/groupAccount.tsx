import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Container } from 'react-bootstrap';
interface GroupAccount {
    id?: string,
    title?: string,
    description?: string,
}
const GroupAccount: React.FC<GroupAccount> = (
) => {
    const [dataList, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(10);
    const prePage = (prevPage: number) => {
      setPage((prevPage) => prevPage - 1);
    };
  
    const nextPage = (nextPage: number) => {
      setPage((nextPage) => nextPage + 1);
    };
    useEffect(() => {
        async function getListData() {
            try {
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?_limit=5&_page=${page}`
                const response = await fetch(requestUrl)
                const responseJSON = await response.json();
                const newData: any = [...responseJSON.data];
                setData(newData);
                setTotalPages(totalPages);
            } catch (err) {
                return;
            }
        }
        getListData()
    }, [page]);

    return (
        <div>
            <form >
                <Container>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>FullName</th>
                                    <th>Account</th>
                                    <th>Description</th>
                                    <th>Images</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dataList.map((item: any) => <tr key={item.id}>
                                        <td >{item.author}</td>
                                        <td >{item.title}</td>
                                        <td >{item.description}</td>
                                        <td >
                                            <img style={{ width: "50px", height: "50px" }} src={item.imageUrl} alt="" />
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <button type="button" disabled={page < 1} onClick={() => prePage(page - 1)}>Prev</button>
                        <button type="button" disabled={page > totalPages} onClick={() => nextPage(page + 1)}>Next</button>
                    </Row>
                </Container>
            </form>
        </div>
    )
}
export default GroupAccount;


