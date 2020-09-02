import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const Gio: { install: InstallFunction };
export default Gio;

export const GioSample: VueConstructor<Vue>;
