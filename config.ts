import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: '',
      port: '',
    },
  };
});
