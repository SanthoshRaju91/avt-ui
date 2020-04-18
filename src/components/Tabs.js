import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Tabs({ tabs = [], children}) {
    const [ selected, setSelected ] = useState('')

    useEffect(() => {
        if (tabs.length) {
            setSelected(tabs[1].label)
        }
    }, [tabs])


    return (
        <div className="tabs w-10/12 m-auto mt-10">
            <div className="flex">
                {tabs.map(tab => (
                    <div className="mr-10">
                        <Link 
                            to={tab.route}
                            key={tab.label} 
                            className={`px-4 py-2 text-md tracking-wider  ${tab.label === selected ? 'bg-green-500 text-white rounded-md' : 'text-gray-600'}`}
                            onClick={() => setSelected(tab.label)}
                        >
                            {tab.label}
                        </Link>
                    </div>                
                ))}

                
            </div>
            {children(selected)}
        </div>        
    )
}

export default Tabs;