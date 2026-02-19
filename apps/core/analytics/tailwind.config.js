/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
        '../../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0F172A',
                surface: '#1E293B',
                foreground: '#F8FAFC',
                border: '#334155',
                primary: {
                    DEFAULT: '#10B981',
                    foreground: '#FFFFFF',
                },
                secondary: {
                    DEFAULT: '#3B82F6',
                    foreground: '#FFFFFF',
                },
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                'glass-hover': '0 12px 40px 0 rgba(0, 0, 0, 0.4)',
                'glow': '0 0 20px rgba(16, 185, 129, 0.15)',
                'glow-lg': '0 0 40px rgba(16, 185, 129, 0.2)',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
}
