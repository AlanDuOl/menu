import React from 'react'
import Product from './Product'
import Header from './Header'

function Section(props) {
    return (
        <section className="section">
            <Header headerName={props.sectionData.name} />
            <Product />
        </section>
    )
}
export default Section