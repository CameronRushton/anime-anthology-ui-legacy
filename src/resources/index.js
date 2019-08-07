export function configure(config) {
  config.globalResources(
      [
          PLATFORM.moduleName('./components/header/header'),
      ]
  )
}
