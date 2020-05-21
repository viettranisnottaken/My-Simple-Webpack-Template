# Project

This project was generated with:

- Webpack.

- SCSS 7-1 pattern.

# Command

`yarn`

`yarn start`

`yarn build:dev`

`yarn build:production`

# Instructions

- To access the style guide: /style_guide/style_guide.html

- If you want to add a new HTML file, go to webpack.config.js and add the following line to plugins:

new HtmlWebpackPlugin({
  title: "Title of your page",
  filename: "your_file_name.html",
  template: "src/templates/your_file_name.html",
}),

- If you want your HTML file in a folder, add this to plugins:

new HtmlWebpackPlugin({
  title: "Title of your page",
  filename: "your_file_name.html",
  template: "src/templates/your_folder_name/your_file_name.html",
}),

- If your want to add a new scss file, go to main.scss to import it before using (mind the order of the imports)

# Notes:

- All of what you see in the style guide is just styles, add the functions yourself if need be

- Change the styles if you feel like yours suit you better
