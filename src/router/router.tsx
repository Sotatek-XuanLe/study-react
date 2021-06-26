import { Route } from 'react-router-dom';
import Account from '../components/account/Account';
import AccountDetail from '../components/account/AccountDetail';
const paths = {
    account: '/account',
    accountdetails: '/account/:id'
};
const routers =
{
    account: {
        exact: true,
        path: paths.account,
        component: Account,
        route: Route
    },
    accountdetail: {
        exact: true,
        path: paths.accountdetails,
        component: AccountDetail,
        route: Route
    }
}

export default routers;


