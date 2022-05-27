import React, {useState} from 'react'
const axios = require('axios').default;

export async function getOptions() {
    const URL = 'https://developer.sbab.se/sandbox/api/interest-rates/2.0/mortgage-rates';
    const { data } = await axios.get(URL);
    return data;
}
