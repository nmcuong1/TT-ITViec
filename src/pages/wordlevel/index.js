import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../wordlevel/style.css';

const WordLevel = () => {
    const [levels, setLevels] = useState([]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu
        axios.get('https://67aacc0565ab088ea7e77fb0.mockapi.io/wordlevel')
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    setLevels(response.data);
                } else {
                    setLevels([]); // Ensure levels is always an array
                }
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi gọi API:', error);
                setLevels([]); // Set an empty array on error
            });
    }, []);

    return (
        <div className='container-word-level'>
            <h1 className="h1">Tìm việc làm IT theo cấp bậc</h1>
            <div className='word-level'>
                {levels.length > 0 ? (
                    levels.map((level, index) => (
                        <Link to={`/tim-viec-lam-it-theo-cap-bac/${level.name.toLowerCase()}`} key={index} className="level-button">
                            {level.name}
                        </Link>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        </div>
    );
}

export default WordLevel;
