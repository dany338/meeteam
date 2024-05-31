import bcryptjs from "bcryptjs";

interface SeedProduct {
  product_id: number;
  name: string;
  sku: string;
  images: string[];
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  roles: ['admin'] | ['user']
}

interface SeedData {
  users: SeedUser[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'd.gallo@lucro-app.com',
      name: 'Daniel Gallo',
      password: bcryptjs.hashSync('123456'),
      roles: ['admin']
    },
    {
      email: 'test1@google.com',
      name: 'Test No 1',
      password: bcryptjs.hashSync('123456'),
      roles: ['user']
    },
  ],
  products: [
    {
      product_id: 1,
      name: 'producto 1',
      sku: '123456',
      images: ['https://via.placeholder.com/150']
    },
    {
      product_id: 2,
      name: 'producto 2',
      sku: '1234567',
      images: ['https://via.placeholder.com/150']
    },
    {
      product_id: 3,
      name: 'producto 3',
      sku: '12345678',
      images: ['https://via.placeholder.com/150']
    },
  ],
}