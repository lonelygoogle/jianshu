import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/'></Logo>
            <Nav>
                <NavItem className="left">首页</NavItem>
                <NavItem className="left">下载app</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                        className={props.focused ? 'focused': ''}
                        onFocus={props.handleInputFocus}
                        onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe682;</i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="write">
                    <i className="iconfont">&#xe624;</i>
                    写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )

}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus () {
            const action = {
                type: 'seach_focus'
            }
            dispatch(action)
        },
        handleInputBlur () {
            const action = {
                type: 'seach_blur'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)