import React from 'react'
import Link from 'next/link'

const List = () => {

    function renderList() {
        let array = []
        for (let i = 0; i < 10; i++) {
            const href = `/list/${i}`
            array.push(<li key={i}>
                <Link href={href}>
                    <a>item {i}</a>
                </Link></li>)
        }
        return array;
    }

    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List