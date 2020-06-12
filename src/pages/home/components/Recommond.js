import React, { Component } from 'react'
import { RecommondWrapper, RecommondItem } from '../style'
import { connect } from 'react-redux'

class Recommond extends Component {
    render () {
        const { list } = this.props
        return (
            <RecommondWrapper>
                {
                    list.map((item) => {
                        return (
                            <RecommondItem 
                                imgUrl={item.get('imgUrl')}
                                key={item.get('id')}
                            ></RecommondItem>
                        )
                    })
                }
            </RecommondWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommondList'])

})
export default connect(mapState, null)(Recommond)