import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ProblemListView from './ProblemListView';
import ProblemData from './assets/problem_data.json';


class ProblemPanel extends React.Component {
	select(i) {
		this.props.mainApp.setState({contentParams: {selectedIndex: i}});
	}

	render() {
		return (
			<Tabs initialSelectedIndex={this.props.mainApp.state.contentParams.selectedIndex}>
				<Tab
					label='课内'
					onActive={() => {this.select(0)}}
				>
					<ProblemListView
						problemList={ProblemData['inclass']}
						mainApp={this.props.mainApp}
					/>
				</Tab>
				<Tab
					label='课外'
					onActive={() => {this.select(1)}}
				>
					<ProblemListView
						problemList={ProblemData['outclass']}
						mainApp={this.props.mainApp}
					/>
				</Tab>
			</Tabs>
		);
	}
}

export default ProblemPanel;
