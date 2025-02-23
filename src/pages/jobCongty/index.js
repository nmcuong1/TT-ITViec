import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "../jobCongty/styles.css"
import { BiColor } from 'react-icons/bi';

const JobCongty = () => {
    const { Congty } = useParams();
    const [companyInfo, setCompanyInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (Congty) {
            axios.get(`https://67b2ea33bc0165def8cf207b.mockapi.io/apiCongty?nameCongty=${Congty}`)
                .then(response => {
                    const data = response.data.length > 0 ? response.data[0] : null;
                    setCompanyInfo(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError('Có lỗi xảy ra khi gọi API');  
                    setLoading(false);
                });
        }
    }, [Congty]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!companyInfo) {
        return <div>Không có thông tin công ty cho "{Congty}"</div>;
    }

    return (
        <div>
            <div className='container-body'>
                <div className="logo-container">
                    <img src={companyInfo.logoCongty} alt="Company Logo" />
                </div>
                <div className="" style={{padding:'20px'}}>
                    <h1 style={{color: 'white', height: '20px'}}>{Congty.toLocaleUpperCase()}</h1>
                    <div className="button-container">
                    <button className='btn-1' type="button">Viết đánh giá</button>
                    <button className='btn-2' type="button">Theo dõi</button>
                </div>
                </div>
                
            </div>
            <div>

            </div>
            <div>
                <div className='genneral-info'>
                    <div><h2>Thông tin chung</h2></div>
                    <div className='info'>
                        <p><strong>Mô hình công ty:</strong> {companyInfo.Genneral_if[0]["Company Model"]}</p>
                        <p><strong>Ngành:</strong> {companyInfo.Genneral_if[0]["Industry"]}</p>
                        <p><strong>Quy mô công ty:</strong> {companyInfo.Genneral_if[0]["Company Size"]}</p>
                        <p><strong>Quốc gia:</strong> {companyInfo.Genneral_if[0]["Country"]}</p>
                        <p><strong>Giờ làm việc:</strong> {companyInfo.Genneral_if[0]["Working Hours"]}</p>
                        <p><strong>Thời gian làm thêm:</strong> {companyInfo.Genneral_if[0]["Overtime"]}</p>
                    </div>
                </div>
                <div className='company'>
                    <p><strong>Giới thiệu công ty:</strong></p>
                    {companyInfo.Company_it.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                {/*  */}
            </div>
        </div>
    );
};

export default JobCongty;
