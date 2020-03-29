import React from 'react'
import { withRouter } from 'next/router'
function Item(props) {
    const { router } = props;
    return (
        <p>This is item {router.query.id}</p>
    )
}

export default withRouter(Item)