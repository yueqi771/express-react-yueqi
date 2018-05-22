import React, { Component } from 'react';
import { NavBar, Icon, InputItem, TextareaItem, Button  } from 'antd-mobile';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { saveInfo } from '../../actions/userAction' 
import AvatarSelecter from '../../component/avatarSelecter/avatarSelecter'

class BossInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            company: '',
            money: '',
            desc: '',
            avatar: '',
        }
    }

    onChange(key, value) {
        console.log(key)
        console.log(value)
        this.setState({
            [key]: value
        })
    }

    render() {
        const path = this.props.location.pathname;
        const redirect = this.props.userInfo.redirectTo;

        return (
            <div className="boss-info">
                { redirect && redirect !== path ? <Redirect to={this.props.userInfo.redirectTo}/>  : null  }

                <NavBar mode="dark" >完善信息</NavBar>
                <AvatarSelecter selectAvatar={(imgname) => {
                    this.setState({
                        avatar: imgname
                    })
                }} />
                <InputItem onChange={(value) => this.onChange('title', value)}>招聘职位</InputItem>
                <InputItem onChange={(value) => this.onChange('company', value)}>公司名称</InputItem>
                <InputItem onChange={(value) => this.onChange('money', value)}>职位薪资</InputItem>
                <TextareaItem
                    title="职位要求"
                    data-seed="logId"
                    autoHeight
                    rows={3}
                    onChange={(value) => this.onChange('desc', value)}
                />
                
                <Button type="primary" onClick={() => {
                    this.props.saveInfo(this.state)
                }}>保存</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    saveInfo: bindActionCreators(saveInfo, dispatch)
})

const BossInfoContainer = connect(mapStateToProps, mapDispatchToProps)(BossInfo)
export default BossInfoContainer;