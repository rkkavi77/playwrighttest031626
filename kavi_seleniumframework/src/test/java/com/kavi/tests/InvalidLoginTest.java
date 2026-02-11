package com.kavi.tests;

import com.kavi.base.BaseTest;
import com.kavi.pages.SalesforceLoginPage;
import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class InvalidLoginTest extends BaseTest {
    private SalesforceLoginPage loginPage;

    @DataProvider(name = "invalidCredentials")
    public Object[][] invalidCredentials() {
        return new Object[][] {
            { "invaliduser@example.com", "wrongpassword" },
            { "testuser@example.com", "incorrectpass123" },
            { "nonexistent@salesforce.test", "anypassword" },
            { "", "password123" },
            { "user@example.com", "" }
        };
    }

    @Test(dataProvider = "invalidCredentials", description = "Test invalid login scenarios")
    public void testInvalidLogin(String username, String password) {
        try {
            loginPage = new SalesforceLoginPage(driver);
            Assert.assertTrue(loginPage.isLoginPageDisplayed(), 
                "Login page should be displayed");
            loginPage.performLogin(username, password);
            
            boolean isErrorDisplayed = loginPage.isErrorMessageDisplayed();
            Assert.assertTrue(isErrorDisplayed, 
                "Error message should be displayed for invalid credentials");
        } catch (Exception e) {
            throw new RuntimeException("Invalid login test failed: " + e.getMessage(), e);
        }
    }

    @Test(description = "Test login with invalid email format")
    public void testLoginWithInvalidEmailFormat() {
        try {
            loginPage = new SalesforceLoginPage(driver);
            Assert.assertTrue(loginPage.isLoginPageDisplayed(), 
                "Login page should be displayed");
            loginPage.performLogin("invalidemail", "password123");
            
            boolean isErrorDisplayed = loginPage.isErrorMessageDisplayed();
            Assert.assertTrue(isErrorDisplayed, 
                "Error message should be displayed for invalid email format");
        } catch (Exception e) {
            throw new RuntimeException("Invalid email format test failed: " + e.getMessage(), e);
        }
    }

    @Test(description = "Test login with empty username and password")
    public void testLoginWithEmptyCredentials() {
        try {
            loginPage = new SalesforceLoginPage(driver);
            Assert.assertTrue(loginPage.isLoginPageDisplayed(), 
                "Login page should be displayed");
            loginPage.performLogin("", "");
            
            boolean isErrorDisplayed = loginPage.isErrorMessageDisplayed();
            Assert.assertTrue(isErrorDisplayed, 
                "Error message should be displayed for empty credentials");
        } catch (Exception e) {
            throw new RuntimeException("Empty credentials test failed: " + e.getMessage(), e);
        }
    }
}
