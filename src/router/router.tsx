import { Route } from 'react-router-dom';
import Account from '../components/account/Account';
import AccountDetail from '../components/account/AccountDetail';
import GroupAccount from '../components/groupaccount/groupAccount';
import Home from '../components/menu/Home';
import Menu from '../components/menu/Menu';
import Register from '../components/Register/Register';
import SignIn from '../components/SignIn/SignIn';
import PrivateRoute from './privateRoute'

const paths = {
    account: '/account',
    accountdetails: '/account/:id',
    groupAccount:'/groupaccount',
    Register:'/register',
    SignIn:'/signin',
    menu:'/menu',
    home:'/home',

};
const routers =
{
    home: {
        exact: true,
        path: paths.account,
        component: Home,
        route: PrivateRoute
    },
    menu: {
        exact: true,
        path: paths.menu,
        component: Menu,
        route: PrivateRoute
    },
    account: {
        exact: true,
        path: paths.account,
        component: Account,
        route: PrivateRoute
    },
    accountdetail: {
        exact: true,
        path: paths.accountdetails,
        component: AccountDetail,
        route: PrivateRoute
    },
    groupAccount: {
        exact: true,
        path: paths.groupAccount,
        component: GroupAccount,
        route: PrivateRoute
    },
    Register: {
        exact: true,
        path: paths.Register,
        component: Register,
        route: Route
    },
    SignIn: {
        exact: true,
        path: paths.SignIn,
        component: SignIn,
        route: Route
    },
}

export default routers;


