module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(ts|tsx|js|jsx|mdx)"

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-styled-component-theme/dist/preset",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  
  features: {
    interactionsDebugger: true
  },
  core: {
    builder: "webpack5"
  }
}