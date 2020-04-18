import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as UploadIcon } from '../assets/upload.svg';

function Header({ upload }) {
    return (
        <header className="w-full mt-4">
            <div className="w-10/12 m-auto pb-5 border-b border-gray-200 flex items-center">
                <div className="logo-container w-6/12">
                    <Link to="/">
                        <img className="inline-block" src="/logo.png" alt="Logo" width="50" height="50" />
                        <h5 className="inline-block text-green-500 align-middle text-xl tracking-wider font-black ml-5">AVT</h5>
                    </Link>
                </div>
                <div className="actions-container w-6/12">                    
                    <button className="align-middle text-red-500 font-semibold text-md float-right" onClick={upload}>
                        <UploadIcon className="inline-block w-8 text-red-500 pr-2 upload-icon"/>
                        Upload data file to process
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;