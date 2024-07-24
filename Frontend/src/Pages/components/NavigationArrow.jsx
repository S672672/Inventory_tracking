import React from 'react'

export default function NavigationArrow() {
    return (
        <div className="navigation-arrows">
            <button className="prev" onClick={() => console.log('Previous item')}>
                {'<'}
            </button>
            <div className="item-count">1/12</div>
            <button className="next" onClick={() => console.log('Next item')}>
                {'>'}
            </button>
        </div>
    );
}