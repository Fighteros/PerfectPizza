import React from 'react'
import PropTypes from 'prop-types'


const MainSection = ({ title, subtite }) => {
    return (
        <main className="main">
            {/* this is the landing div */}
            <div className="main-title col-md-12 overlay">
                <h1>
                    {title}
                </h1>
                <h2>
                    {subtite}
                </h2>
            </div>
        </main>
    )
}


MainSection.defaultProps = {
    title: 'Fine Food Website',
    subtite: 'A free Website for getting the Nearest Resturant to you!'
}

MainSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtite: PropTypes.string.isRequired
}

export default MainSection
