import React from 'react'

const getConfigToken = () => ({
    headers:{
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
})


export default getConfigToken