// Cross-platform export for LeafletView
// This file allows importing { LeafletView } from './LeafletView' in a platform-agnostic way

// Export LeafletView for both web and native platforms
// For a library, use conditional exports via package.json or React Native resolver
// Here, we export both and let the bundler/platform pick the right one

export { LeafletView } from './LeafletView.web';
