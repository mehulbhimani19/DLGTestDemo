$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/FeatureFiles/InsuranceCoverFunctionality.feature");
formatter.feature({
  "line": 3,
  "name": "Drive Away Insurance cover check functionality",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 34812946945,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "001- Verify ‘Drive Away Insurance cover check’ page components",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;001--verify-‘drive-away-insurance-cover-check’-page-components",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see the page header has displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can see a title and a subtitle have displayed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see a vehicle reg input field has displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see a find a vehicle Search button and search icon have displayed",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_have_navigated_to_cover_check_page()"
});
formatter.result({
  "duration": 1035632857,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.the_page_has_loaded()"
});
formatter.result({
  "duration": 29014238,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_can_see_the_page_header_has_displayed()"
});
formatter.result({
  "duration": 548771014,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_can_see_a_title_and_a_subtitle_have_displayed()"
});
formatter.result({
  "duration": 217217173,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_can_see_a_vehicle_reg_input_field_has_displayed()"
});
formatter.result({
  "duration": 114429434,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_can_see_a_find_a_vehicle_Search_button_and_search_icon_have_displayed()"
});
formatter.result({
  "duration": 104418808,
  "status": "passed"
});
formatter.after({
  "duration": 2372715832,
  "status": "passed"
});
formatter.before({
  "duration": 11011175507,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "002- Verify the cover result with Valid vehicle data",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;002--verify-the-cover-result-with-valid-vehicle-data",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I Enter Valid  vehicle Reg Number into search box",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see Result for given Vehicle with start and end Date of cover",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_have_navigated_to_cover_check_page()"
});
formatter.result({
  "duration": 69323588,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.the_page_has_loaded()"
});
formatter.result({
  "duration": 38649861,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_Enter_Valid_vehicle_Reg_Number_into_search_box()"
});
formatter.result({
  "duration": 626581529,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_click_on_find_Vehicle_button()"
});
formatter.result({
  "duration": 109456095,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_see_Result_for_given_Vehicle_with_start_and_end_Date_of_cover()"
});
formatter.result({
  "duration": 535336011,
  "status": "passed"
});
formatter.after({
  "duration": 2139915873,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "003- Attempt to search vehicle cover with invalid vehicle Data",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;003--attempt-to-search-vehicle-cover-with-invalid-vehicle-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \"\u003cRegNumber\u003e\" as vehicle Reg Number into search box",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see a Validation massage appears",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should not see the cover details",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;003--attempt-to-search-vehicle-cover-with-invalid-vehicle-data;",
  "rows": [
    {
      "cells": [
        "RegNumber"
      ],
      "line": 34,
      "id": "drive-away-insurance-cover-check-functionality;003--attempt-to-search-vehicle-cover-with-invalid-vehicle-data;;1"
    },
    {
      "cells": [
        ""
      ],
      "line": 35,
      "id": "drive-away-insurance-cover-check-functionality;003--attempt-to-search-vehicle-cover-with-invalid-vehicle-data;;2"
    },
    {
      "cells": [
        "£@$£$^%\u0026"
      ],
      "line": 36,
      "id": "drive-away-insurance-cover-check-functionality;003--attempt-to-search-vehicle-cover-with-invalid-vehicle-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7146405412,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "003- Attempt to search vehicle cover with invalid vehicle Data",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;003--attempt-to-search-vehicle-cover-with-invalid-vehicle-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \"\" as vehicle Reg Number into search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see a Validation massage appears",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should not see the cover details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_have_navigated_to_cover_check_page()"
});
formatter.result({
  "duration": 50357082,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.the_page_has_loaded()"
});
formatter.result({
  "duration": 34207447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "StepDefs_CoverCheck.i_enter_as_vehicle_Reg_Number_into_search_box(String)"
});
formatter.result({
  "duration": 158658166,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_click_on_find_Vehicle_button()"
});
formatter.result({
  "duration": 127941016,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_see_a_Validation_massage_appears()"
});
formatter.result({
  "duration": 228262020,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_not_see_the_cover_details()"
});
formatter.result({
  "duration": 3665712183,
  "status": "passed"
});
formatter.after({
  "duration": 341508415,
  "status": "passed"
});
formatter.before({
  "duration": 10556318064,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "003- Attempt to search vehicle cover with invalid vehicle Data",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;003--attempt-to-search-vehicle-cover-with-invalid-vehicle-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter \"£@$£$^%\u0026\" as vehicle Reg Number into search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see a Validation massage appears",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should not see the cover details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_have_navigated_to_cover_check_page()"
});
formatter.result({
  "duration": 42588584,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.the_page_has_loaded()"
});
formatter.result({
  "duration": 16989644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "£@$£$^%\u0026",
      "offset": 9
    }
  ],
  "location": "StepDefs_CoverCheck.i_enter_as_vehicle_Reg_Number_into_search_box(String)"
});
formatter.result({
  "duration": 213443450,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_click_on_find_Vehicle_button()"
});
formatter.result({
  "duration": 102863924,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_see_a_Validation_massage_appears()"
});
formatter.result({
  "duration": 140917330,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_not_see_the_cover_details()"
});
formatter.result({
  "duration": 3080874098,
  "status": "passed"
});
formatter.after({
  "duration": 2189081628,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 41,
  "name": "004- Attempt to search vehicle cover with Invalid Reg number",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I enter \"\u003cRegNumber\u003e\" as vehicle Reg Number into search box",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see an Error massage displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should not see the cover details",
  "keyword": "And "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;",
  "rows": [
    {
      "cells": [
        "RegNumber"
      ],
      "line": 49,
      "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;;1"
    },
    {
      "cells": [
        "3345465"
      ],
      "line": 50,
      "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;;2"
    },
    {
      "cells": [
        "xrdgfhuh"
      ],
      "line": 51,
      "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;;3"
    },
    {
      "cells": [
        "lv59obk"
      ],
      "line": 52,
      "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7672181590,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "004- Attempt to search vehicle cover with Invalid Reg number",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I enter \"3345465\" as vehicle Reg Number into search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see an Error massage displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should not see the cover details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_have_navigated_to_cover_check_page()"
});
formatter.result({
  "duration": 48272456,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.the_page_has_loaded()"
});
formatter.result({
  "duration": 22839702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3345465",
      "offset": 9
    }
  ],
  "location": "StepDefs_CoverCheck.i_enter_as_vehicle_Reg_Number_into_search_box(String)"
});
formatter.result({
  "duration": 230293356,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_click_on_find_Vehicle_button()"
});
formatter.result({
  "duration": 147652397,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_see_an_Error_massage_displayed()"
});
formatter.result({
  "duration": 189995058,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_not_see_the_cover_details()"
});
formatter.result({
  "duration": 3079001053,
  "status": "passed"
});
formatter.after({
  "duration": 2114525750,
  "status": "passed"
});
formatter.before({
  "duration": 6530384777,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "004- Attempt to search vehicle cover with Invalid Reg number",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I enter \"xrdgfhuh\" as vehicle Reg Number into search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see an Error massage displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should not see the cover details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_have_navigated_to_cover_check_page()"
});
formatter.result({
  "duration": 41083437,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.the_page_has_loaded()"
});
formatter.result({
  "duration": 18224787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xrdgfhuh",
      "offset": 9
    }
  ],
  "location": "StepDefs_CoverCheck.i_enter_as_vehicle_Reg_Number_into_search_box(String)"
});
formatter.result({
  "duration": 230947046,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_click_on_find_Vehicle_button()"
});
formatter.result({
  "duration": 115921554,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_see_an_Error_massage_displayed()"
});
formatter.result({
  "duration": 310681923,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_not_see_the_cover_details()"
});
formatter.result({
  "duration": 3084203342,
  "status": "passed"
});
formatter.after({
  "duration": 2193240616,
  "status": "passed"
});
formatter.before({
  "duration": 6485208273,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "004- Attempt to search vehicle cover with Invalid Reg number",
  "description": "",
  "id": "drive-away-insurance-cover-check-functionality;004--attempt-to-search-vehicle-cover-with-invalid-reg-number;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 40,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I have navigated to cover check page",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "the page has loaded",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I enter \"lv59obk\" as vehicle Reg Number into search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I click on find Vehicle button",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I should see an Error massage displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I should not see the cover details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_have_navigated_to_cover_check_page()"
});
formatter.result({
  "duration": 56970964,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.the_page_has_loaded()"
});
formatter.result({
  "duration": 37496033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lv59obk",
      "offset": 9
    }
  ],
  "location": "StepDefs_CoverCheck.i_enter_as_vehicle_Reg_Number_into_search_box(String)"
});
formatter.result({
  "duration": 193366144,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_click_on_find_Vehicle_button()"
});
formatter.result({
  "duration": 230818361,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_see_an_Error_massage_displayed()"
});
formatter.result({
  "duration": 815683683,
  "status": "passed"
});
formatter.match({
  "location": "StepDefs_CoverCheck.i_should_not_see_the_cover_details()"
});
formatter.result({
  "duration": 3048896936,
  "status": "passed"
});
formatter.after({
  "duration": 207117334,
  "status": "passed"
});
});