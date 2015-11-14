var dest = "./public/build";

module.exports = {
  js: {
    vendor: [
     "public/js/vendor/*.js",
    ],
    src: [
      "public/js/models/*.js",
      "public/js/collections/*.js",
      "public/js/views/*.js",
      "public/js/main.js",
    ],
    dest: dest,
    vendorfile: "vendor.js",
    filename: "main.js",
  },
  css: {
    vendor: [],
    dest: dest,
    vendorfile: "vendor.css",
  },
  less: {
    src: [
      'public/less/*.less',
    ],
    dest: dest,
    filename: "style.css",
  },

};