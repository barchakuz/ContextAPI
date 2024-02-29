import React, { useState, useEffect } from 'react';

function InfoPage() {
    const [data, setData] = useState(null); // Initialize as null

    useEffect(() => {
        // Fetch data asynchronously
        fetch('https://api.github.com/users/barchakuz')
            .then(response => response.json())
            .then(info => setData(info))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures effect runs only once

    // Render conditionally based on data availability
    return (
        <div className='bg-slate-400 grid ml-28'>
            {/* Conditionally render data when available */}
            {data && (
                <>
                    <h1>Name: {data.name}</h1>
                    <img src={data.avatar_url} alt="Avatar" />
                    <h3>Followers URL: {data.followers_url}</h3>
                </>
            )}
        </div>
    );
}

export default InfoPage;
