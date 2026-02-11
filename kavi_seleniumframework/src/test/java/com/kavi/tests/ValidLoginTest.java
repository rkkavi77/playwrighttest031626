package com.kavi.tests;

import com.kavi.base.BaseTest;
import com.kavi.pages.SalesforceLoginPage;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import java.time.Duration;

public class ValidLoginTest extends BaseTest {
    private SalesforceLoginPage loginPage;

    @DataProvider(name = "validCredentials")
    public Object[][] validCredentials() {
        return new Object[][] {
            { "testuser@example.com", "TestPassword123!" },
            { "admin@salesforce.test", "AdminPass456@" }
        };
    }

    @Test(dataProvider = "validCredentials", description = "Test valid login scenarios")
    public void testValidLogin(String username, String password) {
        try {
            loginPage = new SalesforceLoginPage(driver);
            Assert.assertTrue(loginPage.isLoginPageDisplayed(), 
                "Login page should be displayed");
            loginPage.performLogin(username, password);
            
            WebDriverWait explicitWait = new WebDriverWait(driver, Duration.ofSeconds(10));
            explicitWait.until(ExpectedConditions.urlContains("lightning"));
        } catch (Exception e) {
            throw new RuntimeException("Valid login test failed: " + e.getMessage(), e);
        }
    }

    @Test(description = "Test valid login with remember me checkbox selected")
    public void testValidLoginWithRememberMe() {
        try {
            loginPage = new SalesforceLoginPage(driver);
            Assert.assertTrue(loginPage.isLoginPageDisplayed(), 
                "Login page should be displayed");
            loginPage.performLoginWithRememberMe("testuser@example.com", "TestPassword123!");
            
            WebDriverWait explicitWait = new WebDriverWait(driver, Duration.ofSeconds(10));
            explicitWait.until(ExpectedConditions.urlContains("lightning"));
        } catch (Exception e) {
            throw new RuntimeException("Valid login with remember me test failed: " + e.getMessage(), e);
        }
    }
}
