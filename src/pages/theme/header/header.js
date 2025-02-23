import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../assets/images/logo_itviec.webp';
import { ROUTE } from "../../../utils/route";

const Header = () => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState([
        {
            name: "Việc Làm IT",
            path: "/jobs",
            isShowSubmenu: false,
            child: [
                {
                    name: "Việc làm IT theo kỹ năng",
                    path: ROUTE.USER.WORD_SKILL,
                    isShowApiMenu: false,
                    apiMenu: []
                },
                {
                    name: "Việc làm IT theo cấp bậc",
                    path: ROUTE.USER.WORD_LEVEL,
                    isShowApiMenu: false,
                    apiMenu: []
                },
                {
                    name: "Việc làm IT theo công ty",
                    path: ROUTE.USER.WORD_CONGTY,
                    isShowApiMenu: false,
                    apiMenu: []
                },
                {
                    name: "Việc làm IT theo thành phố",
                    path: ROUTE.USER.WORD_CITY,
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

    const toggleSubmenu = (index, isShow) => {
        setMenu(menu.map((item, i) =>
            i === index ? { ...item, isShowSubmenu: isShow } : item
        ));
    };

    const fetchApiMenu = async (parentIndex, childIndex, apiUrl) => {
        try {
            const response = await axios.get(apiUrl);
            const apiMenu = response.data;
            
            setMenu(menu.map((item, i) => {
                if (i === parentIndex) {
                    const updatedChild = item.child.map((child, j) => {
                        if (j === childIndex) {
                            return { ...child, isShowApiMenu: true, apiMenu };
                        }
                        return child;
                    });
                    return { ...item, child: updatedChild };
                }
                return item;
            }));
        } catch (error) {
            console.error('Error fetching API menu data:', error);
        }
    };

    // Xử lý khi click vào submenu
    const handleSubmenuClick = (skillName, category) => {
        // Chuyển đổi tên skill thành dạng URL hợp lệ (loại bỏ ký tự đặc biệt)
        const formattedName = encodeURIComponent(skillName.toLowerCase());
        let path = '';

        switch (category) {
            case 'skill':
                path = `/tim-viec-lam-it/${formattedName}`;
                break;
            case 'level':
                path = `/tim-viec-lam-it-theo-cap-bac/${formattedName}`;
                break;
            case 'company':
                path = `/viec-lam-it-theo-cong-ty/${formattedName}`;
                break;
            case 'city':
                path = `/viec-lam-it-theo-thanh-pho/${formattedName}`;
                break;
            default:
                break;
        }

        navigate(path);
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
                                <li key={index}
                                    className="menu-item"
                                    onMouseEnter={() => item.child && toggleSubmenu(index, true)}
                                    onMouseLeave={() => item.child && toggleSubmenu(index, false)}>
                                    <Link to={item.path}>{item.name}</Link>
                                    {item.child && item.isShowSubmenu && (
                                        <ul className="dropdown">
                                            {item.child.map((subItem, subIndex) => (
                                                <li key={subIndex}
                                                    onMouseEnter={() =>
                                                        subItem.path === ROUTE.USER.WORD_SKILL ?
                                                            fetchApiMenu(index, subIndex, 'https://67aacc0565ab088ea7e77fb0.mockapi.io/WordSkill') :
                                                            subItem.path === ROUTE.USER.WORD_LEVEL ?
                                                                fetchApiMenu(index, subIndex, 'https://67aacc0565ab088ea7e77fb0.mockapi.io/wordlevel') :
                                                                    subItem.path === ROUTE.USER.WORD_CONGTY ?
                                                                        fetchApiMenu(index, subIndex, 'https://67b2ea33bc0165def8cf207b.mockapi.io/apiCongtyapiCongty') :
                                                                null
                                                    }>
                                                    <Link to={subItem.path}>{subItem.name}</Link>
                                                    {subItem.apiMenu && subItem.isShowApiMenu && (
                                                        <ul className="dropdown-submenu">
                                                        {subItem.apiMenu.map((apiItem, apiIndex) => (
                                                            <li key={apiIndex}
                                                            
                                                                onClick={() => handleSubmenuClick(apiItem.name, subItem.path === ROUTE.USER.WORD_SKILL ? 'skill' : 
                                                                                                    subItem.path === ROUTE.USER.WORD_LEVEL ? 'level' : 
                                                                                                    subItem.path === ROUTE.USER.WORD_CONGTY ? 'congty' : 
                                                                                                    subItem.path === ROUTE.USER.WORD_CITY ? 'city' : '')}
                                                                style={{ cursor: "pointer" }}>
                                                                <Link to="/hheh">{apiItem.name}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    
                                                    )}
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
