const { test, expect } = require('@playwright/test');
import { email, password, someEmail, somePassword } from '../user.js';
const validEmail = email;
const unworkEmailValidFormat = someEmail;
const validPassword = password;
const unworkPasswordValidFormat = somePassword;
const msgErrorInvalidEmailOrPassword = 'Вы ввели неправильно логин или пароль';

test('1. Successful Login', async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveTitle('Нетология — обучение современным профессиям онлайн');
  await expect(page.getByText('Вход в личный кабинет')).toBeVisible();
	await page.getByPlaceholder('Email').click();
	await page.getByPlaceholder('Email').fill(validEmail);
	await page.getByPlaceholder('Пароль').click();
	await page.getByPlaceholder('Пароль').fill(validPassword);
	await page.getByTestId('login-submit-btn').click();
	await expect(page.getByRole('heading', { name: 'Мои курсы и профессии' })).toBeVisible({timeout: 30000});
});

test('2. Fail Login', async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
  await expect(page).toHaveTitle('Нетология — обучение современным профессиям онлайн');
  await expect(page.getByText('Вход в личный кабинет')).toBeVisible();
	await page.getByPlaceholder('Email').click();
	await page.getByPlaceholder('Email').fill(unworkEmailValidFormat);
	await page.getByPlaceholder('Пароль').click();
	await page.getByPlaceholder('Пароль').fill(unworkPasswordValidFormat);
	await page.getByTestId('login-submit-btn').click();
	await expect(page.getByTestId('login-error-hint')).toHaveText(msgErrorInvalidEmailOrPassword, {timeout: 4000});
});

