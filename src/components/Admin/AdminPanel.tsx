import React from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminContent } from './AdminContent';

export const AdminPanel: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <AdminContent />
    </div>
  );
};