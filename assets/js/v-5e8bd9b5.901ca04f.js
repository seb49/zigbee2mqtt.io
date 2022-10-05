"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82498],{57188:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-5e8bd9b5",path:"/devices/SLR2.html",title:"Hive SLR2 control via MQTT",lang:"en-US",frontmatter:{title:"Hive SLR2 control via MQTT",description:"Integrate your Hive SLR2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-11-01T12:47:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Sending payloads on dual channel receivers",slug:"sending-payloads-on-dual-channel-receivers",children:[]},{level:3,title:"How to start/edit native boost (heat endpoint)",slug:"how-to-start-edit-native-boost-heat-endpoint",children:[]},{level:3,title:"Set heating mode to ON (heat endpoint)",slug:"set-heating-mode-to-on-heat-endpoint",children:[]},{level:3,title:"Set heating mode to OFF (heat endpoint)",slug:"set-heating-mode-to-off-heat-endpoint",children:[]},{level:3,title:"How to start/edit native boost (water endpoint)",slug:"how-to-start-edit-native-boost-water-endpoint",children:[]},{level:3,title:"Set heating mode to ON (water endpoint)",slug:"set-heating-mode-to-on-water-endpoint",children:[]},{level:3,title:"Set heating mode to OFF (water endpoint)",slug:"set-heating-mode-to-off-water-endpoint",children:[]},{level:3,title:"Local and occupied temperature (water endpoint)",slug:"local-and-occupied-temperature-water-endpoint",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Climate (heat endpoint)",slug:"climate-heat-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold (binary, heat endpoint)",slug:"temperature-setpoint-hold-binary-heat-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold_duration (numeric, heat endpoint)",slug:"temperature-setpoint-hold-duration-numeric-heat-endpoint",children:[]},{level:3,title:"Climate (water endpoint)",slug:"climate-water-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold (binary, water endpoint)",slug:"temperature-setpoint-hold-binary-water-endpoint",children:[]},{level:3,title:"Temperature_setpoint_hold_duration (numeric, water endpoint)",slug:"temperature-setpoint-hold-duration-numeric-water-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SLR2.md",git:{updatedTime:166498374e4}}},3368:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var a=o(66252);const n=(0,a.uE)('<h1 id="hive-slr2" tabindex="-1"><a class="header-anchor" href="#hive-slr2" aria-hidden="true">#</a> Hive SLR2</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SLR2</td></tr><tr><td>Vendor</td><td>Hive</td></tr><tr><td>Description</td><td>Dual channel heating and hot water thermostat</td></tr><tr><td>Exposes</td><td>climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SLR2.jpg" alt="Hive SLR2"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the thermostat with Zigbee2MQTT, follow these steps:</p>',5),s=(0,a._)("li",null,"Temporarily disconnect any thermostat controllers connected to the thermostat by remove a battery from them.",-1),i=(0,a._)("li",null,"Turn the thermostat and boiler off, then on again to ensure it is not trying to connect to any thermostat controllers.",-1),r=(0,a._)("li",null,"Once the thermostat and boiler are on, hold down the Central heating button on the device until the Central heating'light turns white/ pink, then release the button. This will enable stand-alone mode on the thermostat.",-1),d=(0,a._)("li",null,"Hold down the central heating button again until the Central heating light begins to flash amber. The device is now in pairing mode and should be found by Zigbee2MQTT.",-1),p=(0,a.Uk)("You can now re-insert the battery back into any thermostat controllers disconnected in step 1 and pair them to the boiler (and optionally Zigbee2MQTT). For information on pairing the thermostat controllers see the pairing instructions for the "),c=(0,a.Uk)("Hive SLT3B"),l=(0,a.Uk)(". Note that the thermostat's Central heating light will remain amber until a controller is paired with the thermostat, however the thermostat will still function correctly."),u=(0,a.uE)('<h3 id="sending-payloads-on-dual-channel-receivers" tabindex="-1"><a class="header-anchor" href="#sending-payloads-on-dual-channel-receivers" aria-hidden="true">#</a> Sending payloads on dual channel receivers</h3><p>As the receiver makes use of two endpoints, <code>water</code> and <code>heat</code> there are two methods of sending payloads, both equally valid. For example, the <code>heat</code> endpoint:</p><p>Topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Topic <code>zigbee2mqtt/FRIENDLY_NAME/heat/set</code></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Notice that <code>heat</code> must be part of either the topic or the attribute. With that in mind, adjust the commands in this documentation based on your preferred style.</p><h3 id="how-to-start-edit-native-boost-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#how-to-start-edit-native-boost-heat-endpoint" aria-hidden="true">#</a> How to start/edit native boost (heat endpoint)</h3><p>The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.</p><p>To start one, or modify an already active one, send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;emergency_heating&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_duration_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// Replace with desired duration in minutes. Max 360. 0 to stop</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;occupied_heating_setpoint_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;18&quot;</span>  <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.</p><p>Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.</p><h3 id="set-heating-mode-to-on-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-on-heat-endpoint" aria-hidden="true">#</a> Set heating mode to ON (heat endpoint)</h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;occupied_heating_setpoint_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;20&quot;</span> <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>65535</code> which means <code>undefined</code> (indefinite).</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-off-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-off-heat-endpoint" aria-hidden="true">#</a> Set heating mode to OFF (heat endpoint)</h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string-property property">&quot;system_mode_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_heat&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>0</code> which means <code>not set</code>. <code>occupied_heating_setpoint_heat</code> automatically changes to <code>1</code> degree C.</p><p>This will also stop any native boosts that are currently active.</p><h3 id="how-to-start-edit-native-boost-water-endpoint" tabindex="-1"><a class="header-anchor" href="#how-to-start-edit-native-boost-water-endpoint" aria-hidden="true">#</a> How to start/edit native boost (water endpoint)</h3><p>The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.</p><p>To start one, or modify an already active one, send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string-property property">&quot;system_mode_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;emergency_heating&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_duration_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// Replace with desired duration in minutes. Max 360. 0 to stop</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.</p><h3 id="set-heating-mode-to-on-water-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-on-water-endpoint" aria-hidden="true">#</a> Set heating mode to ON (water endpoint)</h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string-property property">&quot;system_mode_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>65535</code> which means <code>undefined</code> (indefinite).</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-off-water-endpoint" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-off-water-endpoint" aria-hidden="true">#</a> Set heating mode to OFF (water endpoint)</h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string-property property">&quot;system_mode_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>\n   <span class="token string-property property">&quot;temperature_setpoint_hold_water&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration_heat</code> automatically changes to <code>0</code> which means <code>not set</code>.</p><p>This will also stop any native boosts that are currently active.</p><h3 id="local-and-occupied-temperature-water-endpoint" tabindex="-1"><a class="header-anchor" href="#local-and-occupied-temperature-water-endpoint" aria-hidden="true">#</a> Local and occupied temperature (water endpoint)</h3><p>The water endpoint functions as what could be considered an on/off switch based on <code>system_mode_water</code>. Because of that, the device uses fixed values for temperature. <code>local_temperature_water</code> is always 21 and <code>occupied_heating_setpoint_water</code> is always 22.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',41),h=(0,a.Uk)("How to use device type specific configuration"),m=(0,a.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-heat-endpoint" aria-hidden="true">#</a> Climate (heat endpoint)</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_heat&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_heat&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_heat&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_heat&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_heat&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-heat-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold (binary, heat endpoint)</h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_heat&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature_setpoint_hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-heat-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-heat-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold_duration (numeric, heat endpoint)</h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_heat</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_heat&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="climate-water-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-water-endpoint" aria-hidden="true">#</a> Climate (water endpoint)</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>22</code> and <code>22</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_water&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_water&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_water&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>, <code>emergency_heating</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_water&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state_water&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary-water-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold (binary, water endpoint)</h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_water&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature_setpoint_hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric-water-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric-water-endpoint" aria-hidden="true">#</a> Temperature_setpoint_hold_duration (numeric, water endpoint)</h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration_water</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration_water&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',18),g={},_=(0,o(83744).Z)(g,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("ol",null,[s,i,r,d,(0,a._)("li",null,[p,(0,a.Wm)(o,{to:"/devices/SLT3.html"},{default:(0,a.w5)((()=>[c])),_:1}),l])]),u,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[h])),_:1})])]),m],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);