import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../../models/todo'
import { Button } from 'antd'

interface IProps {
    active: boolean,
    children: React.ReactNode,
    onClick: () => void
}

const Link = (props: IProps) => {

    const { active, children, onClick } = props
    return (
        <Button
            onClick={onClick}
            disabled={active}
            style={{
                marginLeft: '4px'
            }}
        >
            {children}
        </Button>
    )
}

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)