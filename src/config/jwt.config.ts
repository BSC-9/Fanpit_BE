export default () => ({
  jwtSecret: process.env.JWT_SECRET || 'supersecret',
  jwtExpiresIn: '1d',
});
