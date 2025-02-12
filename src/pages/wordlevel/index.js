import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../wordlevel/style.css'
const WordSkill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu
        axios.get('https://67aacc0565ab088ea7e77fb0.mockapi.io/wordlevel')
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi gọi API:', error);
            });
    }, []);

    return (
        <div className='container-word-level'>
            <h1>Tìm việc làm IT theo kỹ năng</h1>
            <div className='boder'></div>
            <div className='word-level'>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default WordSkill;
