module.exports = function analyticsPlugin(context, options) {
    return {
        name: 'analytics-plugin',
        injectHtmlTags({ content }) {
            return {
                postBodyTags: [
                    {
                        tagName: 'script',
                        attributes: {
                            async: true,
                            type: 'text/javascript',
                            src: 'https://hm.baidu.com/hm.js?b3f6e7ec9302021671173e3fad14f4cd',
                        },
                    },
                    {
                        tagName: 'script',
                        attributes: {
                            async: true,
                            type: 'text/javascript',
                        },
                        innerHTML: `
              (function(c,l,a,r,i,t,y){
                 c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                 t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                 y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "jxmn1qjx88");
            `,
                    },
                ],
            };
        },
    };
};
