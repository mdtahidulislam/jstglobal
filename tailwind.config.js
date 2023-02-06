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
                black2: 'var(--black-2)',
                black3: 'var(--black-3)'
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
                'min4kxxlg': { 'min': '2300px' },
                'min4kxlg': { 'min': '2100px' },
                'min4klg': { 'min': '1800px' },
                'min4ksm': { 'min': '1441px' },
                'max4kxlg': { 'max': '2099px' },
                'max4k': { 'max': '1439px' },
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
                'home-banner': "url('../img/home-banner-2x.jpg')",
                'ind-mar-banner': "url('../img/ind-mar-bnr.jpg')",
                'we-do-banner': "url('../img/we-do-bnr.jpg')",
                'sustainability-banner': "url('../img/sustainability-bnr.jpg')",
                'who-we-banner': "url('../img/who-we-bnr.jpg')",
                'about-us': "url('../img/who.jpg')",
                'what-we-do': "url('../img/do-2x.jpg')",
                'ind-mar': "url('../img/industries-2x.jpg')",
                'sustainability': "url('../img/sustainability-2x.jpg')",
                'careers': "url('../img/careers-2x.jpg')",
                'reliable-bg': "url('../img/propelar.png')",
                'contact-banner': "url('../img/contact-banner.jpg')",
            },
            gridTemplateColumns: {
            },
        }
    },
    plugins: [
        //   require('@tailwindcss/forms'),

    ],
}
