import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => {
    const siteTitle = 'Lumbini Academic College';
    const defaultDesc = 'Lumbini Academic College provides quality education in BBA, BCA, and MBA programs. Join us for a bright future.';

    return (
        <Helmet>
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="description" content={description || defaultDesc} />
        </Helmet>
    );
};

export default SEO;
