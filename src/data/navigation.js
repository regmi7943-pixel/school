export const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
        name: 'Academics',
        path: '/academics',
        dropdown: [
            { name: 'BBA', path: '/academics?program=bba' },
            { name: 'BCA', path: '/academics?program=bca' },
            { name: 'MBA', path: '/academics?program=mba' },
        ]
    },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Notices', path: '/notices' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
];
