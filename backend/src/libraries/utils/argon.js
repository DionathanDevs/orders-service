import * as argon2 from 'argon2';

async function hashData(data) {
  const dataCript = await argon2.hash(data);

  return dataCript;
}

async function verifyHashData(data, dataInput) {
  return await argon2.verify(data, dataInput);
}

export { hashData, verifyHashData };
