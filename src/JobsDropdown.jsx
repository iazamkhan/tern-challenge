import React, { useState, useEffect } from 'react';
import axios from 'axios'

function JobjsDropdown(props) {
    const [data, setData] = useState([])
    const [options, setOptions] = useState(<></>)

    useEffect(() => {
       axios.get("https://api.adzuna.com/v1/api/jobs/in/categories?app_id=f7945ab6&app_key=b8aad504c1a95de5f8177b7fc6d25948")
       .then(res => console.log(res?.data.results))
       .then(res => setData(res?.data.results))
    }, [])

    useEffect(() => {
            setOptions(data?.map(item => (<option value={item.tag}>{item.label}</option>)))
    }, [data])
    // const options = (<><option value="first">First</option><option value="second">Second</option></>)

    return (
        <>
            <label for="options" style={{marginRight: '4px'}}>Select category</label>
            <select>
                {options}
            </select>
        </>
    )
}

export default JobjsDropdown;