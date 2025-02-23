import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const WorkCongty= ()=>{
    const [congtys, setCongtys] = useState([]);

    //Goi APi
    useEffect(()=>{
        
            axios.get('https://67b2ea33bc0165def8cf207b.mockapi.io/apiCongty')
            .then(reponse=>{
                setCongtys(reponse.data)
            })
            .catch(error => {
                console.error('Có lỗi xảy ra khi gọi API:', error);
            });
    },[]);

    return(
        <div>
            <h1>Tìm việc làm IT theo tên công ty</h1>

            <div className='word-congty'>
                {congtys.map((congty) => (
                    <Link to={`/tim-viec-lam-it-theo-cong-ty/${congty.nameCongty.toLowerCase()}`}>{congty.nameCongty}</Link>
                ))}
            </div>

            {/* <ul>
                <li> <a href="">#ABC</a> - </li>
                <li> <a href="">DEF</a> - </li>
                <li> <a href="">GHI</a> - </li>
                <li> <a href="">JKL</a> - </li>
                <li> <a href="">MNO</a> - </li>
                <li> <a href="">PQR</a> - </li>
                <li> <a href="">STUV</a> - </li>
                <li> <a href="">WXYZ</a></li>
            </ul> */}
        </div>
    )
}


export default WorkCongty