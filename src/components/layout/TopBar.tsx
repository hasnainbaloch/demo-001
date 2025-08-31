import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { Dropdown, Avatar } from 'antd';
import { Logo } from '../ui/Logo';
import { authService } from '../../services/authService';
import type { User as UserType } from '../../types/auth';
import './TopBar.scss';

interface TopBarProps {
  onMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({ onMenuToggle, isMobileMenuOpen = false }) => {
  const navigate = useNavigate();
  const currentUser: UserType | null = authService.getCurrentUser();
  const [hasNotifications, setHasNotifications] = useState(false);

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  const handleHelpClick = () => {
    // Handle help & support click
    console.log('Help & Support clicked');
  };

  const handleNotificationClick = () => {
    // Handle notification click
    setHasNotifications(false);
    console.log('Notifications clicked');
  };

  const userMenuItems = [
    {
      key: 'profile',
      label: 'Profile',
    },
    {
      key: 'settings',
      label: 'Settings',
    },
    {
      type: 'divider' as const,
    },
    {
      key: 'logout',
      label: 'Logout',
      onClick: handleLogout,
    },
  ];

  const getUserInitials = (user: UserType | null): string => {
    if (!user) return 'U';
    if (user.name) {
      const names = user.name.split(' ');
      if (names.length >= 2) {
        return `${names[0].charAt(0)}${names[1].charAt(0)}`.toUpperCase();
      }
      return user.name.charAt(0).toUpperCase();
    }
    return user.username.charAt(0).toUpperCase();
  };

  return (
    <div className="topbar">
      {/* Left Section */}
      <div className="topbar__left">
        {/* Mobile Menu Button */}
        <button 
          className="topbar__menu-button"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="topbar__logo">
          <Logo width={121} height={32} />
        </div>
      </div>

      {/* Right Section */}
      <div className="topbar__right">
        {/* Notifications */}
        <button 
          className={`topbar__notification ${hasNotifications ? 'topbar__notification--has-notification' : ''}`}
          onClick={handleNotificationClick}
          aria-label="Notifications"
        >
          <Bell size={16} />
          {hasNotifications && <div className="topbar__notification-dot" />}
        </button>

        {/* Divider */}
        <div className="topbar__divider" />

        {/* Help & Support */}
        <button 
          className="topbar__help"
          onClick={handleHelpClick}
        >
          <HelpCircle size={16} />
          <span className="topbar__help-text">Help & Support</span>
        </button>

        {/* Divider */}
        <div className="topbar__divider" />

        {/* User Menu */}
        <Dropdown
          menu={{ items: userMenuItems }}
          placement="bottomRight"
          trigger={['click']}
        >
          <button className="topbar__user">
            <div className="topbar__user-avatar">
              <span className="topbar__user-initials">
                {getUserInitials(currentUser)}
              </span>
            </div>
            <ChevronDown size={16} className="topbar__user-chevron" />
          </button>
        </Dropdown>
      </div>
    </div>
  );
};
