export function createUser(overrides = {}) {
    const id = Date.now();
    return {
        username: `user_${id}`,
        password: 'pa$$w0rd',
        firstName: 'Jane',
        lastName: 'Doe',
        email: `user_${id}@domain.com`,
        phone: '1234567890',
        address1: '123 Main St',
        address2: 'Apt 4B',
        city: 'Anytown',
        state: 'Anystate',
        zip: '12345',
        country: 'USA',
        ...overrides, // "..." -> Spread operator: copies "overrides" object properties onto the created user object, overriding default values.
    };
}