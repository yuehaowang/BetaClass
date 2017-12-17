import React from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import TimePicker from 'material-ui/TimePicker';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';


class DiscussionRoom extends React.Component {
	render() {
		return (
			<div style={{padding: 20}}>
				<h1>预订房间</h1>

				<TextField hintText="房间名称"/>
				<br />

				<SelectField floatingLabelText="地点" value={3}>
					<MenuItem value={1} primaryText="信息学院1D-107" />
					<MenuItem value={2} primaryText="信息学院1D-108" />
					<MenuItem value={3} primaryText="会议中心" />
					<MenuItem value={4} primaryText="信息学院203" />
				</SelectField>
				<br />

				<TimePicker
					hintText="开始时间"
					autoOk={true}
				/>
				<br />

				<TextField
					hintText="详细描述"
					floatingLabelText="添加描述"
					multiLine={true}
					rows={2}
				/>
				<br />

				<RaisedButton style={{marginTop: 50}} onClick={()=>{this.props.mainApp.back()}}>提交请求</RaisedButton>
			</div>
		);
	}
}

export default DiscussionRoom;
