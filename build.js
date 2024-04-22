// build.js

const fs = require("fs-extra");

async function build() {
  try {
    // Create a 'dist' directory if it doesn't exist
    await fs.ensureDir("dist");

    // Copy files from 'src' directory to 'dist' directory
    await fs.copy("src", "dist");

    console.log("Build completed successfully!");
  } catch (err) {
    console.error("Error during build:", err);
    process.exit(1); // Exit with non-zero code to indicate failure
  }
}

build();
