module.exports = {
    content: ["./dist/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                primary: 'var(--primary-font)',
                // accent: 'var(--accent-font)',
            },
            fontSize: {

            },
            colors: {
                // texthover: 'var(--text-hover)',
                // darkbtnbg: 'var(--dark-btn-bg-color)',
                // iconbg: 'var(--icon-bg-color)',
                // divider: 'var(--divider-color)',
                // graybg1: 'var(--gray-bg-1)',
                // gray2: 'var(--gray-2)',
                // gray3: 'var(--gray-3)',
                // gray4: 'var(--gray-4)',
                blue1: 'var(--blue-1)',
                black2: 'var(--black-2)'
            },
            spacing: {
                spacex: 'var(--space-x)',
                btnspacex: 'var(--btn-space-x)',
                // menuitemspacex: 'var(--menu-item-space-x)',
                // optspacey: 'var(--opt-space-y)'
            },
            width: {

            },
            maxWidth: {

            },
            height: {

            },
            screens: {
                // 'min769px': '769px',
                'min4kxlg': { 'min': '2100px' },
                'min4klg': { 'min': '1800px' },
                'min4ksm': { 'min': '1441px' },
                'maxxl': { 'max': '1280px' },
                'maxlg': { 'max': '1024px' },
                'maxdp': { 'max': '992px' },
                'maxmd': { 'max': '768px' },
                'maxsm': { 'max': '640px' },
                'maxxsm': { 'max': '576px' },
                'maxxsm-1': { 'max': '450px' },
                'maxxsm-2': { 'max': '375px' },
            },
            zIndex: {

            },
            backgroundImage: {
                'home-banner': "url('../img/home-banner.png')",
                'ind-mar-banner': "url('../img/ind-mar-bnr.png')",
                'about-us': "url('../img/who.png')",
                'what-we-do': "url('../img/do.png')",
                'ind-mar': "url('../img/industries.png')",
                'sustainability': "url('../img/sustainability.png')",
                'careers': "url('../img/careers.png')",
                'reliable-bg': "url('../img/propelar.png')",
            },
            gridTemplateColumns: {
            },
        }
    },
    plugins: [
        //   require('@tailwindcss/forms'),

    ],
}
