module.exports = function(eleventyConfig) {
  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("*.mp4");
  eleventyConfig.addPassthroughCopy("*.html"); // Copy original HTML files without renaming

  // Filter to format dates nicely
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Intl.DateTimeFormat('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }).format(dateObj);
  });

    // Filter out future posts
  eleventyConfig.addCollection("publishedTips", function(collectionApi) {
    const now = new Date();
    now.setHours(now.getHours() + 8); // Adjust server UTC time to WITA (+8)
    return collectionApi.getFilteredByTag("tips").filter(item => {
      console.log(item.fileSlug + ' ' + item.date.toISOString() + ' <= ' + now.toISOString()); return item.date <= now;
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
