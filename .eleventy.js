
const config = require("./_11ty/config/siteData.js");
const collectionsConfig = require("./_11ty/config/collections.js");
const markdownPlugin = require("./_11ty/config/markdown.js");
const filtersConfig = require("./_11ty/config/filters.js");
const shortcodesConfig = require("./_11ty/config/shortcodes.js");
const transformsConfig = require("./_11ty/config/transforms.js");


module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    [`${config.publicFolder}/images`]: "images",
    [`_11ty/assets/themes/${config.theme}`]: "assets",
    "_11ty/csspageweaver": "csspageweaver",
  });


 eleventyConfig.addPlugin(markdownPlugin);
  collectionsConfig(eleventyConfig);
  filtersConfig(eleventyConfig);
  shortcodesConfig(eleventyConfig);
  transformsConfig(eleventyConfig);


  eleventyConfig.setServerOptions({
    port: 3000,
    showAllHosts: true,
    domDiff: true,
    ignored: ["node_modules/**", ".git/**", "**/.DS_Store"],
  });


  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "valentine",
    dir: {
      input: [config.publicFolder, "_11ty"],
      output: "_site/",
      includes: "../_11ty/_includes",
      layouts: "../_11ty/_layouts",
      data: "../_11ty/_data",
    },
  };


};