

Feature:  Drive Away Insurance cover check functionality


  Scenario: 001- Verify ‘Drive Away Insurance cover check’ page components
    Given I have navigated to cover check page
    When the page has loaded
    Then I can see the page header has displayed
    And I can see a title and a subtitle have displayed
    And I can see a vehicle reg input field has displayed
    And I can see a find a vehicle Search button and search icon have displayed


  Scenario: 002- Verify the cover result with Valid vehicle data

    Given I have navigated to cover check page
    When the page has loaded
    When I Enter Valid  vehicle Reg Number into search box
    And I click on find Vehicle button
    Then I should see Result for given Vehicle with start and end Date of cover



  Scenario Outline: 003- Attempt to search vehicle cover with invalid vehicle Data

    Given I have navigated to cover check page
    When the page has loaded
    When I enter "<RegNumber>" as vehicle Reg Number into search box
    And I click on find Vehicle button
    Then I should see a Validation massage appears
    And I should not see the cover details
    Examples:
      |RegNumber|
      |         |
      |£@$£$^%&|



  @Test
  Scenario Outline: 004- Attempt to search vehicle cover with Invalid Reg number
    Given I have navigated to cover check page
    When the page has loaded
    When I enter "<RegNumber>" as vehicle Reg Number into search box
    And I click on find Vehicle button
    Then I should see an Error massage displayed
    And I should not see the cover details
    Examples:
      |RegNumber|
      | 3345465|
      |xrdgfhuh|
      |lv59obk|



