const config = require('./siteData.js');

module.exports = function (eleventyConfig) {

// Collection spécifique pour le web
  eleventyConfig.addCollection("sectionsWeb", function(collectionApi) {
    return collectionApi.getFilteredByGlob(`${config.publicFolder}/content/*.md`)
      .filter(item => !item.data.draft)
      .filter(item => !item.data.show || item.data.show === "web")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  // Collection spécifique pour le print
  eleventyConfig.addCollection("sectionsPrint", function(collectionApi) {
    return collectionApi.getFilteredByGlob(`${config.publicFolder}/content/*.md`)
      .filter(item => !item.data.draft)
      .filter(item => !item.data.show || item.data.show === "print")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });
  
}