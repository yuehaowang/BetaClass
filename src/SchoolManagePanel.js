import React from 'react';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import MdIconChangeHistory from 'material-ui/svg-icons/action/change-history';
import Avatar from 'material-ui/Avatar';
import MdIconList from 'material-ui/svg-icons/action/list'
import fig2 from './assets/fig2.png'


class SchoolManangePanel extends React.Component {
	render() {
		return (
			<Card>
				<CardHeader
					title='上海中学'
					subtitle='上海中学官方学生管理系统'
					avatar={<Avatar>上</Avatar>}
				/>
				<CardMedia>
					<div>
						<List>
							<Divider />
							<ListItem
								key={1}
								insetChildren={true}
								primaryText='一班'
								leftIcon={<MdIconList />}
								nestedItems={[
									<ListItem
										key={0}
										primaryText='物理'
										leftIcon={<MdIconChangeHistory />}
									/>,
									<ListItem
										key={0}
										primaryText='教师 - 柳老师'
										leftIcon={<MdIconChangeHistory />}
									/>,
									<ListItem
										key={1}
										primaryText={
											<img src={fig2} width={300} alt='fig2' />
										}
										leftIcon={<MdIconChangeHistory />}
									/>
								]}
							/>
							<Divider />
							<ListItem
								key={2}
								insetChildren={true}
								primaryText='二班'
								leftIcon={<MdIconList />}
								nestedItems={[
									<ListItem
										key={0}
										primaryText='英语'
										leftIcon={<MdIconChangeHistory />}
									/>,
									<ListItem
										key={1}
										primaryText='朱小坤'
										leftIcon={<MdIconChangeHistory />}
									/>
								]}
							/>
							<Divider />
							<ListItem
								key={3}
								insetChildren={true}
								primaryText='三班'
								leftIcon={<MdIconList />}
								nestedItems={[
									<ListItem
										key={0}
										primaryText='崔小舟'
										leftIcon={<MdIconChangeHistory />}
									/>,
								]}
							/>
							<Divider />
						</List>
					</div>
				</CardMedia>
				<CardActions>
					<FlatButton label='更改信息' />
				</CardActions>
			</Card>
		);
	}
}

export default SchoolManangePanel;


