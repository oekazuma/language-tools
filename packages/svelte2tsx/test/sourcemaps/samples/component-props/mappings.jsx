///<reference types="svelte" />
<></>;function render() {                                                                                                                             {/**
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
<><Component foo />                                                                                                                                   {/**
=#                      Originless mappings                                                                                                           
<><Component•foo•/>↲    [generated] line 3                                                                                                            
  <Component•foo•/>↲                                                                                                                                  
<Component•foo•/>↲      [original] line 1                                                                                                             
------------------------------------------------------------------------------------------------------------------------------------------------------ */}

<Component foo="leet"bar/>

<Component {...bar} />

<Component
    {...bar}
/>

<Component                                                                                                                                            {/**
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    foo={bar}                                                                                                                                         {/**
   ╚foo={bar}↲         [generated] line 14                                                                                                            
   ╚     foo={bar}↲                                                                                                                                   
   ╚bind:foo={bar}↲    [original] line 12                                                                                                             
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
/>

<Component                                                                                                                                            {/**
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
    {...__sveltets_1_empty(bar = /*Ωignore_startΩ*/new Component({target: __sveltets_1_any(''), props: __sveltets_1_any('')})/*Ωignore_endΩ*/)}       {/**
   ╚{...__sveltets_1_empty(bar•=•/*Ωignore_startΩ*/new•Component({target:•__sveltets_1_any(''),•props:•__sveltets_1_any('')})/*Ωignore_endΩ*/)}↲    [generated] line 18
   ╚b                      bar}                                                                                                                ↲      
   ╚b          bar}↲                                                                                                                                  
   ╚bind:this={bar}↲                                                                                                                                [original] line 16 
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
/></>                                                                                                                                                 {/**
/></>↲    [generated] line 19                                                                                                                         
/>        [original] line 17                                                                                                                          
------------------------------------------------------------------------------------------------------------------------------------------------------ */}
return { props: /** @type {Record<string, never>} */ ({}), slots: {}, events: {} }}

export default class Input__SvelteComponent_ extends __sveltets_1_createSvelte2TsxComponent(__sveltets_1_partial(__sveltets_1_with_any_event(render()))) {
}