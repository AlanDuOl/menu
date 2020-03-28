import React from 'react'
import data from '../data/menu';
import Section from './Section'

function Content() {
    return (
        <main className="content">
            <Section />
        </main>
    )
}

function getData() {
    if (typeof data.menu === 'object') {
        console.log(data)
    }
    else {
        console.log('Unexpected type')
    }
}

export default Content