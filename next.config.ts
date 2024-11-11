import { withPigment } from '@pigment-css/nextjs-plugin';
import { createTheme } from '@mui/material'

const nextConfig = {
  // ...Your nextjs config.
};

/**
 * @type {import('@pigment-css/nextjs-plugin').PigmentOptions}
 */
const pigmentConfig = {
  transformLibraries: ['@mui/material'],
  theme: createTheme({
    cssVariables: true,
    colorSchemes: {
      light: {},
      dark: {},
    },
  }),
};

export default withPigment(nextConfig, pigmentConfig);
