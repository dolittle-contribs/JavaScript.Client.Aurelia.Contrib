import { PLATFORM } from 'aurelia-pal';

export function configure(config) {
    config.globalResources(PLATFORM.moduleName('./valueConverters/arrays'));
    config.globalResources(PLATFORM.moduleName('./valueConverters/dates'));
    config.globalResources(PLATFORM.moduleName('./valueConverters/numbers'));
    config.globalResources(PLATFORM.moduleName('./valueConverters/strings'));
}
