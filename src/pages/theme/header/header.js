import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logo_itviec.webp';
import { ROUTE } from "../../../utils/route";

const Header = () => {

    const [menu, setMenu] = useState([
        {
            name: "Việc Làm IT",
            path: "/jobs",
            isShowSubmenu: false,
            child: [
                {
                    name: "Việc làm IT theo kỹ năng",
                     path: ROUTE.USER.WORD_SKILL,
                },
                {
                    name: "Việc làm IT theo cấp bậc",
                    path: ROUTE.USER.WORD_LEVEL,
                },
                {
                    name: "Việc làm IT theo công ty",
                    path: ROUTE.USER.WORD_CONGTY,
                },
                {
                    name: "Việc làm IT theo thành phố",
                    path: ROUTE.USER.WORD_CONGTY,
                },
            ]
        },
        {
            name: "Top Công ty IT",
            path: "/companies",
        },
        {
            name: "Blog",
            path: "/blog",
        }
    ]);

    const toggleSubmenu = (index) => {
        setMenu(menu.map((item, i) => {
            if (i === index) {
                return { ...item, isShowSubmenu: !item.isShowSubmenu };
            }
            return item;
        }));
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-6">
                    <nav>
                        <Link to="/">
                            <img src={logo} alt="ITviec Logo" className="logo" />
                        </Link>
                        <ul>
                            {menu.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.path} onClick={() => item.child && toggleSubmenu(index)}>
                                        {item.name}
                                    </Link>
                                    {item.child && item.isShowSubmenu && (
                                        <ul className="dropdown">
                                            {item.child.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link to={subItem.path}>{subItem.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="col-6 end">
                    <nav>
                        <ul>
                            <li><Link to="/jobs">Nhà Tuyển dụng</Link></li>
                            <li><Link to="/companies">Đăng Nhập/Đăng Ký</Link></li>
                            <li><Link to="/blog">VN|EN</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
