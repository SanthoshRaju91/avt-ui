import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

import { ReactComponent as BackIcon } from '../assets/left-arrow.svg';

function Upload({close}) {
    
    const onDrop = useCallback(acceptedFiles => {

    });

    const { getInputProps, getRootProps } = useDropzone({ onDrop });

    function formSubmit() {

    }

    return (
        <div className="upload-form absolute w-4/12 top-0 right-0 shadow-lg h-screen bg-white">
            <div className="container p-16">
                <button onClick={close}>
                <BackIcon className="w-10 inline-block"/>
                </button>
                <h1 className="mt-10 text-3xl font-black tracking">Upload data file for processing</h1>

                <p className="w-10/12 mt-2 text-gray-500">
                    Upload a tsv/csv file of your static data. The tool will analyze, pick key data points and provide visualisation of your data.
                </p>
                <form className="mt-8" onSubmit={formSubmit}>
                    <div className="my-4">
                        <label className="block text-gray-700">Name</label>
                        <input className="px-2 rounded h-12 border border-gray-400 w-full mt-3" type="text" placeholder="City data"/>
                    </div>
                    <div className="my-4">
                        <label className="block text-gray-700">Upload File</label>
                        <div {...getRootProps()}>
                            <input {...getInputProps()}/>
                            <div className="drop-zone mt-3 px-2 py-4 bg-gray-300 rounded-lg">
                                <h1 className="text-center text-xl font-medium tracking text-gray-700">Click or drag your files here</h1>
                                <h4 className="mt-2 text-center text-sm text-blue-600">Only *.tsv, *.csv files are accepted</h4>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <button className="bg-blue-500 w-3/12 px-6 py-3 rounded-md text-white" type="submit">Upload</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Upload;