import React from 'react';

export const ContactItem = ({ avatarUrl, name, phone, email }) => {
    return (
      <li className="item">
        <img src={avatarUrl} className="ui mini rounded image" alt="" />
        <div className="content">
          <h4 className="header"><a href="/description">{name}</a></h4>
          <div className="description">{phone}</div>
          <div className="id">{email}</div>
        </div>
      </li>
    );
  };