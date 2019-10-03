import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;

import java.util.concurrent.TimeUnit;

public class StepDefs_CoverCheck extends Driver
{


    @Given("^I have navigated to cover check page$")
    public void i_have_navigated_to_cover_check_page() throws Throwable {
       Assert.assertTrue(driver.getCurrentUrl().contains("covercheck.vwfsinsuranceportal.co.uk/"));
       Assert.assertTrue(driver.getTitle().equalsIgnoreCase("dealer portal"));

    }

    @When("^the page has loaded$")
    public void the_page_has_loaded() throws Throwable {
       driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
    }

    @Then("^I can see the page header has displayed$")
    public void i_can_see_the_page_header_has_displayed() throws Throwable {

        Assert.assertTrue(CoverCheck.header().isDisplayed());
    }

    @Then("^I can see a title and a subtitle have displayed$")
    public void i_can_see_a_title_and_a_subtitle_have_displayed() throws Throwable {

        Assert.assertTrue(CoverCheck.title().isDisplayed());
        Assert.assertTrue(CoverCheck.subTitle().isDisplayed());
   }

    @Then("^I can see a vehicle reg input field has displayed$")
    public void i_can_see_a_vehicle_reg_input_field_has_displayed() throws Throwable {

        Assert.assertTrue(CoverCheck.searchBox().isDisplayed());
    }
    @Then("^I can see a find a vehicle Search button and search icon have displayed$")
    public void i_can_see_a_find_a_vehicle_Search_button_and_search_icon_have_displayed()
    {
        Assert.assertTrue(CoverCheck.searchButton().isDisplayed());

    }


    @When("^I Enter Valid  vehicle Reg Number into search box$")
    public void i_Enter_Valid_vehicle_Reg_Number_into_search_box() throws Throwable {

        Utility.enterText(CoverCheck.searchBox(),"OV12UYY");
    }

    @When("^I click on find Vehicle button$")
    public void i_click_on_find_Vehicle_button() throws Throwable {

        Utility.clickOnElement(CoverCheck.searchButton());
    }


    @Then("^I should see Result for given Vehicle with start and end Date of cover$")
    public void i_should_see_Result_for_given_Vehicle_with_start_and_end_Date_of_cover() throws Throwable {


          Assert.assertTrue(CoverCheck.startDate().isDisplayed());
          Assert.assertTrue(CoverCheck.endDate().isDisplayed());
    }


    @When("^I enter \"([^\"]*)\" as vehicle Reg Number into search box$")
    public void i_enter_as_vehicle_Reg_Number_into_search_box(String InvelidREG) throws Throwable {
        Utility.enterText(CoverCheck.searchBox(),InvelidREG);
    }



    @Then("^I should see a Validation massage appears$")
    public void i_should_see_a_Validation_massage_appears() throws Throwable {
        Utility.isEliment_Present(CoverCheck.validationMassage());
      Assert.assertTrue(CoverCheck.validationMassage().getText().toLowerCase().
              contains("please enter a valid car registration"));
    }

    @Then("^I should not see the cover details$")
    public void i_should_not_see_the_cover_details() throws Throwable
    {
        try {
            Assert.assertFalse(CoverCheck.startDate().isDisplayed());
            Assert.assertFalse(CoverCheck.endDate().isDisplayed());
        }
        catch(Exception e)
        {
            Assert.assertTrue(e.getMessage().contains("no such element"));
            e.printStackTrace();
        }

    }

    @Then("^I should see an Error massage displayed$")
    public void i_should_see_an_Error_massage_displayed() throws Throwable {
        Utility.isEliment_Present(CoverCheck.errorMassage());
    }


}
