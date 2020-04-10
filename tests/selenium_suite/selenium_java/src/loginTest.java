

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
public class loginTest {

    static String myUserName = "admin@outlook.com";
    static String myPassword = "admin123";

    public static void main(String[] args) throws InterruptedException {

        System.setProperty("webdriver.chrome.driver","/home/headquarters/Desktop/ESC/PS3/chromedriver");
        WebDriver driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:8080/login");

        // get the user name field of the account page
        WebElement username = driver.findElement(By.id("email"));

        // send my user name to fill up the box
        username.sendKeys(myUserName);

        // locate the "Next" button in the account page
        WebElement password = driver.findElement(By.id("password"));
        password.sendKeys(myPassword);

        // login and :)
        WebElement nextButton = driver.findElement(By.id("loginbtn"));
        nextButton.click();
        Thread.sleep(3000);

        WebElement level1 = driver.findElement(By.id("lvl1"));
        level1.click();
        Thread.sleep(3000);
        WebElement level2 = driver.findElement(By.id("lvl2"));
        level2.click();
    }
}


