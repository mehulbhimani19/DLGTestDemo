import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class Utility extends Driver
{
    public static void enterText(WebElement element , String text)
    {
//        element.clear();
        element.sendKeys(text);
    }

    public static void clickOnElement (WebElement element)
    {
        element.click();
    }


    public static void captureScreenshot(WebDriver driver, String screenshotName)
    {
        try {
            TakesScreenshot ts =(TakesScreenshot)driver;    // Create reference of TakesScreenshot
            File source = ts.getScreenshotAs(OutputType.FILE);  // Call method to capture screenshot

            // Copy files to specific location here it will save all screenshot in our project home directory and
            // result.getName() will return name of test case so that screenshot name will be same
            FileUtils.copyFile(source,new File("src/main/resources/Screenshots/"+screenshotName+".png"));

        }
        catch (Exception e)
        {
            System.out.println("Exception while taking screenshot" + e.getMessage());
            e.printStackTrace();
        }

    }

    public static void WaitImplicitly(int time)
    {

        driver.manage().timeouts().implicitlyWait(time, TimeUnit.SECONDS);
    }
    public static void WaitExplicitly (WebElement element , int time)
    {
        WebDriverWait explicitlyWait = new WebDriverWait(driver,time);
        explicitlyWait.until(ExpectedConditions.visibilityOf(element));
    }

    public static String get_Text (WebElement element)
    {
        return element.getText();
    }

    public static boolean isEliment_Present(WebElement element)
    {
        return element.isDisplayed();
    }
    public static String randomDate()
    {
        SimpleDateFormat formet = new SimpleDateFormat("ddmmyyHHmmss");
        return formet.format(new Date());
    }


}
