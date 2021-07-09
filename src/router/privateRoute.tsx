import React, { FC } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface Props {
  component: typeof React.Component;
  auth: boolean;
}

const PrivateRoute: FC<Props> = ({
  component: Component,
  auth = localStorage.getItem('token'),
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) =>
      auth ? <Component {...props} /> : <Redirect to={'/signin'} />
    }
  />
);

export default PrivateRoute;
