/* eslint-disable import/named */
import React from 'react';
import { withTranslation } from '@i18n';
import Layout from '@components/Layouts';
import { withApollo } from '@lib/apollo';
import { withRedux } from '@lib/redux';
import { compose } from 'redux';
import Content from './component';

const Page = (props) => {
    const { t } = props;
    const pageConfig = {
        title: t('customer:address:pageTitle'),
        headerTitle: t('customer:address:pageTitle'),
        header: 'relative', // available values: "absolute", "relative", false (default)
        bottomNav: false,
    };
    return (
        <Layout pageConfig={pageConfig} {...props}>
            <Content {...props} />
        </Layout>
    );
};

Page.getInitialProps = async () => ({
    namespacesRequired: ['common', 'customer', 'validate'],
});

export default compose(withApollo({ ssr: true }), withRedux)(withTranslation()(Page));
