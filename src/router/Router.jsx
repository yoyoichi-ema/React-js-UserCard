import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <DefaultLayout>
            <Users />
          </DefaultLayout>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
