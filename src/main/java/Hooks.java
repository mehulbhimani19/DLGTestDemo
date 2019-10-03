
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;


import java.util.concurrent.TimeUnit;
import cucumber.api.java.After;
import cucumber.api.java.Before;
public class Hooks extends Driver
{
    //create object of BrowserSelector
   BrowserSelector browserSelector = new BrowserSelector ();

    @Before
    public void setUp()
    {
        browserSelector.browserSelection(); // call method for selected browser
        String baseURL = "https://covercheck.vwfsinsuranceportal.co.uk/";

        driver.manage().window().maximize();
        driver.get(baseURL);
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
   }



      @After
      public void tearDown()
      {
       driver.close();
      }


//    @After
//    public void tearDown(ITestResult result)
//    {   // Here will compare if test is failing then only it will enter into if condition
//        if(ITestResult.FAILURE==result.getStatus())
//        {
//            Utility.captureScreenshot(driver,result.getName()+"_FAIL"); // call Screenshot method from utility class
//        }
//        driver.close();
//        driver.quit();
//    }
}
