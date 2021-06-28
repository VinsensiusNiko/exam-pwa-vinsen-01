import React from 'react';
import Typography from '@common_typography';
import MagezonLink from '@core_modules/cms/components/cms-renderer/magezon/MagezonLink';

const MagezonHeading = (props) => {
    const {
        xs_hide, sm_hide, md_hide, lg_hide, heading_type, text,
        link, font_weight, font_size, color,
    } = props;
    let classes = 'magezone-heading ';
    if (xs_hide) classes += 'hidden-mobile ';
    if (sm_hide) classes += 'hidden-sm ';
    if (md_hide) classes += 'hidden-md ';
    if (lg_hide) classes += 'hidden-lg ';

    const style = {};
    if (color && color !== '') style.color = color;
    if (font_weight && font_weight !== '') style.fontWeight = font_weight;
    if (font_size && font_size !== '') style.fontSize = font_size;

    return (
        <div className={classes}>
            {
                link && link !== ''
                    ? (
                        <MagezonLink link={link}>
                            <Typography
                                variant={heading_type || 'h1'}
                                style={style}
                            >
                                {text || ''}
                            </Typography>
                        </MagezonLink>
                    )
                    : (
                        <Typography
                            variant={heading_type || 'h1'}
                            style={style}
                        >
                            {text || ''}
                        </Typography>
                    )
            }
        </div>
    );
};

export default MagezonHeading;
