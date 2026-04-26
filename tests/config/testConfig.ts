export const config = {
  baseURL: process.env.BASE_URL || 'https://demowebshop.tricentis.com/',
  users: {
    standard: {
      username: process.env.TEST_USER_EMAIL || 'testuser@demo.test',
      password: process.env.TEST_USER_PASSWORD || 'Tosca1234!',
    },
  },
  products: {
    backpack: 'Sauce Labs Backpack',
    bikeLight: 'Sauce Labs Bike Light',
  },
};

export const url = (path: string = '/'): string => new URL(path, config.baseURL).toString();
