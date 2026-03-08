import React from 'react';

// Simulated invoices hooks and components
export function useInvoices() {
    return {
        invoices: [],
        loading: false
    };
}

export function InvoiceTable({ invoices }: { invoices: any[] }) {
    return (
        <table className="w-full text-left bg-slate-800 border-collapse border border-slate-700">
            <thead>
                <tr className="border-b border-slate-700 bg-slate-900/50">
                    <th className="p-4 text-slate-400 font-medium text-sm">Invoice ID</th>
                    <th className="p-4 text-slate-400 font-medium text-sm">Amount</th>
                    <th className="p-4 text-slate-400 font-medium text-sm">Status</th>
                </tr>
            </thead>
            <tbody>
                {invoices.length === 0 ? (
                    <tr><td colSpan={3} className="p-4 text-slate-500 text-center">No invoices found</td></tr>
                ) : null}
            </tbody>
        </table>
    );
}

export function InvoiceForm() {
    return (
        <form className="space-y-4 bg-slate-800 p-6 border border-slate-700">
            <div>
                <label className="block text-slate-400 text-sm font-medium mb-1">Customer</label>
                <input className="w-full bg-slate-900 border border-slate-700 rounded-none px-4 py-2 text-slate-200 focus:outline-none focus:border-emerald-500" />
            </div>
            <div>
                <label className="block text-slate-400 text-sm font-medium mb-1">Amount</label>
                <input type="number" className="w-full bg-slate-900 border border-slate-700 rounded-none px-4 py-2 text-slate-200 focus:outline-none focus:border-emerald-500" />
            </div>
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-6 shadow-md transition-colors">
                Create Invoice
            </button>
        </form>
    );
}
