# Country Flag Dropdown

### About
An alternative to select tag `<select>` that can support adding a flag in the option `<option>`.

![Country Flag Dropdown Sample Image](https://raw.githubusercontent.com/markanthonyuy/country-flag-dropbox/master/img/country-flag-dropdown.PNG)

### Dependency
Latest version of jQuery (It might work for older version, I just didn't bother to test.)

### Support
Keyboard press event to select country based on what the user typed (Max 3 letters only).

### Instructions
Add country-flag-dropdown css and js file and then simply add the markup
```html
<select class="country-code">
  <option data-country="sg" data-country-name="Singapore" value="+65">+65 Singapore</option>
  <option data-country="al" data-country-name="Albania" value="+355">+355 Albania</option>
  <option data-country="ad" data-country-name="Andorra" value="+376">+376 Andorra</option>
  <option data-country="ag" data-country-name="Antigua" value="+1">+1 Antigua</option>
  <option data-country="ar" data-country-name="Argentina" value="+54">+54 Argentina</option>
  <option data-country="am" data-country-name="Armenia" value="+374">+374 Armenia</option>
  <option data-country="au" data-country-name="Australia" value="+61">+61 Australia</option>
  <option data-country="at" data-country-name="Austria" value="+43">+43 Austria</option>
  <option data-country="az" data-country-name="Azerbaijan" value="+994">+994 Azerbaijan</option>
  <option data-country="bs" data-country-name="Bahamas" value="+1">+1 Bahamas</option>
  <option data-country="bh" data-country-name="Bahrain" value="+973">+973 Bahrain</option>
  <option data-country="bd" data-country-name="Bangladesh" value="+880">+880 Bangladesh</option>
  <option data-country="bb" data-country-name="Barbados" value="+1">+1 Barbados</option>
  <option data-country="by" data-country-name="Belarus" value="+375">+375 Belarus</option>
  <option data-country="be" data-country-name="Belgium" value="+32">+32 Belgium</option>
  <option data-country="bz" data-country-name="Belize" value="+501">+501 Belize</option>
  <option data-country="bm" data-country-name="Bermuda" value="+1">+1 Bermuda</option>
  <option data-country="bt" data-country-name="Bhutan" value="+975">+975 Bhutan</option>
  <option data-country="bo" data-country-name="Bolivia" value="+591">+591 Bolivia</option>
  <option data-country="ba" data-country-name="Bosnia-Herzegovina" value="+387">+387 Bosnia-Herzegovina</option>
  <option data-country="bw" data-country-name="Botswana" value="+267">+267 Botswana</option>
  <option data-country="br" data-country-name="Brazil" value="+55">+55 Brazil</option>
  <option data-country="vg" data-country-name="British Virgin Islands" value="+1">+1 British Virgin Islands</option>
  <option data-country="bn" data-country-name="Brunei" value="+673">+673 Brunei</option>
  <option data-country="bg" data-country-name="Bulgaria" value="+359">+359 Bulgaria</option>
  <option data-country="kh" data-country-name="Cambodia" value="+855">+855 Cambodia</option>
  <option data-country="ca" data-country-name="Canada" value="+1">+1 Canada</option>
  <option data-country="ky" data-country-name="Cayman Islands" value="+1">+1 Cayman Islands</option>
  <option data-country="cl" data-country-name="Chile" value="+56">+56 Chile</option>
  <option data-country="cn" data-country-name="China" value="+86">+86 China</option>
  <option data-country="co" data-country-name="Colombia" value="+57">+57 Colombia</option>
  <option data-country="ck" data-country-name="Cook Islands" value="+682">+682 Cook Islands</option>
  <option data-country="cr" data-country-name="Costa Rica" value="+506">+506 Costa Rica</option>
  <option data-country="hr" data-country-name="Croatia" value="+385">+385 Croatia</option>
  <option data-country="cy" data-country-name="Cyprus" value="+357">+357 Cyprus</option>
  <option data-country="cz" data-country-name="Czech Republic" value="+420">+420 Czech Republic</option>
  <option data-country="dk" data-country-name="Denmark" value="+45">+45 Denmark</option>
  <option data-country="dm" data-country-name="Dominica" value="+1">+1 Dominica</option>
  <option data-country="do" data-country-name="Dominican Rep" value="+1">+1 Dominican Rep</option>
  <option data-country="ec" data-country-name="Ecuador" value="+593">+593 Ecuador</option>
  <option data-country="eg" data-country-name="Egypt" value="+20">+20 Egypt</option>
  <option data-country="sv" data-country-name="El Salvador" value="+503">+503 El Salvador</option>
  <option data-country="ee" data-country-name="Estonia" value="+372">+372 Estonia</option>
  <option data-country="fo" data-country-name="Faeroe Is" value="+298">+298 Faeroe Is</option>
  <option data-country="fk" data-country-name="Falkland Is" value="+500">+500 Falkland Is</option>
  <option data-country="fj" data-country-name="Fiji" value="+679">+679 Fiji</option>
  <option data-country="fi" data-country-name="Finland" value="+358">+358 Finland</option>
  <option data-country="fr" data-country-name="France" value="+33">+33 France</option>
  <option data-country="ge" data-country-name="Georgia" value="+995">+995 Georgia</option>
  <option data-country="de" data-country-name="Germany" value="+49">+49 Germany</option>
  <option data-country="gi" data-country-name="Gibraltar (UK)" value="+350">+350 Gibraltar (UK)</option>
  <option data-country="gr" data-country-name="Greece" value="+30">+30 Greece</option>
  <option data-country="gl" data-country-name="Greenland" value="+299">+299 Greenland</option>
  <option data-country="gu" data-country-name="Guam" value="+1">+1 Guam</option>
  <option data-country="gt" data-country-name="Guatemala" value="+502">+502 Guatemala</option>
  <option data-country="hn" data-country-name="Honduras" value="+504">+504 Honduras</option>
  <option data-country="hk" data-country-name="Hong Kong" value="+852">+852 Hong Kong</option>
  <option data-country="hu" data-country-name="Hungary" value="+36">+36 Hungary</option>
  <option data-country="is" data-country-name="Iceland" value="+354">+354 Iceland</option>
  <option data-country="in" data-country-name="India" value="+91">+91 India</option>
  <option data-country="id" data-country-name="Indonesia" value="+62">+62 Indonesia</option>
  <option data-country="iq" data-country-name="Iraq" value="+964">+964 Iraq</option>
  <option data-country="ie" data-country-name="Ireland" value="+353">+353 Ireland</option>
  <option data-country="il" data-country-name="Israel" value="+972">+972 Israel</option>
  <option data-country="it" data-country-name="Italy" value="+39">+39 Italy</option>
  <option data-country="jm" data-country-name="Jamaica" value="+1">+1 Jamaica</option>
  <option data-country="jp" data-country-name="Japan" value="+81">+81 Japan</option>
  <option data-country="jo" data-country-name="Jordan" value="+962">+962 Jordan</option>
  <option data-country="kz" data-country-name="Kazakstan" value="+7">+7 Kazakstan</option>
  <option data-country="kw" data-country-name="Kuwait" value="+965">+965 Kuwait</option>
  <option data-country="la" data-country-name="Laos" value="+856">+856 Laos</option>
  <option data-country="lv" data-country-name="Latvia" value="+371">+371 Latvia</option>
  <option data-country="li" data-country-name="Liechtenstein" value="+423">+423 Liechtenstein</option>
  <option data-country="lt" data-country-name="Lithuania" value="+370">+370 Lithuania</option>
  <option data-country="lu" data-country-name="Luxembourg" value="+352">+352 Luxembourg</option>
  <option data-country="mo" data-country-name="Macau" value="+853">+853 Macau</option>
  <option data-country="mk" data-country-name="Macedonia" value="+389">+389 Macedonia</option>
  <option data-country="my" data-country-name="Malaysia" value="+60">+60 Malaysia</option>
  <option data-country="mv" data-country-name="Maldives" value="+960">+960 Maldives</option>
  <option data-country="mt" data-country-name="Malta" value="+356">+356 Malta</option>
  <option data-country="mq" data-country-name="Martinique" value="+596">+596 Martinique</option>
  <option data-country="mu" data-country-name="Mauritius" value="+230">+230 Mauritius</option>
  <option data-country="mx" data-country-name="Mexico" value="+52">+52 Mexico</option>
  <option data-country="md" data-country-name="Moldova" value="+373">+373 Moldova</option>
  <option data-country="mc" data-country-name="Monaco" value="+377">+377 Monaco</option>
  <option data-country="me" data-country-name="Montenegro" value="+382">+382 Montenegro</option>
  <option data-country="ms" data-country-name="Montserrat" value="+1">+1 Montserrat</option>
  <option data-country="ma" data-country-name="Morocco" value="+212">+212 Morocco</option>
  <option data-country="mm" data-country-name="Myanmar" value="+95">+95 Myanmar</option>
  <option data-country="np" data-country-name="Nepal" value="+977">+977 Nepal</option>
  <option data-country="nl" data-country-name="Netherlands" value="+31">+31 Netherlands</option>
  <option data-country="nz" data-country-name="New Zealand" value="+64">+64 New Zealand</option>
  <option data-country="ni" data-country-name="Nicaragua" value="+505">+505 Nicaragua</option>
  <option data-country="no" data-country-name="Norway" value="+47">+47 Norway</option>
  <option data-country="om" data-country-name="Oman" value="+968">+968 Oman</option>
  <option data-country="pa" data-country-name="Panama" value="+507">+507 Panama</option>
  <option data-country="pg" data-country-name="Papua New Guinea" value="+675">+675 Papua New Guinea</option>
  <option data-country="py" data-country-name="Paraguay" value="+595">+595 Paraguay</option>
  <option data-country="pe" data-country-name="Peru" value="+51">+51 Peru</option>
  <option data-country="ph" data-country-name="Philippines" value="+63" selected="selected">+63 Philippines</option>
  <option data-country="pl" data-country-name="Poland" value="+48">+48 Poland</option>
  <option data-country="pt" data-country-name="Portugal" value="+351">+351 Portugal</option>
  <option data-country="pr" data-country-name="Puerto Rico" value="+1">+1 Puerto Rico</option>
  <option data-country="qa" data-country-name="Qatar" value="+974">+974 Qatar</option>
  <option data-country="ro" data-country-name="Romania" value="+40">+40 Romania</option>
  <option data-country="ru" data-country-name="Russia" value="+7">+7 Russia</option>
  <option data-country="sm" data-country-name="San Marino" value="+378">+378 San Marino</option>
  <option data-country="sa" data-country-name="Saudi Arabia" value="+966">+966 Saudi Arabia</option>
  <option data-country="rs" data-country-name="Serbia" value="+381">+381 Serbia</option>
  <option data-country="sc" data-country-name="Seychelles" value="+248">+248 Seychelles</option>
  <option data-country="sg" data-country-name="Singapore" value="+65">+65 Singapore</option>
  <option data-country="sk" data-country-name="Slovakia" value="+421">+421 Slovakia</option>
  <option data-country="si" data-country-name="Slovenia" value="+386">+386 Slovenia</option>
  <option data-country="za" data-country-name="South Africa" value="+27">+27 South Africa</option>
  <option data-country="kr" data-country-name="South Korea" value="+82">+82 South Korea</option>
  <option data-country="es" data-country-name="Spain" value="+34">+34 Spain</option>
  <option data-country="lk" data-country-name="Sri Lanka" value="+94">+94 Sri Lanka</option>
  <option data-country="kn" data-country-name="St Kitts &amp; Nevis" value="+1">+1 St Kitts &amp; Nevis</option>
  <option data-country="lc" data-country-name="St Lucia" value="+1">+1 St Lucia</option>
  <option data-country="vc" data-country-name="St Vincent" value="+1">+1 St Vincent</option>
  <option data-country="se" data-country-name="Sweden" value="+46">+46 Sweden</option>
  <option data-country="ch" data-country-name="Switzerland" value="+41">+41 Switzerland</option>
  <option data-country="tw" data-country-name="Taiwan" value="+886">+886 Taiwan</option>
  <option data-country="tj" data-country-name="Tajikistan" value="+992">+992 Tajikistan</option>
  <option data-country="th" data-country-name="Thailand" value="+66">+66 Thailand</option>
  <option data-country="tt" data-country-name="Trinidad and Tobago" value="+1">+1 Trinidad and Tobago</option>
  <option data-country="tn" data-country-name="Tunisia" value="+216">+216 Tunisia</option>
  <option data-country="tr" data-country-name="Turkey" value="+90">+90 Turkey</option>
  <option data-country="tm" data-country-name="Turkmenistan" value="+993">+993 Turkmenistan</option>
  <option data-country="ae" data-country-name="UAE" value="+971">+971 UAE</option>
  <option data-country="vi" data-country-name="US Virgin Islands" value="+1">+1 US Virgin Islands</option>
  <option data-country="us" data-country-name="USA" value="+1">+1 USA</option>
  <option data-country="ua" data-country-name="Ukraine" value="+380">+380 Ukraine</option>
  <option data-country="uk" data-country-name="United Kingdom" value="+44">+44 United Kingdom</option>
  <option data-country="uy" data-country-name="Uruguay" value="+598">+598 Uruguay</option>
  <option data-country="uz" data-country-name="Uzbekistan" value="+998">+998 Uzbekistan</option>
  <option data-country="vu" data-country-name="Vanuatu" value="+678">+678 Vanuatu</option>
  <option data-country="ve" data-country-name="Venezuela" value="+58">+58 Venezuela</option>
  <option data-country="vn" data-country-name="Vietnam" value="+84">+84 Vietnam</option>
  <option data-country="zw" data-country-name="Zimbabwe" value="+263">+263 Zimbabwe</option>
</select>
```
and then initialize the function
~~~ js
initCountryCode('.country-code');
~~~

### Licence
MIT
