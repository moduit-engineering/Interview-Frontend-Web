import React from 'react'
import LogoImg from '../../static/assets/layouts/layout/img/moduit_icon.png'
export const Logo = () => (
  <div className="page-logo">
    <a href="/">
      <img height="28" width="100" src={LogoImg} alt="logo" className="logo-default" /> </a>
    <div className="menu-toggler sidebar-toggler">
      <span></span>
    </div>
  </div>
)

export default Logo
