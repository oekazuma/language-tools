///<reference types="svelte" />
<></>;function render() {
<><div {...__sveltets_1_empty($compile_options=__sveltets_1_instanceOf(HTMLDivElement).offsetHeight)} />
<div {...__sveltets_1_empty($compile_options.foo=__sveltets_1_instanceOf(HTMLDivElement).offsetHeight)} />
<div {...__sveltets_1_empty($compile_options = /*Ωignore_startΩ*/__sveltets_1_instanceOf(__sveltets_1_ctorOf(__sveltets_1_mapElementTag('div')))/*Ωignore_endΩ*/)} />
<div {...__sveltets_1_empty($compile_options.foo = /*Ωignore_startΩ*/__sveltets_1_instanceOf(__sveltets_1_ctorOf(__sveltets_1_mapElementTag('div')))/*Ωignore_endΩ*/)} />
<div noAssignment={$compile_options} />
<div noAssignment={$compile_options.foo} /></>
return { props: /** @type {Record<string, never>} */ ({}), slots: {}, events: {} }}

export default class Input__SvelteComponent_ extends __sveltets_1_createSvelte2TsxComponent(__sveltets_1_partial(__sveltets_1_with_any_event(render()))) {
}