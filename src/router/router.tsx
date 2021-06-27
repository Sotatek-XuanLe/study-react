import { Route } from 'react-router-dom';
import Account from '../components/account/Account';
import AccountDetail from '../components/account/AccountDetail';
import GroupAccount from '../components/groupaccount/groupAccount';
const paths = {
    account: '/account',
    accountdetails: '/account/:id',
    groupAccount:'/groupaccount'
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
    },
    groupAccount: {
        exact: true,
        path: paths.groupAccount,
        component: GroupAccount,
        route: Route
    }
}

export default routers;


