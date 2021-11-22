import React, { VFC } from 'react';
import { Route, Switch } from 'react-router';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Works } from '../components/pages/Works';
import { workstest } from '../components/pages/workstest';
import Informations from '../components/pages/Informations';
import { HeaderLayout } from '../components/templates/HeaderLayout';

export const Router: VFC = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <HeaderLayout>
            <Home />
          </HeaderLayout>
        </Route>
        <Route path='/informations'>
          <HeaderLayout>
            <Informations />
          </HeaderLayout>
        </Route>
        <Route path='/works'>
          <HeaderLayout>
            {/* <Works /> */}
            <workstest />
          </HeaderLayout>
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};
