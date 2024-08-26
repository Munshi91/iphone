import React from 'react';

const ApplyForm = () => {
  return (
    <div className="fixed top-0 bottom-0 left-0  w-full h-screen overflow-y-auto z-prop">
      <div className="flex flex-col px-4 py-12 ">
        <div className="">
          <h2 className="text-xl lg:text-3xl font-bold mt-2 mb-2 text-center text-[#242E69]">
            Schedule Your Free Consultation
          </h2>
          <p className="mb-4 p-4 text-center text-[#656565] font-medium text-sm lg:text-lg">
            Expect a call within 24 hours from AHZ to coordinate your first
            consultation with a UK education specialist.
          </p>
          <button className=" absolute right-3 top-[1rem] bg-black text-white px-2 rounded-full w-[30px] h-[30px] cls">
            X
          </button>
          <div className="mx-auto xl:px-[15rem]">
            <Form>
              <div className="flex flex-col mb-2 space-y-2 xl:flex-row xl:space-x-8 xl:space-y-0">
                <div className="w-full xl:w-1/2 ">
                  <label
                    className="block text-[#1D3564] text-xl font-semibold mb-2"
                    for="firstName"
                  >
                    First Name<span className="font-bold text-red-600 ">*</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50"
                    id="firstName"
                    placeholder="Enter the first name"
                    type="text"
                    value=""
                  ></input>
                </div>
                <div className="w-full xl:w-1/2 ">
                  <label
                    className="block text-[#1D3564] text-xl font-semibold mb-2"
                    for="lastName"
                  >
                    Last Name<span className="font-bold text-red-600"> *</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50"
                    id="lastName"
                    placeholder="Enter the last name"
                    type="text"
                    value=""
                  ></input>
                </div>
              </div>
              <div className="flex flex-col mb-2 space-y-2 xl:flex-row xl:space-x-8 xl:space-y-0">
                <div className="w-full xl:w-1/2 ">
                  <label
                    className="block text-[#1D3564] text-xl font-semibold mb-2"
                    for="email"
                  >
                    Email<span className="font-bold text-red-600"> *</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50"
                    id="email"
                    placeholder="Enter email address"
                    type="email"
                    value=""
                  ></input>
                </div>
                <div className="w-full xl:w-1/2 ">
                  <div className="flex justify-between">
                    <div>
                      <label
                        className="block text-[#1D3564] text-xl font-semibold mb-2"
                        for="mobile"
                      >
                        Mobile<span className="font-bold text-red-600">*</span>
                      </label>
                    </div>
                    <div>
                      <label
                        for="whatsapp"
                        className="text-[#1D3564] text-base"
                      >
                        WhatsApp
                      </label>
                      <input
                        id="whatsapp"
                        className="ml-2 rounded-sm  focus:ring-0"
                        type="checkbox"
                      ></input>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="phone-input-container react-tel-input ">
                      <div className="special-label">Phone</div>
                      <input
                        className="w-full px-3 py-2 border border-gray-300 bg-gray-50"
                        placeholder="1 (702) 123-4567"
                        required=""
                        type="tel"
                        value="+91"
                      ></input>
                      <div className="flag-dropdown phone-input-button">
                        <div
                          className="selected-flag"
                          title="India: + 91"
                          tabindex="0"
                          role="button"
                          aria-haspopup="listbox"
                        >
                          <div className="flag in">
                            <div className="arrow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-2 space-y-2 xl:flex-row xl:space-x-8 xl:space-y-0">
                <div className="w-full xl:w-1/2 ">
                  <label
                    className="block text-[#1D3564] text-xl font-semibold mb-2"
                    for="nationality"
                  >
                    Nationality
                    <span className="font-bold text-red-600"> *</span>
                  </label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50"
                    id="nationality"
                  >
                    <option disabled="" value="">
                      Select Country
                    </option>
                    <option value="Afganistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bonaire">Bonaire</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="British Virgin Islands">
                      British Virgin Islands
                    </option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Fassau">Burkina Fassau</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">Cocos Islands</option>
                    <option value="Colgolese/UK">Colgolese/UK</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Curaçao">Curaçao</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czechia">Czechia</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">Falkland Islands</option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and McDonald Islands">
                      Heard Island and McDonald Islands
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Kosovo">Kosovo</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Laos">Laos</option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libya">Libya</option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Moldova">Moldova</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="North Korea">North Korea</option>
                    <option value="North Macedonia">North Macedonia</option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestine">Palestine</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russia</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Barthélemy">Saint Barthélemy</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Martin">Saint Martin</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and the Grenadines">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Sint Maarten">Sint Maarten</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia and the South Sandwich Islands">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="South Korea">South Korea</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard and Jan Mayen">
                      Svalbard and Jan Mayen
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syria</option>
                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Tibet">Tibet</option>
                    <option value="Timor-Leste">Timor-Leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos Islands">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Vatican City State">
                      Vatican City State
                    </option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zanzibar">Zanzibar</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                </div>
                <div className="w-full xl:w-1/2 ">
                  <label
                    className="block text-[#1D3564] text-xl font-semibold mb-2"
                    for="ukResident"
                  >
                    Are you in UK right now?
                    <span className="font-bold text-red-600"> *</span>
                  </label>
                  <div className="flex mt-[1rem]">
                    <div className="flex items-center mr-4">
                      <input
                        id="ukYes"
                        className="mr-2 focus:ring-0"
                        type="radio"
                        value="Yes"
                        name="ukResident"
                      />
                      <label
                        for="ukYes"
                        className="text-[#1D3564] text-lg font-semibold"
                      >
                        <span className="">Yes</span>
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        id="ukNo"
                        className="mr-2 focus:ring-0"
                        type="radio"
                        value="No"
                        name="ukResident"
                      />
                      <label
                        for="ukNo"
                        className="text-[#1D3564] text-lg font-semibold"
                      >
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col mb-2 space-y-2 xl:flex-row xl:space-x-8 xl:space-y-0">
                <div className="w-full xl:w-1/2 ">
                  <label
                    className="block text-[#1D3564] text-xl font-semibold mb-2"
                    for="qualification"
                  >
                    Current Qualification
                    <span className="font-bold text-red-600"> *</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50"
                    id="qualification"
                    placeholder="Enter current qualification"
                    type="text"
                    value=""
                  >
                    {' '}
                  </input>
                </div>
                <div className="w-full xl:w-1/2 ">
                  <label
                    className="block text-[#1D3564] text-xl font-semibold mb-2"
                    for="subject"
                  >
                    Interested Subject
                    <span className="font-bold text-red-600"> *</span>
                  </label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 bg-gray-50"
                    id="subject"
                    placeholder="Enter interested subject"
                    type="text"
                    value=""
                  ></input>
                </div>
              </div>

              <div className="mb-[1rem] mt-6 text-[#656565] flex-col align-center ">
                <div>
                  <input
                    id="certify"
                    className="my-auto mx-auto focus:ring-0"
                    type="checkbox"
                  ></input>
                  <label
                    for="certify"
                    className="p-2 font-normal text-md cursor-pointer "
                  >
                    I hereby certify that, to the best of my knowledge, the
                    provided information is true and accurate. The documents
                    provided are genuine and the applicant named above is a
                    genuine student and intends to fulfil their student visa in
                    its entirety.{' '}
                    <a href="/privacy-policy" className="text-red-600 ml-1">
                      Privacy Policy
                    </a>
                    <span className="font-bold text-red-600"> *</span>
                  </label>
                </div>
              </div>
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="w-[80%] xl:w-[40rem] bg-[#C91129] text-white py-2 rounded-md "
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
