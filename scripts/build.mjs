import { $, cd, fs, glob, echo, chalk, path } from "zx";

const { yellowBright: yellow, greenBright: green } = chalk;

$.env.FORCE_COLOR = "1";

// Obtiene el directorio raíz del proyecto
const rootDir = path.resolve();
const indexPath = path.join(rootDir, "index.html");
const siteDir = path.join(rootDir, ".site");

// Get all presentation directories
const slideDirs = await glob(path.join(rootDir, "presentations/*"), {
  onlyDirectories: true,
});

// Clear previous build artifacts
echo("");
echo`[slides] ${green(`Clear last building files`)}`;
await $`rm -rf ${path.join(rootDir, ".site")} ${slideDirs.map((dir) => path.join(dir, "dist")).join(" ")}`;

// Log found slide directories
echo("");
echo`[build] ${green(`found slides`)} ${yellow(`[
  ${slideDirs.join(",\n  ")}
]`)}`;

// Ensure the .site directory exists
fs.mkdirSync(siteDir, { recursive: true });

// Copy the main index slide
echo("");
if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, path.join(siteDir, "index.html"));
} else {
  console.error("Error: 'index.html' does not exist in the expected location.");
  process.exit(1); // Termina el script si el archivo no existe
}

// Build each individual slide
for (let dir of slideDirs) {
  const slide = path.basename(dir);

  echo("");
  echo`[build] ${green(`Building slide ${yellow(slide)}`)}`;

  // Change to the directory and run the build command
  await cd(dir);
  try {
    await $`slidev build --base /presentations/${slide}/ index.md`;
  } catch (error) {
    console.error(`Failed to build slides in ${dir}:`, error);
    process.exit(1); // Exits the script if the build fails
  }

  // Change back to the project root directory
  await cd(rootDir);
}

// Compose slide pages by copying them to the .site directory
echo("");
echo`[build] ${green(`Composing slides pages`)}`;
for (let dir of slideDirs) {
  const destDir = path.join(siteDir, path.basename(dir)) + "/";
  const srcDir = path.join(dir, "dist/") + "/";

  // Log file operation
  echo`Copying ${srcDir} to ${destDir}`;
  try {
    // Check if source directory exists and log contents
    const files = await fs.readdir(srcDir);
    console.log(`Files in ${srcDir}:`, files);

    // Copy files to destination
    await fs.copy(srcDir, destDir);
  } catch (error) {
    console.error(`Error copying files from ${srcDir} to ${destDir}:`, error);
    process.exit(1); // Exits the script if copying fails
  }
}

// Build completed
echo("");
echo`[build] Build completed`;
