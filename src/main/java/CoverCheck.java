import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class CoverCheck extends Driver
{


   public static WebElement header ()
   { WebElement element=driver.findElement(By.xpath("//div[@id='header']//a//img"));
   return element;
   }

    public static WebElement title ()
    { WebElement element=driver.findElement(By.id("dlg-dealersearch-title"));
        return element;
    }
    public static WebElement subTitle ()
    { WebElement element=driver.findElement(By.id("dlg-dealersearch-subtitle"));
        return element;
    }

    public static WebElement searchBox()
    { WebElement element=driver.findElement(By.name("vehicleReg"));
        return element;
    }

    public static WebElement searchButton ()
    { WebElement element=driver.findElement(By.xpath("//span[contains(text(),'Find vehicle')]"));
        return element;
    }

    public static WebElement errorMassage ()
    { WebElement element=driver.findElement(By.xpath("//div[@class='result']"));
        return element;
    }

    public static WebElement validationMassage ()
    { WebElement element=driver.findElement(By.xpath("//div[@class='error-required']"));
        return element;
    }

    public static WebElement startDate () {
        WebElement element = driver.findElement(By.xpath("//div[contains(text(),'Cover start:')]"));
        return element;
    }

    public static WebElement endDate () {
        WebElement element = driver.findElement(By.xpath("//div[contains(text(),'Cover end:')]"));
        return element;
    }
}
