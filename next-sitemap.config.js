/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://oncallhomerepairs.co.uk',
  generateRobotsTxt: true,
  outDir: './out',
};
