import React, { useState, useEffect } from 'react';
import axios from 'axios'

function JobjsDropdown(props) {
    const [data, setData] = useState([])
    const [optValue, setOptValue] = useState("")

    useEffect(() => {
       axios.get("https://api.adzuna.com/v1/api/jobs/in/categories?app_id=f7945ab6&app_key=b8aad504c1a95de5f8177b7fc6d25948")
       .then(res => setData(res?.data.results))
       .then(console.log(data))
    }, [])

    const handleChange = (e) => {
        setOptValue(e.target.value)
    }


    // useEffect(() => {
    //     const fetchData = async () => {
    //         const {data} = await axios.get("https://api.adzuna.com/v1/api/jobs/in/categories?app_id=f7945ab6&app_key=b8aad504c1a95de5f8177b7fc6d25948");
    //         const results = [];
    //         data.forEach((value) => {
    //             results.push({
    //                 key: value.tag,
    //                 value: value.label
    //             })
    //         })
    // setOptions([{key: 'Select a company', value: ''},
    // ...results])
    //     }
    //     fetchData();
    // }, [])

    return (
        <>
            <label for="options" style={{marginRight: '4px'}}>Select category</label>
            <select onChange={handleChange} value={optValue}>
                {data ? (
                    data.map((item) => {
                        return (
                            <option value={item.label}>{item.tag}</option>
                        )
                    })
                ) : (<></>)}
            </select>
            {optValue ? (<p>{optValue}</p>) : (<></>)}
        </>
    )
}

export default JobjsDropdown;