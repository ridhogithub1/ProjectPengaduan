import React from 'react';
import WargaLayout from '@/Layouts/WargaLayout';

export default function DashboardWarga({ auth }) {
    return (
        <WargaLayout user={auth.user}>
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold">Warga Dashboard</h1>
                <p>Welcome, Warga!</p>
            </div>
        </WargaLayout>
    );
}