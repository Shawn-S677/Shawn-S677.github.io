import { expect, test } from '@playwright/test';

test('home page presents the engineering profile and featured work', async ({
  page,
}) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { level: 1, name: 'Shawn Shen' }),
  ).toBeVisible();
  await expect(
    page.getByText('Full Stack Software Engineer').first(),
  ).toBeVisible();
  await expect(
    page.getByRole('link', { name: 'Download Resume' }),
  ).toHaveAttribute(
    'href',
    '/assets/resume/shawn-shen-angular-fullstack-resume.pdf',
  );
  await expect(page.getByText('Coming Soon')).toHaveCount(2);
  await expect(page.getByAltText(/Concept interface/)).toBeVisible();
});

test('featured project links to a direct-loadable case study', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'View case study' }).click();

  await expect(page).toHaveURL(/\/projects\/document-intelligence-platform$/);
  await expect(
    page.getByRole('heading', {
      level: 1,
      name: 'Document Intelligence Platform',
    }),
  ).toBeVisible();
  await expect(
    page.getByText('Product UI concept / implementation in progress'),
  ).toBeVisible();

  await page.goto('/projects/document-intelligence-platform');
  await expect(
    page.getByRole('link', { name: 'View repository' }),
  ).toHaveAttribute(
    'href',
    'https://github.com/Shawn-S677/Document-Intelligence-Platform',
  );
});

test('contact links expose professional channels only', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('link', { name: 'Email Shawn' })).toHaveAttribute(
    'href',
    'mailto:shawnshen677@gmail.com',
  );
  await expect(
    page.locator('a[href="https://github.com/Shawn-S677"]').first(),
  ).toBeVisible();
  await expect(
    page.locator('a[href="https://www.linkedin.com/in/shawn-ss"]').first(),
  ).toBeVisible();
  await expect(page.getByText('(516) 218-9206')).toHaveCount(0);
  await expect(page.getByText('60201')).toHaveCount(0);
});
