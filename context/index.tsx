const composeProviders = (...providers) => ({ children }) => {
  return providers.reduceRight((child, Provider) => <Provider>{child}</Provider>, children)
}

export const Providers = composeProviders()
