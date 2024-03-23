import React from 'react';
import { storeConfig } from '@core_modules/theme/services/graphql';

const CustomPromo = () => {
    const { data } = storeConfig();

    return (
        <div class="text-center px-4 py-2">
            <h1 class="text-neutral-white">{data?.storeConfig?.welcome}</h1>
        </div>
    );
};

export default CustomPromo;
