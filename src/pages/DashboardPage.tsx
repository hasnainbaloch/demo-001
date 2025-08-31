import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { authService } from '../services/authService';
import type { User as UserType } from '../types/auth';
import { Sidebar } from '../components/layout/Sidebar';
import { TopBar } from '../components/layout/TopBar';
import './DashboardPage.scss';

const { Content } = Layout;

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const currentUser: UserType | null = authService.getCurrentUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dashboard content components
  const DashboardContent = () => (
    <div className="dashboard-content__main">
      <h2>Welcome to Dashboard</h2>
      <p>Select a menu item from the sidebar to get started.</p>
    </div>
  );

  const AccountsContent = () => (
    <div className="dashboard-content__main">
      <h2>Accounts</h2>
      <p>Manage your accounts here.</p>
    </div>
  );

  const UsersContent = () => (
    <div className="dashboard-content__main">
      <h2>Users</h2>
      <p>Manage users here.</p>
    </div>
  );

  const BillingContent = () => (
    <div className="dashboard-content__main">
      <h2>Billing</h2>
      <p>Manage billing here.</p>
    </div>
  );

  const RolesContent = () => (
    <div className="dashboard-content__main">
      <h2>Roles</h2>
      <p>Manage roles here.</p>
    </div>
  );

  const WorkflowContent = () => (
    <div className="dashboard-content__main">
      <h2>Workflow</h2>
      <p>Manage workflow configuration here.</p>
    </div>
  );

  const EmailContent = () => (
    <div className="dashboard-content__main">
      <h2>Email Configuration</h2>
      <p>Manage email settings here.</p>
    </div>
  );

  const InstructionsContent = () => (
    <div className="dashboard-content__main">
      <h2>Instructions</h2>
      <p>Manage instructions here.</p>
    </div>
  );

  const SurveysContent = () => (
    <div className="dashboard-content__main">
      <h2>Surveys</h2>
      <p>Manage surveys here.</p>
    </div>
  );

  const ChangelogContent = () => (
    <div className="dashboard-content__main">
      <h2>Changelog</h2>
      <p>View application changelog here.</p>
    </div>
  );

  if (!currentUser) {
    navigate('/login');
    return null;
  }

  return (
    <div className="dashboard-layout">
      {/* Custom TopBar */}
      <TopBar 
        onMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Custom Sidebar */}
      <Sidebar />

      {/* Main Layout */}
      <Layout className="dashboard-main">
        {/* Content with Routing */}
        <Content className="dashboard-content">
          <div className="dashboard-content__container">
            <Routes>
              <Route path="/" element={<DashboardContent />} />
              <Route path="/accounts" element={<AccountsContent />} />
              <Route path="/users" element={<UsersContent />} />
              <Route path="/billing" element={<BillingContent />} />
              <Route path="/roles" element={<RolesContent />} />
              <Route path="/workflow" element={<WorkflowContent />} />
              <Route path="/email" element={<EmailContent />} />
              <Route path="/instructions" element={<InstructionsContent />} />
              <Route path="/surveys" element={<SurveysContent />} />
              <Route path="/changelog" element={<ChangelogContent />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
