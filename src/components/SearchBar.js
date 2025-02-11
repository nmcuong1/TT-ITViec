import React from 'react';
import '../assets/styles/SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <select className="city-dropdown">
        <option value="all">Tất cả thành phố</option>
        <option value="ho-chi-minh">Ho Chi Minh</option>
        <option value="ha-noi">Ha Noi</option>
        <option value="da-nang">Da Nang</option>
        <option value="others">Others</option>
      </select>
      <input type="text" className="search-input" placeholder="Nhập từ khoá theo kỹ năng, chức vụ, công ty..." />
      <button className="search-button">Tìm Kiếm</button>
    </div>
  );
}

export default SearchBar;
