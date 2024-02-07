/**
 * Typography used in theme
 * @param {JsonObject} theme theme customization object
 */
export default function themeTypography(theme) {
    return {
        fontFamily: "Inter, sans-serif",
        heading: {
            fontSize: '18px',
            fontWeight: 600,
            color: '#000',
            fontStyle: 'normal'
        },  
        subtitle1: {
            fontSize: '20px',
            fontWeight: 500,
            color: '#000',
            fontStyle: 'normal'
        },
        subtitle2: {
            fontSize: '16px',
            fontWeight: 600,
            color: '#FF1818',
            fontStyle: 'normal'
        },
        subtitle3: {
            fontSize: '24px',
            fontWeight: 600,
            color: "#121212",
            fontStyle: 'normal'
        },
        subtitle4: {
            fontSize: '24px',
            fontWeight: 500,
            color: '#000',
            fontStyle: 'normal'
        },
        h5: {
            fontSize: '16px',
            fontWeight: 500,
            color: '#000000',
        },
        h6: {
            fontSize: '16px',
            fontWeight: 400,
            color: '#000',
        },
        h7: {
            fontSize: '12px',
            fontWeight: 500,
            color: '#5B5B5B',
        },
        h8: {
            fontSize: '14px',
            fontWeight: 400,
            color: '#8E8E8E',
            display: 'block'
        },
        h9: {
            fontSize: '14px',
            fontWeight: 500,
            color: '#1F1F1F',
            display: 'block',
            lineHeight: '30px'
        },
        body1: {
            fontSize: '16px',
            fontWeight: 500,
        },
        body2: {
            fontSize: '16px',
            fontWeight: 600,
        },
        body3: {
            fontSize: '18px',
            fontWeight: 500,
        },
       
    };
}
