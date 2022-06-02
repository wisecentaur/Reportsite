import React from 'react';
import { Route } from 'react-router-dom';
import { FIRSTBONUS } from '../../route/Routes';
import Card from '../card/Card';
import BonusesSidebar from '../sidebar/BonusesSidebar';

import './Bonus.scss';

interface IProps {
}

interface IState {
}

export default class Bonus extends React.Component<IProps, IState> {

	render() {
		return (
        <div className="Bonuscontent">
            <Card class="sidebarComponent">
               <BonusesSidebar/>
            </Card>
            <Card class="childComponent">
            <Route path={FIRSTBONUS}>
              First Bonus!
            </Route>
            </Card>
        </div>
        )
	}
}