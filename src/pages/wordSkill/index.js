import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../wordSkill/style.css';

const WordSkill = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Gọi API để lấy dữ liệu
        axios.get('https://67aacc0565ab088ea7e77fb0.mockapi.io/WordSkill')
            .then(response => {
                setSkills(response.data);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi gọi API:', error);
            });
    }, []);

    return (
        <div className='container-word-skill'>
            <h1 className="h1">Tìm việc làm IT theo kỹ năng</h1>
            <div className='word-skill'>
                {skills.map((skill, index) => (
                    <Link to={`/tim-viec-lam-it/${skill.name.toLowerCase()}`} key={index} className="skill-button">
                        {skill.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default WordSkill;
