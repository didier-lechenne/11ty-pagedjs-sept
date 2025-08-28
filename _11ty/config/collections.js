const config = require('./siteData.js');

module.exports = function (eleventyConfig) {

// Collection pour le web
eleventyConfig.addCollection("sectionsWeb", function(collectionApi) {
  return collectionApi.getFilteredByGlob(`${config.publicFolder}/*.md`)
    .filter(item => !item.data.draft)
    .filter(item => !item.data.show || item.data.show === "web")
    .sort((a, b) => {
      const titleA = a.data.title || a.fileSlug || '';
      const titleB = b.data.title || b.fileSlug || '';
      return titleA.localeCompare(titleB);
    });
});

// Collection pour le print  
eleventyConfig.addCollection("sectionsPrint", function(collectionApi) {
  return collectionApi.getFilteredByGlob(`${config.publicFolder}/*.md`)
    .filter(item => !item.data.draft)
    .filter(item => !item.data.show || item.data.show === "print")
    .sort((a, b) => {
      const titleA = a.data.title || a.fileSlug || '';
      const titleB = b.data.title || b.fileSlug || '';
      return titleA.localeCompare(titleB);
    });
});
  
}