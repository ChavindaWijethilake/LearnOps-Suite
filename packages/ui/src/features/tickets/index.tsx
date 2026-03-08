import React from 'react';

export function useTickets() {
    return {
        tickets: [],
        loading: false
    };
}

export function TicketList({ tickets }: { tickets: any[] }) {
    return (
        <div className="space-y-2">
            {tickets.length === 0 ? (
                <div className="bg-slate-800 border border-slate-700 p-6 text-center text-slate-500">
                    No tickets found
                </div>
            ) : null}
        </div>
    );
}

export function TicketForm() {
    return (
        <form className="space-y-4 bg-slate-800 p-6 border border-slate-700">
            <div>
                <label className="block text-slate-400 text-sm font-medium mb-1">Title</label>
                <input className="w-full bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500" />
            </div>
            <div>
                <label className="block text-slate-400 text-sm font-medium mb-1">Description</label>
                <textarea className="w-full bg-slate-900 border border-slate-700 px-4 py-2 text-slate-200 focus:outline-none focus:border-amber-500" rows={4} />
            </div>
            <button className="bg-amber-600 hover:bg-amber-500 text-white font-medium py-2 px-6 transition-colors">
                Submit Ticket
            </button>
        </form>
    );
}
