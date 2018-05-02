export async function getCurrentUser() {
  try {
    const data = {
      _id: 'dovydas',
      email: 'dovydas@ceilutka.lt',
      roles: ['CLASS_A'],
      createdAt: '',
      updatedAt: '',
    };
    return data;
  } catch (error) {
    return null;
  }
}

export async function signup() {
  try {
    const data = {
      token: 'secret-token',
    };
    return data;
  } catch (error) {
    return error;
  }
}
