module.exports = ({ env }) => ({
    "vercel-deploy": {
        enabled: true,
        config: {
            deployHook:
                "https://api.vercel.com/v1/integrations/deploy/prj_4Oka0wXqdSiVTL26LOrI0DpMwNu1/s6axvuXP6n",
            apiToken: "Ra1NAk5dMfLYjPljU9THcIbB",
            appFilter: "strapi-test",
            roles: ["strapi-super-admin"],
        },
    },
});