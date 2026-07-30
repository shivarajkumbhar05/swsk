// src/components/user/UserPayments.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function UserPayments({ payments }) {
  const totalSpent = payments.reduce((sum, p) => sum + p.amount, 0);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-bold text-navy-900">Payment History</h3>
        <div className="bg-navy-900/5 px-4 py-2 rounded-lg">
          <span className="text-sm text-gray-600">Total Spent: </span>
          <span className="text-xl font-bold text-navy-900">₹{totalSpent}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Project</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Method</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Transaction</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment, index) => (
              <motion.tr
                key={payment.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 font-medium text-navy-900">{payment.projectName}</td>
                <td className="py-3 px-4 font-semibold text-navy-900">₹{payment.amount}</td>
                <td className="py-3 px-4 text-gray-600">{payment.date}</td>
                <td className="py-3 px-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    payment.status === 'Completed' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {payment.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-600">{payment.method}</td>
                <td className="py-3 px-4 text-xs text-gray-400 font-mono">{payment.transactionId}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}