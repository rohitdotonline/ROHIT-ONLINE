module.exports = function(eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/css");
  
  // Copy images to output
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Set up watch targets
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/images/");
  
  // Add a shortcode for the current year
  eleventyConfig.addShortcode("year", () => {
    return new Date().getFullYear();
  });
  
  // Add date filter
  eleventyConfig.addFilter("date", function(date, format) {
    // Format date using default format if none provided
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    // Handle "now" special case
    if (date === "now") {
      date = new Date();
    }
    
    // Ensure we have a valid date object
    const d = new Date(date);
    if (isNaN(d.getTime())) {
      console.log("Invalid date:", date);
      return "";
    }
    
    if (format === "%b %d, %Y") {
      return `${monthNames[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
    
    return format ? format.replace(/%Y/, d.getFullYear())
                         .replace(/%m/, String(d.getMonth() + 1).padStart(2, '0'))
                         .replace(/%d/, String(d.getDate()).padStart(2, '0'))
                         .replace(/%b/, monthNames[d.getMonth()])
                : d.toISOString().split('T')[0]; // Default: YYYY-MM-DD
  });
  
  // Manual collection to ensure posts from the blog directory are included
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts");
  });
  
  // Generate RSS feed
  eleventyConfig.addCollection("feed", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").reverse().slice(0, 20);
  });
  
  // Return configuration options
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}; 