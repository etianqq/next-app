import React from 'react'
import Link from 'next/link'
function List() {

    function renderList() {
        for (let i = 0; i < 10; i++) {
            const href = `/list/${i}`
            return (<li key={i}>
                <Link href={href}>
                    <a>item {i}</a>
                </Link></li>)
        }
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List