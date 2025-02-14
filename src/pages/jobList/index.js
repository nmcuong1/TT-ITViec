import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const JobList = () => {
    const { skillName } = useParams(); // Lấy tên kỹ năng từ URL
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('Skill Name:', skillName); // In ra giá trị skillName để kiểm tra
        // Gọi API để lấy danh sách việc làm theo kỹ năng
        axios.get(`https://67ada1593f5a4e1477de5d4c.mockapi.io/jobList`)
            .then(response => {
                const skillData = response.data.find(skill => skill.skillName.toLowerCase() === skillName.toLowerCase());
                if (skillData) {
                    setJobs(skillData.jobs);
                } else {
                    setJobs([]); // Nếu không tìm thấy, đặt jobs thành mảng rỗng
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
                console.error('Lỗi khi gọi API:', error);
            });
    }, [skillName]); // Chạy lại khi skillName thay đổi

    if (loading) {
        return <div>Đang tải...</div>;
    }

    if (error) {
        return <div>Có lỗi xảy ra: {error.message}</div>;
    }

    return (
        <div>
           
           <div className='header-body'>
            <h2>Công việc IT liên quan đến: {skillName.toUpperCase()}</h2>
           </div>
          
            <ul>
                {jobs.length > 0 ? (
                    jobs.map((job, index) => (
                        <li key={index}>{job.title} - {job.company} - {job.location}</li>
                    ))
                ) : (
                    <li>Không có công việc nào cho kỹ năng này.</li>
                )}
            </ul>
        </div>
    );
};

export default JobList;
