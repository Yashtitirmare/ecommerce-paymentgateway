
import { createContext } from 'react';

// Assuming User is part of SDKProvider from @tma.js/sdk-react
import { SDKProvider } from '@tma.js/sdk-react';

const TTmaContext = createContext({
  user: null // Default value
});

export default TTmaContext;
