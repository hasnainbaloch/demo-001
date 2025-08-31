import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Users, 
  CreditCard, 
  Shield, 
  Building2, 
  ChevronDown, 
  ChevronUp,
  User,
  Mail,
  FileText,
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { Logo } from '../ui/Logo';
import './Sidebar.scss';

interface MenuItem {
  key: string;
  label: string;
  icon: React.ReactNode;
  path?: string;
  children?: MenuItem[];
}

interface SectionItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children: MenuItem[];
  expanded?: boolean;
}

const menuItems: MenuItem[] = [
  {
    key: 'accounts',
    label: 'Accounts',
    icon: <User size={20} />,
    path: '/dashboard/accounts'
  },
  {
    key: 'users',
    label: 'Users',
    icon: <Users size={20} />,
    path: '/dashboard/users'
  },
  {
    key: 'billing',
    label: 'Billing',
    icon: <CreditCard size={20} />,
    path: '/dashboard/billing'
  },
  {
    key: 'roles',
    label: 'Roles',
    icon: <Shield size={20} />,
    path: '/dashboard/roles'
  }
];

const sectionItems: SectionItem[] = [
  {
    key: 'analytics',
    label: 'Analytics',
    children: [],
    expanded: false
  },
  {
    key: 'managed-care',
    label: 'Managed Care',
    children: [],
    expanded: false
  },
  {
    key: 'workflow-configuration',
    label: 'Workflow Configuration',
    children: [
      {
        key: 'workflow',
        label: 'Workflow',
        icon: <Building2 size={20} />,
        path: '/dashboard/workflow'
      },
      {
        key: 'email',
        label: 'Email',
        icon: <Mail size={20} />,
        path: '/dashboard/email'
      },
      {
        key: 'instructions',
        label: 'Instructions',
        icon: <FileText size={20} />,
        path: '/dashboard/instructions'
      },
      {
        key: 'surveys',
        label: 'Surveys',
        icon: <MessageSquare size={20} />,
        path: '/dashboard/surveys'
      }
    ],
    expanded: true
  },
  {
    key: 'configuration',
    label: 'Configuration',
    children: [],
    expanded: false
  },
  {
    key: 'ehr-configuration',
    label: 'EHR Configuration',
    children: [],
    expanded: false
  },
  {
    key: 'tools',
    label: 'Tools',
    children: [],
    expanded: false
  }
];

const bottomMenuItem: MenuItem = {
  key: 'changelog',
  label: 'Changelog',
  icon: <BookOpen size={20} />,
  path: '/dashboard/changelog'
};

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sections, setSections] = useState<SectionItem[]>(sectionItems);

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const toggleSection = (sectionKey: string) => {
    setSections(prev => prev.map(section => 
      section.key === sectionKey 
        ? { ...section, expanded: !section.expanded }
        : section
    ));
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isSectionActive = (section: SectionItem) => {
    return section.children.some(child => child.path && isActive(child.path));
  };

  return (
    <div className="sidebar">
      {/* Header with Logo */}
      <div className="sidebar__header">
        <div className="sidebar__logo">
          <Logo width={100} height={26} />
        </div>
      </div>

      {/* Main Menu */}
      <div className="sidebar__content">
        <div className="sidebar__menu">
          {/* Regular Menu Items */}
          {menuItems.map(item => (
            <div
              key={item.key}
              className={`sidebar__menu-item ${isActive(item.path || '') ? 'sidebar__menu-item--active' : ''}`}
              onClick={() => item.path && handleMenuClick(item.path)}
            >
              <div className="sidebar__menu-icon">
                {item.icon}
              </div>
              <span className="sidebar__menu-label">{item.label}</span>
            </div>
          ))}

          {/* Section Items */}
          {sections.map(section => (
            <div key={section.key} className="sidebar__section">
              {/* Section Header */}
              <div 
                className={`sidebar__section-header ${isSectionActive(section) ? 'sidebar__section-header--active' : ''}`}
                onClick={() => toggleSection(section.key)}
              >
                <span className="sidebar__section-label">{section.label}</span>
                <div className="sidebar__section-chevron">
                  {section.expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </div>
              </div>

              {/* Section Children */}
              {section.expanded && section.children.length > 0 && (
                <div className="sidebar__section-children">
                  {section.children.map(child => (
                    <div
                      key={child.key}
                      className={`sidebar__menu-item sidebar__menu-item--child ${isActive(child.path || '') ? 'sidebar__menu-item--active' : ''}`}
                      onClick={() => child.path && handleMenuClick(child.path)}
                    >
                      <div className="sidebar__menu-icon">
                        {child.icon}
                      </div>
                      <span className="sidebar__menu-label">{child.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Menu Item */}
        <div className="sidebar__bottom">
          <div
            className={`sidebar__menu-item ${isActive(bottomMenuItem.path || '') ? 'sidebar__menu-item--active' : ''}`}
            onClick={() => bottomMenuItem.path && handleMenuClick(bottomMenuItem.path)}
          >
            <div className="sidebar__menu-icon">
              {bottomMenuItem.icon}
            </div>
            <span className="sidebar__menu-label">{bottomMenuItem.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
